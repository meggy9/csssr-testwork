var gulp = require('gulp');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');

var jadePath1 = "./jade/*.jade"
var jadePath2 = "./jade/_includes/*.jade"


gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./jade/*.jade')
    .pipe(plumber())
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty:"\t"
    }))
    .pipe(gulp.dest('app/html/'))
});

gulp.task('compass', function() {
  gulp.src('./scss/main.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'scss'
    }))
    .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', function(){
	gulp.watch(jadePath1, ['jade']);
  gulp.watch(jadePath2, ['jade']);
	gulp.watch('./scss/includes/*.scss', ['compass']);
  gulp.watch('./scss/*.scss', ['compass']);
});