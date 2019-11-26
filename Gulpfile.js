var gulp        = require('gulp');
var babel       = require('gulp-babel');
var eslint       = require('gulp-eslint');
var del         = require('del');

function clean () {
    return del(['lib', '.screenshots']);
}

function lint () {
    return gulp
        .src([
            'src/**/*.js',
            'test/**/*.js',
            'Gulpfile.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function build () {
    return gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
}

exports.lint  = lint;
exports.build = gulp.parallel(lint, gulp.series(clean, build));
