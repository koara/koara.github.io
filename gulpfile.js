var fs = require('fs'),
	gulp = require('gulp'),
  rename = require('gulp-rename'),
  template = require('gulp-template'),
	webserver = require('gulp-webserver');

gulp.task('render', function() {
	_render('index', 'Koara - A Modular Lightweight Markup Language');
	_render('grammar', 'Grammar - Koara');
	_render('projects', 'Projects - Koara');
	_render('demo', 'Demo - Koara');

	//gulp.src('_template.html').pipe(rename('docs.html')).pipe(template({title: 'Documentation - Koara'})).pipe(gulp.dest('.'));
	//gulp.src('_template.html').pipe(rename('grammar.html')).pipe(template({title: 'Grammar - Koara'})).pipe(gulp.dest('.'));
	//gulp.src('_template.html').pipe(rename('projects.html')).pipe(template({title: 'Projects - Koara'})).pipe(gulp.dest('.'));
	//gulp.src('_template.html').pipe(rename('demo.html')).pipe(template({title: 'Demo - Koara'})).pipe(gulp.dest('.'));
});

gulp.task('default', ['render']);
gulp.task('serve', ['default'], function() {
	gulp.watch('*.kd', ['render']);
	gulp.src('.').pipe(webserver());

});

function _render(file, title) {
	gulp.src('_template.html')
		.pipe(rename(file + '.html'))
		.pipe(template({title: title, content: fs.readFileSync(file + '.kd','utf8') }))
		.pipe(gulp.dest('.'));
}
