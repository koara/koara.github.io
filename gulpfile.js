var fs = require('fs'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    sass = require('node-sass'),
    template = require('gulp-template'),
	webserver = require('gulp-webserver');

gulp.task('render', function() {
   
    
    
	_render('index', 'Koara - A Modular Lightweight Markup Language');
	_render('docs', 'Documentation - Koara');
	_render('grammar', 'Grammar - Koara');
	_render('projects', 'Projects - Koara');
	_render('demo', 'Demo - Koara');
});

gulp.task('default', ['render']);
gulp.task('serve', ['default'], function() {
	gulp.watch('*.kd', ['render']);
	gulp.src('.').pipe(webserver());
});

gulp.task('imagemin', ['default'], function() {
	 gulp.src('./*.png').pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('.'));
});

function _render(file, title, cssOutput) {
	gulp.src('_template.html')
		.pipe(rename(file + '.html'))
		.pipe(template({title: title, content: fs.readFileSync(file + '.kd','utf8') }))
		.pipe(gulp.dest('.'));
}
