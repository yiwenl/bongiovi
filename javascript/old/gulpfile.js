var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream2')
var uglify = require('gulp-uglify');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('watch', function() {
	gulp.watch('./dist/js/bongiovi/**/*.js', ['closure', browserSync.reload]);
	gulp.watch('./dist/js/bongiovi/*.js', ['closure', browserSync.reload]);
	gulp.watch('./dist/assets/shaders/*.*', ['closure', browserSync.reload]);
	gulp.watch('./dist/js/*.js', ['closure', browserSync.reload]);
});

gulp.task('browser-sync', function() {
	browserSync({
			proxy: 'localhost:8888/git/bongiovi/dist',
			watchOptions: {
			debounceDelay: 1000
		}
	});
});

gulp.task('bongiovi', function() {
  gulp.src('./dist/js/bongiovi/*.js')
	.pipe(closureCompiler({
	  compilerPath: 'compiler/compiler.jar',
	  fileName: 'bongiovi-min.js'
	}))
	.on('error', function(err){
		console.log(err.message);
		this.end();
	})
	.pipe(gulp.dest('./dist/js/compile'));
});

gulp.task('bongiovi-post', function() {
  gulp.src('./dist/js/bongiovi/**/*.js')
	.pipe(closureCompiler({
	  compilerPath: 'compiler/compiler.jar',
	  fileName: 'bongiovi-min-post.js'
	}))
	.on('error', function(err){
		console.log(err.message);
		this.end();
	})
	.pipe(gulp.dest('./dist/js/compile'));
});

gulp.task('closure', ['bongiovi-post', 'bongiovi']);
gulp.task('default', ['closure', 'browser-sync', 'watch']);
