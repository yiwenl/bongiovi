var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream2')
var uglify = require('gulp-uglify');
var closureCompiler = require('gulp-closure-compiler');


gulp.task('browserify', function() {
	var bundleStream = browserify('./js/app.js')
	.bundle()
	.on('error', function(err){
		console.log(err.message);
		this.end();
	});
 
	bundleStream
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./bundle/'));
});


gulp.task('compile', function() {
	var bundleStream = browserify('./js/app.js')
	.bundle()
	.on('error', function(err){
		console.warn(err.message);
		this.end();
	});
 
	bundleStream
	.pipe(source('bongiovi-compiled.js'))
	.pipe(gulp.dest('../js/compile'));
});


gulp.task('minify', function() {
	var bundleStream = browserify('./js/app.js')
	.bundle()
	.on('error', function(err){
		console.warn(err.message);
		this.end();
	});
 
	bundleStream
	.pipe(source('bongiovi-min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('../js/compile'));
});


gulp.task('watch', function() {
	gulp.watch('js/*.js', ['browserify', browserSync.reload]);
});

gulp.task('browser-sync', function() {
	browserSync({
			server: {
				baseDir: "./"
			},
			watchOptions: {
			debounceDelay: 1000
		}
	});
});

gulp.task('closure', function() {
  gulp.src('../js/bongiovi/*.js')
    .pipe(closureCompiler({
      compilerPath: 'compiler/compiler.jar',
      fileName: 'bongiovi-min.js'
    }))
    .pipe(gulp.dest('../js/compile'));
});

gulp.task('default', ['closure']);
gulp.task('compileAll', ['minify', 'compile']);
