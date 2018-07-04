const gulp = require('gulp');
const babel = require('gulp-babel');
const changed = require('gulp-changed');
const nodemon = require('gulp-nodemon');
const chmod = require('gulp-chmod');
const sourcemaps = require('gulp-sourcemaps');

const buildDir = 'dist';
const sourceDir = 'src';

// transpile ES6+ to ES5 (Babel)
gulp.task('babel', () => {
  return gulp.src(`${sourceDir}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(changed(buildDir))
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir));
});

// nodemon + convenience
gulp.task('nodemon', ['babel'], () => {
  const config = {
    script: `${buildDir}/index.js`,
    ext: 'js',
    watch: [`${buildDir}/**/*.js`, 'gulpfile.js'],
    delay: 100,
    // tasks: ['babel'],
    verbose: true,
    env: { NODE_ENV: 'development' }
  };

  nodemon(config).on('restart', (file) => {
    console.log('[nodemon] restarted by following watch file(s) changed');
    console.log(file);
  });
});

gulp.task('transpile', ['babel'], () => {
  return gulp.src(`${buildDir}/index.js`)
              .pipe(chmod({
                owner: {
                  read: true,
                  write: true,
                  execute: true
                },
                others: {
                  read: true,
                  write: true,
                  execute: true
                }
              }))
              .pipe(gulp.dest(buildDir))
})

// Watch file changes
gulp.task('watch', () => {
  gulp.watch(`${sourceDir}/**/*.js`, ['transpile'], () => {
    console.log('Babel is watching ES6+ files and turn the code into ES6');
  }).on('change', (file) => {
    console.log(`[watch] ${file.type}: ${file.path}`);
  });
});

gulp.task('default', ['watch']);
