var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('default', function() {
});

gulp.task('serve', function() {
	gulp.src('.').pipe(webserver());
});