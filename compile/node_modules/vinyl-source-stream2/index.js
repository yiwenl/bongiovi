var through2 = require('through2');
var File = require('vinyl');
var path = require('path');

module.exports = createSourceStream;

function createSourceStream(opts) {
    if (typeof opts === 'string') {
        opts = { path: opts };
    } else if (!opts) {
        opts = {};
    }
    if (opts.path) {
        opts.path = path.resolve(opts.path);
        if (!opts.base) {
            opts.base = path.dirname(opts.path);
        }
    }

    if (!('buffer' in opts)) opts.buffer = true;

    var content = opts.buffer ? [] : through2();
    var out = false;

    var file = new File(opts);

    return through2.obj(function (chunk, enc, next) {
        if (!out && !opts.buffer) {
            this.push(file);
            out = true
        }

        content.push(chunk);
        next()
    }, function (cb) {
        if (opts.buffer) {
            file.contents = Buffer.concat(content);
            this.push(file);
        } else {
            content.push(null);
            file.contents = content;
        }
        this.push(null);
        cb();
    })
}
