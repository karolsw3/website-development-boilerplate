var gulp = require('gulp')
var pug = require('gulp-pug')
var stylus = require('gulp-stylus')

gulp.task('html', function () {
  return gulp.src('src/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest(''))
})

gulp.task('css', function () {
  return gulp.src('src/**/*.stylus')
    .pipe(stylus())
    .pipe(gulp.dest(''))
})

gulp.task('default', [ 'html', 'css' ])
