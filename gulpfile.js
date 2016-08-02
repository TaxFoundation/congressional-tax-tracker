'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    data = require('gulp-data'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    webserver = require('gulp-webserver');

gulp.task('default', ['build', 'webserver', 'watch']);

gulp.task('build', ['renderHtml', 'moveImages', 'moveJavascript', 'compileSass'], function (cb) {
  cb();
});

gulp.task('renderHtml', function () {
  gulp.src('./src/templates/*.pug')
  .pipe(data(function (file) {
    return require('./src/data/data.json');
  }))
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('compileSass', function () {
  gulp.src('./src/scss/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['> 5%'] }))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('moveImages', function () {
  gulp.src('./src/images/**/*')
  .pipe(gulp.dest('./dist/images/'));
});

gulp.task('moveJavascript', function () {
  gulp.src('./src/js/**/*')
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('webserver', function () {
  gulp.src('./dist')
  .pipe(webserver({
    fallback: 'index.html',
    livereload: true,
    open: true,
    port: 1937,
  }));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['compileSass']);
  gulp.watch('./src/images/**/*', ['moveImages']);
  gulp.watch('./src/js/**/*', ['moveJavascript']);
  gulp.watch('./src/data/**/*', ['renderHtml']);
  gulp.watch('./src/templates/**/*', ['renderHtml']);
});
