const $ = require('gulp-load-plugins')();
const fs = require('fs');
const gulp = require('gulp');

gulp.task('render', function() {
	_render('index', 'Koara - A modular lightweight markup language');
	_render('docs', 'Documentation - Koara');
	_render('grammar', 'Grammar - Koara');
	_render('projects', 'Projects - Koara');
	_render('demo', 'Demo - Koara');
});

gulp.task('default', ['render']);
gulp.task('serve', ['default'], function() {
	gulp.watch('*.kd', ['render']);
	gulp.src('.').pipe($.webserver());
});

function _render(file, title, cssOutput) {
	gulp.src('_template.html')
		.pipe($.rename(file + '.html'))
		.pipe($.template({title: title, content: fs.readFileSync(file + '.kd','utf8') }))
		.pipe(gulp.dest('.'));
}
