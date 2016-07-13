const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

gulp.task('html', function() {
});

gulp.task('serve', ['default'], function() {
	gulp.watch('*.scss', ['sass']);
	gulp.src('.').pipe($.webserver());
});

gulp.task('default', []);