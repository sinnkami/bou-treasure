const gulp = require('gulp');
const args = require('./lib/value');
const htmlmin = require('gulp-htmlmin');

function mainHtml() {
    return gulp.src(`${args.src}/index.html`)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(`${args.dest}/`));
}

exports.mainHtml = mainHtml;
