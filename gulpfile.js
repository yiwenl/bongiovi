'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var browserify  = require('browserify');
var source      = require('vinyl-source-stream2')
var uglify      = require('gulp-uglify');
var sass        = require('gulp-ruby-sass');
var prefix      = require('gulp-autoprefixer');
var watchify    = require('watchify');
var buffer      = require('vinyl-buffer');
var rename      = require('gulp-rename');
var jshint      = require('gulp-jshint');
var reload      = browserSync.reload;


var bundler = watchify(browserify({
	entries:['./src/bongiovi.js'],
	standalone: 'bongiovi',
	debug: true
}, watchify.args));

gulp.task('browserify', bundle);
gulp.task('bundle', ['jshint'], bundle);

bundler.on('update', bundle);     

function bundle() {
    var b = bundler.bundle()
		.pipe(source('bongiovi.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'))
		.pipe(gulp.dest('./test/src/js/libs'))
		.pipe(rename({ extname: '.min.js' }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'))
		.pipe(gulp.dest('./test/src/js/libs'))
      .pipe(reload({stream: true, once: true}));
    return b;
}

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['jshint']);
});

gulp.task('jshint', function() {
  return gulp.src([
      'src/**/*.js'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['bundle', 'watch']);
