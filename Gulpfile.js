var gulp        = require('gulp');
var babel       = require('gulp-babel');
var eslint       = require('gulp-eslint');
var mocha       = require('gulp-mocha');
var del         = require('del');

gulp.task('clean', () => {
    return del(['lib']);
});

gulp.task('lint', () => {
    return gulp
        .src([
            'src/**/*.js',
            'test/**/*.js',
            'Gulpfile.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', () => {
    return gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});


gulp.task('test', gulp.series('build', () => {
    return gulp
        .src('test/**.js')
        .pipe(mocha({
            ui:       'bdd',
            reporter: 'spec',
            timeout:  typeof v8debug === 'undefined' ? 2000 : Infinity // NOTE: disable timeouts in debug
        }));

}));
