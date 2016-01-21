'use strict';

// const gulp        = require('gulp');
import gulp from 'gulp';
import babel from 'gulp-babel';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import jshint from 'gulp-jshint';


let logError = function(msg) {
    console.log('Error', msg.toString());   
}

let bundler = browserify({
    entries: 'src/bongiovi.js',
    standalone: 'bongiovi',
    debug: true
});

let lint = function() {
    return gulp.src([
        'src/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));   
}


let bundle = function() {
    bundler.transform(babelify);

    bundler.bundle()
        .on('error', logError)
        .pipe(source('bongiovi.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify()) // Use any gulp plugins you want now
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build'));
}

//  Tasks

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['jshint', 'bundle']);
});
gulp.task('jshint', lint);
gulp.task('lint', lint);
gulp.task('bundle', bundle);
gulp.task('default', ['jshint', 'bundle', 'watch']);