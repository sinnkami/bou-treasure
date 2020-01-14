const gulp = require('gulp');
const args = require('./gulp/lib/value');

const { eslint } = require('./gulp/eslint');
const { scripts } = require('./gulp/scripts');
const { style } = require('./gulp/style');

function watch(callback) {
    if (args.watch) {

        gulp.watch(`${args.src}/src/scss/**/*.scss`, gulp.parallel(style));
        gulp.watch(`${args.src}/src/css/**/*.css`, gulp.parallel(style));
        gulp.watch(`${args.src}/src/scripts/**/*.js`, gulp.series(eslint, scripts));
    }
    return callback();
}

exports.watch = watch;

exports.default = gulp.series(
    style,
    gulp.series(eslint, scripts),
    watch,
);
