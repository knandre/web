var gulp = require('gulp');

var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');


gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
