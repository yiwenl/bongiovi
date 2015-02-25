var Buffer = require('buffer').Buffer;
var child_process = require('child_process');
var fs = require('graceful-fs');
var glob = require('glob');
var gutil = require('gulp-util');
var mkdirp = require('mkdirp');
var path = require('path');
var tempWrite = require('temp-write');
var through = require('through');
var tmpdir = require('os').tmpdir();
var uuid = require('uuid');

const PLUGIN_NAME = 'gulp-closure-library';

module.exports = function(opt, execFile_opt) {
  opt = opt || {};
  opt.maxBuffer = opt.maxBuffer || 1000;
  opt.continueWithWarnings = opt.continueWithWarnings || false;
  var files = [];
  var execFile = execFile_opt || child_process.execFile;

  if (!opt.fileName && !hasModules())
    throw new gutil.PluginError(PLUGIN_NAME, 'Missing fileName option.');

  var getFlagFilePath = function(files) {
    var dirName = uuid.v4();
    var src = files.map(function(file) {
      var relativePath = path.relative(file.cwd, file.path);
      var fullpath = path.join(tmpdir, dirName, relativePath);
      mkdirp.sync(path.dirname(fullpath));
      fs.writeFileSync(fullpath, file.contents.toString());
      return '--js="' + fullpath + '"';
    }).join('\n');
    return tempWrite.sync(src);
  };

  // Can't use sindresorhus/dargs, compiler requires own syntax.
  var flagsToArgs = function(flags) {
    var args = [];
    for (var flag in flags || {}) {
      var values = flags[flag];
      if (!Array.isArray(values)) values = [values];
      values.forEach(function(value) {
        if (flag === 'externs') {
          glob.sync(value).forEach(function(resolved){
            args.push(buildFlag(flag, resolved))
          });
        } else {
          args.push(buildFlag(flag, value));
        }
      });
    }
    return args;
  };

  var buildFlag = function(flag, value){
    return '--' + flag + (value === null ? '' : '=' + value)
  };

  function bufferContents(file) {
    if (file.isNull()) return;
    if (file.isStream()) {
      return this.emit('error',
        new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }
    files.push(file);
  }

  function hasModules(){
    var properties = Object.getOwnPropertyNames(opt.compilerFlags || {});
    return properties.indexOf("module") && properties.indexOf("module_output_path_prefix");
  }


  function endStream() {
    if (!files.length) return this.emit('end');
    var firstFile = files[0];
    var outputFilePath = tempWrite.sync('');
    var args;
    if (opt.compilerPath) {
      args = [
        '-jar',
        // For faster compilation. It's supported everywhere from Java 1.7+.
        '-XX:+TieredCompilation',
        opt.compilerPath,
        // To prevent maximum length of command line string exceeded error.
        '--flagfile="' + getFlagFilePath(files) + '"'
      ];
    } else {
      args = [
        // To prevent maximum length of command line string exceeded error.
        '--flagfile="' + getFlagFilePath(files) + '"'
      ];
    }
    args = args.concat(flagsToArgs(opt.compilerFlags));

    var javaFlags = opt.javaFlags || [];
    args = javaFlags.concat(args);

    // Force --js_output_file to prevent [Error: stdout maxBuffer exceeded.]
    args.push('--js_output_file="' + outputFilePath + '"');

    // Enable custom max buffer to fix "stderr maxBuffer exceeded" error. Default is 1000*1024.
    var executable = opt.compilerPath ? 'java' : 'closure-compiler';
    var jar = execFile(executable, args, { maxBuffer: opt.maxBuffer*1024 }, function(error, stdout, stderr) {
      if (error || (stderr && !opt.continueWithWarnings)) {
        this.emit('error', new gutil.PluginError(PLUGIN_NAME, error || stderr));
        process.exit(1);
        return;
      }

      if (stderr) {
        gutil.log(stderr);
      }

      var outputFileSrc = fs.readFile(outputFilePath, function(err, data) {
        if (err) {
          this.emit('error', new gutil.PluginError(PLUGIN_NAME, err));
          process.exit(1);
          return;
        }

        if(opt.fileName){
          var outputFile = new gutil.File({
            base: firstFile.base,
            contents: new Buffer(data),
            cwd: firstFile.cwd,
            path: path.join(firstFile.base, opt.fileName)
          });

         this.emit('data', outputFile);
        }
        this.emit('end');
      }.bind(this));

    }.bind(this));
  }

  return through(bufferContents, endStream);
};
