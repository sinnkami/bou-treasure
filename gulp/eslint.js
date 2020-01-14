const gulp = require('gulp');
const args = require('./lib/value');
const gulpEslint = require('gulp-eslint');

function eslint() {
    return gulp.src([`${args.src}/**/*.js`, `!${args.src}/*.min.js`])
        .pipe(gulpEslint({ useEslintrc: true }))
        .pipe(gulpEslint.format())
        .pipe(gulpEslint.results(results => {
            //Called once for all ESLint results.
            console.log(`Total Results: ${results.length}`);
            console.log(`Total Warnings: ${results.warningCount}`);
            console.log(`Total Errors: ${results.errorCount}`);
        }));
}

exports.eslint = eslint;
