'use strict';

// const gulp        = require('gulp');
import gulp from 'gulp';
import babel from 'gulp-babel';
import babelify from'babelify';
import browserify from'browserify';
import buffer from'vinyl-buffer';
import source from'vinyl-source-stream';
import sourcemaps from'gulp-sourcemaps';
import uglify from'gulp-uglify';


let test = function() {
	let bundler = browserify({
        entries: 'src/bongiovi.js',
        debug: true
    });


    bundler.transform(babelify);

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('bongiovi.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify()) // Use any gulp plugins you want now
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build'));
}

gulp.task('default', test);