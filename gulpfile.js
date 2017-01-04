'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  spritesmith: require('gulp.spritesmith'),
  merge: require('merge-stream'),
    cssunit: require('gulp-css-unit'),
  sassGlob: require('gulp-sass-glob'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    'sprite:svg',
    $.gulp.parallel(
        'sass',
        'pug',
        'js:foundation',
        'js:process',
        'copy:image',
        'css:foundation',
        'sprite:png',
        'copy:fonts'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
