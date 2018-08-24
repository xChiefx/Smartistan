var gulp = require('gulp');
// 重命名
var rename = require('gulp-rename');
// sass 编译为css
var sass = require('gulp-sass');
// css压缩
var cssnano = require('gulp-cssnano');
// js压缩
var min = require('gulp-uglify');
// 任务
gulp.task('index',function(){
    gulp.src('./src/sass/*.scss').pipe(sass()).pipe(rename({suffix : '.min'})).pipe(cssnano()).pipe(gulp.dest('dist'))
    // 
})

// 监视
gulp.task('dog',function(){
    gulp.watch('./src/sass/*.scss',['index'])
})