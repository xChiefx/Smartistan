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
// 编译sass 压缩 css
gulp.task('index',function(){
    gulp.src('./src/sass/*.scss').pipe(sass()).pipe(rename({suffix : '.min'})).pipe(cssnano()).pipe(gulp.dest('dist'))
    // 
})
// 监视
gulp.task('dog',function(){
    gulp.watch(['./src/sass/*.scss','./src/require/*.js'],['index','js'])
})
// 压缩JS
gulp.task('js',function(){
    gulp.src('./src/require/index.js').pipe(min()).pipe(rename({suffix:".min"})).pipe(gulp.dest("dist"))
})
// 监视
gulp.task('jsdog',function(){
    gulp.watch('./src/require/*.js',['js'])
})