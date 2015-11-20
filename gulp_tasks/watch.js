var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('html', function () {
  gulp.src(['./app/**/*.html', './index.html'])
    .pipe(connect.reload());
});

gulp.task('styles', function () {
gulp.src(['./app/**/*.css'])
  .pipe(connect.reload());
});

gulp.task('scripts', function () {
gulp.src(['./app/**/*.js'])
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html', './index.html'], ['html']);
  gulp.watch(['./app/**/*.css'], ['styles']);
  gulp.watch(['./app/**/*.js'], ['scripts']);
});
