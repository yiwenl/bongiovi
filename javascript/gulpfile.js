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
	.pipe(exorcist('./dist/bongiovi.js.map').on('error', logError))
	.on('error', logError)
	.pipe(source('bongiovi.js'))
	.pipe(buffer())
	.pipe(derequire())
	.pipe(gulp.dest('./dist/'))
	.pipe(reload({stream: true}));
}

function bundleProd() {
    return bundle()
	.pipe(rename({ extname: '.min.js' }))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'))
	.pipe(reload({stream: true}));
}

bundler.on('update', bundle);     
gulp.task('bundle', ['jshint'], bundle);
gulp.task('bundleProd', ['jshint'], bundleProd);


//	post 

var bundlerPost = watchify(browserify({
	entries:['./src/bongiovi-post.js'],
	standalone: 'bongiovi-post',
	debug: true
}, watchify.args));


function bundlePost() {
    return bundlerPost
    .bundle()
	.pipe(exorcist('./dist/bongiovi-post.js.map').on('error', logError))
	.on('error', logError)
	.pipe(source('bongiovi-post.js'))
	.pipe(buffer())
	.pipe(derequire())
	.pipe(gulp.dest('./dist/'))
	.pipe(reload({stream: true}));
}

function bundlePostProd() {
    return bundlePost()
	.pipe(rename({ extname: '.min.js' }))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'))
	.pipe(reload({stream: true}));
}

// bundlerPost.on('update', bundlePost);
gulp.task('bundlePost', ['jshint'], bundlePost);
gulp.task('bundlePostProd', ['jshint'], bundlePostProd);


gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['jshint']);
});

var lint = function() {
	return gulp.src([
	    'src/**/*.js'
	])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));	
}

gulp.task('jshint', lint);
gulp.task('lint', lint);

gulp.task('default', ['bundle', 'watch', 'bundlePost']);
gulp.task('build', ['bundleProd', 'bundlePostProd']);
