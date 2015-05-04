var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babelify = require('babelify');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var scsslint = require('gulp-scss-lint');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var history = require('connect-history-api-fallback');
var jsonSass = require('gulp-json-sass');
var header = require('gulp-header');
var fs = require('fs');
var concat = require('gulp-concat');

var commonConcat = require('commonjs-concat');

function addStyleDir(filename){
  return './src/scss/' + filename;
}

function addComponentDir(filename){
  return './src/js/components/' + filename;
}

var rdyJSON = JSON.parse(fs.readFileSync('./rdy.json'));

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

gulp.task('import-styles', function(){
  gulp.src('./bower_components/prism/themes/prism-twilight.css')
  .pipe(gulp.dest('./public'));
});

gulp.task('styles', function(){
  gulp.src('./src/scss/app.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write('.'))
  .pipe(minifyCSS())
  .pipe(autoprefix())
  .pipe(gulp.dest('./public'))
  .pipe(connect.reload());
});

gulp.task('scss-lint', function(){
  gulp.src('./src/scss/**/*.scss')
    .pipe(scsslint({
      'config': __dirname + '/scss-lint.yml',
      'verbose': true
    }))
    .pipe(scsslint.failReporter('E'));
});


gulp.task('colors', function(){
  var source = './src/lib/_colors.json';
  var banner = "// generated from <%= source %> by gulp-json-sass\n\n";
  gulp.src(source)
  .pipe(jsonSass())
  .pipe(header(banner, {source: source}))
  .pipe(gulp.dest('./src/scss/base/'));
});

gulp.task('server', ['import-styles', 'colors', 'styles', 'scripts'], function(){
  connect.server({
    root: ['public'],
    livereload: true,
    middleware: function() {
      return [
        history()
      ]
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('src/lib/_colors.json', ['colors']);
  gulp.watch('src/scss/**', ['scss-lint', 'styles']);
  gulp.watch('src/js/**', ['scripts']);
});

gulp.task('package:css', function(){
  gulp.src(rdyJSON.scss.map(addStyleDir))
    .pipe(concat('rdy.scss'))
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./packaged'));
});

gulp.task('package:js', function(){
  commonConcat('./src/js/components', {
    includeFile: rdyJSON.components,
    relative: true
  }, function(err, output) {
    fs.writeFile('./packaged/rdy.js', output, 'utf8', function(){
      console.log(output);
      browserify()
        .transform(babelify)
        .require('./packaged/rdy.js', {entry: true})
        .bundle()
        .pipe(source('rdy.js'))
        .pipe(gulp.dest('./packaged'));
    });
  });
});

gulp.task('default', ['server', 'watch']);
