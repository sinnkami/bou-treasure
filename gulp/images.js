const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const args = require('./lib/value');
const gulpif = require('gulp-if');

function images() {
    return gulp.src(`${args.src}/src/images/**/*`)
        .pipe(gulpif(args.compression, imagemin()))
        .pipe(gulp.dest(`${args.dest}/src/images`));
}

exports.images = images;
