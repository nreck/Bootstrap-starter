var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('styles', function() {
    //Compiles to CSS
    gulp.src('./www/assets/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./www/build'))
    //Compiles to minified CSS
    gulp.src('./www/assets/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./www/build'))
});

gulp.task('compress-js', function () {
    //Compiles to minified JS
    gulp.src('./www/assets/js/scripts.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./www/build/'))
})

gulp.task('default',function() {
    //Watch over files
    gulp.watch('./www/assets/sass/*.scss',['styles']);
    gulp.watch('./www/assets/js/*.js',['compress-js']);
});