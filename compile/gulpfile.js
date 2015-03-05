var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream2')
var uglify = require('gulp-uglify');
var closureCompiler = require('gulp-closure-compiler');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('watch', function() {
	gulp.watch('../js/bongiovi/**/*.js', ['closure', browserSync.reload]);
	gulp.watch('../js/bongiovi/*.js', ['closure', browserSync.reload]);
	gulp.watch('../assets/shaders/*.vert', [browserSync.reload]);
	gulp.watch('../assets/shaders/*.frag', [browserSync.reload]);
	gulp.watch('../js/*.js', ['closure', browserSync.reload]);
	// gulp.watch('js/*.js', ['browserify', browserSync.reload]);
});

gulp.task('browser-sync', function() {
	browserSync({
			proxy: 'localhost:8888/git/bongiovi/',
			watchOptions: {
			debounceDelay: 1000
		}
	});
});

gulp.task('bongiovi', function() {
  gulp.src('../js/bongiovi/*.js')
	.pipe(closureCompiler({
	  compilerPath: 'compiler/compiler.jar',
	  fileName: 'bongiovi-min.js'
	}))
	.on('error', function(err){
		console.log(err.message);
		this.end();
	})
	.pipe(gulp.dest('../js/compile'));
});

gulp.task('bongiovi-post', function() {
  gulp.src('../js/bongiovi/**/*.js')
	.pipe(closureCompiler({
	  compilerPath: 'compiler/compiler.jar',
	  fileName: 'bongiovi-min-post.js'
	}))
	.on('error', function(err){
		console.log(err.message);
		this.end();
	})
	.pipe(gulp.dest('../js/compile'));
});

gulp.task('closure', ['bongiovi-post']);
gulp.task('default', ['closure', 'browser-sync', 'watch']);
