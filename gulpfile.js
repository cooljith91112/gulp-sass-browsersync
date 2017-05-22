'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var config={
  serverPath: './',
  sassSource: './sass',
  cssDestination: './css'
}

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: config.serverPath
    });

    gulp.watch(config.sassSource+"/**/*.scss", ['sass']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});


gulp.task('sass', function () {
  return gulp.src(config.sassSource+'/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.cssDestination))
    .pipe(browserSync.stream({match: '**/*.css'}));
});