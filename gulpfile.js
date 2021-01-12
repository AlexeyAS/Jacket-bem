const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
//const sourcemap = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        //.pipe(sourcemap.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', console.error.bind(console)))
        //.pipe(sourcemap.write('./'))
        .pipe( rename('style.css'))
        .pipe(gulp.dest('./css/'))

        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }).on('error', console.error.bind(console)))
        .pipe( rename('style.min.css'))
        .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
})