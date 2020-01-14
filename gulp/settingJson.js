const gulp = require('gulp');
const args = require('./lib/value');

function settingJson() {
    return gulp.src(`${args.src}/package.json`)
        .pipe(gulp.dest(`${args.dest}/`));
}

exports.settingJson = settingJson;
