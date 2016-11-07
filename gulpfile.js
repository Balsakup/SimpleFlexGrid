let gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

gulp.task('dist', () => {
    return gulp.src('./src/SimpleFlexGrid.sass')
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe($.cleanCss())
        .pipe($.rename({
            basename: 'simpleflexgrid',
            suffix  : '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', () => {
    $.util.log('Try to run: gulp dist')

    return false;
});
