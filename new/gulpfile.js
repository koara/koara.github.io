const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

gulp.task('html', function() {
});

gulp.task('sass', function () {
    return gulp.src('src/base.scss')
        .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
        .pipe($.rename('a.css'))
        .pipe(gulp.dest('.'));
});

gulp.task('serve', ['default'], function() {
	gulp.watch('*.scss', ['sass']);
	gulp.src('.').pipe($.webserver());
});

gulp.task('default', ['sass']);