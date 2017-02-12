var gulp = require('gulp'),
    minhtml = require('gulp-htmlmin'),
    mincss = require('gulp-clean-css'),
    gutil = require('gulp-util'),
    minimage = require('gulp-imagemin'),
    minsvg = require('gulp-svgmin'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

var myDevConfig = Object.create(webpackConfig),
    devCompiler = webpack(myDevConfig);

gulp.task('minhtml', function(){
    gulp.src('src/*.html')
        .pipe(minhtml({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('minimage',function(){
    gulp.src('src/img/*')
        .pipe(minimage())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('minsvg',function(){
    gulp.src('src/svg/*')
        .pipe(minsvg())
        .pipe(gulp.dest('dist/svg'))
});

gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('src/css'));
});

gulp.task('autoprefixer',['sass'],function(){
    gulp.src('src/css/*.css')
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers:['last 2 versions','Android>=4.0']
        })).pipe(gulp.dest('dist/css'));
});

gulp.task("build-js", function(callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('watch', function (){
    gulp.watch('src/**/*',['minhtml','minimage','minsvg','autoprefixer','build-js']);
});

gulp.task('default', ['minhtml','minimage','minsvg','autoprefixer','build-js','watch']);
