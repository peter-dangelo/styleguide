var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var sass = require('gulp-sass');
var neat = require('node-neat');
var connect = require('gulp-connect');

gulp.task('scripts', function(){
  browserify({
    entries: './src/js/index.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./public'))
  .pipe(connect.reload());
});

gulp.task('styles', function(){
  gulp.src('./src/scss/app.scss')
  .pipe(sass({
    includePaths: neat.includePaths
  }))
  .pipe(gulp.dest('./public'))
  .pipe(connect.reload());
});

gulp.task('server', ['styles', 'scripts'], function(){
  connect.server({
    root: ['public'],
    liverelaod: true
  });
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**', ['styles']);
  gulp.watch('src/js/**', ['scripts']);
});

gulp.task('default', ['server', 'watch']);
