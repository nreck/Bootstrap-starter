var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('styles', function() {
    //Compiles to CSS
    gulp.src('./assets/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
    //Compiles to minified CSS
    gulp.src('./assets/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('compress-js', function () {
    //Compiles to minified JS
    gulp.src('./assets/js/scripts.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./assets/js/'))
})

gulp.task('default',function() {
    //Watch over files
    gulp.watch('./assets/sass/*.scss',['styles']);
    gulp.watch('./assets/js/*.js',['compress-js']);
});