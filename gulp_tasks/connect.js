var gulp = require('gulp'),
  connect = require('gulp-connect'),
  path = require('path');

gulp.task('connect', function() {
  connect.server({
    root: [path.resolve('./')],
    livereload: true
  });
});
