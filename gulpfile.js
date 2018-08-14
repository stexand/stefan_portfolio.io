const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
//************Tasks*************

gulp.task('default', function(){
   return console.log('Zdravo od gulpa')
})

    //Gulp Sass
gulp.task('sass', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

//Copy html

gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
})

//uglify js

gulp.task('minify', function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
})

//Watch task

gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
})