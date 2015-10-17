var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	sass = require('gulp-sass'),
	webserver = require('gulp-webserver');

gulp.task('htmlmin', function() {
	gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('.'))
});

gulp.task('sass', function() {
	gulp.src('src/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('.'));
});


gulp.task('default',  ['sass', 'htmlmin']);
gulp.task('serve', ['sass', 'htmlmin'], function() {
	gulp.src('.').pipe(webserver());
});
