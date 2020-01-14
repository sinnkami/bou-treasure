const gulp = require('gulp');
const args = require('./lib/value');
const stripDebug = require('gulp-strip-debug');
const plumber = require('gulp-plumber');
const log = require('fancy-log');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
function scripts() {
    return gulp.src([`${args.src}/src/scripts/**/*.js`, `!${args.src}/src/scripts/**/*.min.js`])
        .pipe(plumber({
            errorHandler() {},
        }))
        .pipe(gulpif(args.compression, stripDebug()))
        .pipe(gulpif(args.compression, uglify({
            mangle: false, // true にすると変数名も変換されていろいろな場所がバグる
            compress: true,
        }).on('error', function(err) {
            log.error(err.toString());
            this.emit("end");
        })))
        .pipe(gulp.dest(`${args.dest}/src/scripts/`));
}


exports.scripts = scripts;
