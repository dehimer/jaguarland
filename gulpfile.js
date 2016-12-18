//From http://stackoverflow.com/questions/25384796/can-i-set-gulp-livereload-to-run-after-all-files-are-compiled

var gulp = require('gulp');
var jade = require('gulp-jade');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var nib = require('nib');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

var sources = {
  jade: "src/jade/**/*.jade",
  partials: "src/partials/**/*.jade",
  stylus: "src/styl/**/*.styl",
  scripts: "src/js/**/*.js"
};

// Define destinations object
var destinations = {
  html: "dist/",
  css: "dist/css",
  js: "dist/js"
};

// Compile and copy Jade
gulp.task("jade", function(event) {
  return gulp.src(sources.jade)
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest(destinations.html))
  .pipe(livereload());
});

// Compile and copy Stylus
gulp.task("stylus", function(event) {
  return gulp.src(sources.stylus).pipe(stylus({
    use: [nib()],
    import: [
      'nib'
    ],
    style: "compressed"
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(destinations.css))
  .pipe(livereload());;
});

// Minify and copy all JavaScript
gulp.task('scripts', function() {
  gulp.src(sources.scripts)
    .pipe(uglify())
    .pipe(gulp.dest(destinations.js))
    .pipe(livereload());
});

// Server
gulp.task('server', function () {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname+'/dist/'));
  app.listen(4000, '0.0.0.0');
});

// Watch sources for change, executa tasks
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(sources.jade, ["jade", "refresh"]);
  gulp.watch(sources.partials, ["jade", "refresh"]);
  gulp.watch(sources.stylus, ["stylus", "refresh"]);
  gulp.watch(sources.scripts, ["scripts", "refresh"]);
});

// Refresh task. Depends on Jade task completion
gulp.task("refresh", ["jade"], function(){
  livereload.changed();
  console.log('LiveReload is triggered');
});

// Define default task
gulp.task("default", ["jade", "scripts", "stylus", "server", "watch"]);