const gulp = require('gulp');
const args = require('./gulp/lib/value');

const { eslint } = require('./gulp/eslint');
const { scripts } = require('./gulp/scripts');
const { style } = require('./gulp/style');
const { images } = require('./gulp/images');
const { mainHtml } = require('./gulp/mainHtml');
const { settingJson } = require('./gulp/settingJson');

function watch(callback) {
    if (args.watch) {
        gulp.watch(`${args.src}/src/scss/**/*.scss`, gulp.parallel(style));
        gulp.watch(`${args.src}/src/css/**/*.css`, gulp.parallel(style));
        gulp.watch(`${args.src}/src/scripts/**/*.js`, gulp.series(eslint, scripts));
        gulp.watch(`${args.src}/index.html`, gulp.parallel(mainHtml));
    }
    return callback();
}

exports.watch = watch;

exports.default = gulp.parallel(
    mainHtml,
    settingJson,
    style,
    images,
    gulp.series(eslint, scripts),
    watch,
);
