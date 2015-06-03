'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var browserify  = require('browserify');
var source      = require('vinyl-source-stream')
var uglify      = require('gulp-uglify');
var exorcist    = require('exorcist');
var watchify    = require('watchify');
var buffer      = require('vinyl-buffer');
var rename      = require('gulp-rename');
var jshint      = require('gulp-jshint');
var derequire   = require('gulp-derequire');
var reload      = browserSync.reload;
// log
function logError(msg) {
	console.log( msg.toString() );
}

var bundler = watchify(browserify({
	entries:['./src/bongiovi.js'],
	standalone: 'bongiovi',
	debug: true
}, watchify.args));


function bundle() {
    return bundler
    .bundle()
	.pipe(exorcist('./dist/bongiovi.js.map'))
	.on('error', logError)
	.pipe(source('bongiovi.js'))
	.pipe(buffer())
	.pipe(derequire())
	.pipe(gulp.dest('./dist/'))
	.pipe(gulp.dest('./test/src/js/libs'))
	.pipe(rename({ extname: '.min.js' }))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'))
	.pipe(gulp.dest('./test/src/js/libs'))
	.pipe(reload({stream: true}));
}

bundler.on('update', bundle);     
gulp.task('bundle', ['jshint'], bundle);


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
