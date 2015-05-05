var gulp          = require('gulp'),
    util          = require('gulp-util'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    minifycss     = require('gulp-minify-css'),
    rename        = require('gulp-rename'),
    log           = util.log;

var sassFiles     = 'sass/**/*.scss';

gulp.task('sass', function() {
  log('Generate CSS files ' + (new Date()).toString());
  gulp.src('sass/main.scss')
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer('last 3 versions'))
      .pipe(gulp.dest('css'))
      .pipe(rename({ suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  log('Watching scss files for modifications');
  gulp.watch(sassFiles, ['sass']);
});

gulp.task('default', ['sass', 'watch']);