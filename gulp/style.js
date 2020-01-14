const gulp = require('gulp');
const args = require('./lib/value');
const gulpSass = require('gulp-sass');
const gulpif = require('gulp-if');
const log = require('fancy-log');
const chalk = require('chalk');
const cleanCSS = require('gulp-clean-css');

function sass() {
    return gulp.src(`${args.src}/src/scss/**/*.scss`)
        .pipe(gulpSass().on('error', function(error) {
            log.log(chalk.red('Error (' + error.plugin + '): ' + error.message));
            this.emit('end');
        }))
        .pipe(gulpif(args.compression, cleanCSS()))
        .pipe(gulp.dest(`${args.dest}/src/css/`));
}

function css() {
    return gulp.src(`${args.src}/src/css/**/*.css`)
        .pipe(gulpif(args.compression, cleanCSS()))
        .pipe(gulp.dest(`${args.dest}/src/css/`));
}

exports.style = gulp.series(gulp.parallel(sass, css));
exports.sass = sass;
exports.css = css;
