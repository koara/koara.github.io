const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('src/base.scss')
        .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
        .pipe($.rename('a.css'))
        .pipe(gulp.dest('.'));
});

gulp.task('serve', ['default'], function() {
    browserSync.init({ server: { baseDir: "./" }, notify: false });
    gulp.watch("app/scss/*.scss", ['sass']);
});

gulp.task('default', ['sass']);