/*!
 * Uni-Blocks (v1.0.0): gulpfile.esm.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

const { src, dest, watch, parallel, series } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const bs = require('browser-sync').create();
const del = require('del');
const log = require('fancy-log');
const { green, magenta } = require('ansi-colors');

const optsWatch = {
  delay: 2000
};

export function clean () {
  log(`${green('-> Clean all files')} in ${magenta('dist')} folder`);

  return del('dist');
}

export function styles () {
  log(`${green('-> Compiling SCSS...')}`);

  return src(['src/scss/uni_blocks.scss'])
    .pipe(sass())
    .pipe(dest('dist/css'))
    .pipe(bs.stream({ match: '**/*.css' }));
}

export function images () {
  log(`${green('-> Optimizing images...')}`);

  return src(['src/images/**/*'])
    .pipe(dest('dist/images'))
    .pipe(bs.stream({ match: '**/*.{gif,jpg,jpeg,png,svg}' }));
}

export function pages () {
  log(`${green('-> Generating Pages via Pug...')}`);

  return src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
    .pipe(pug({ pretty: true }))
    .pipe(dest('dist'))
    .pipe(bs.stream({ match: '**/*.html' }));
}

export function watcher () {
  log(`${green('-> Watch files for changes...')}`);

  watch('src/pug/**/*', optsWatch, parallel('pages'));
  watch('src/images/**/*', optsWatch, parallel('images'));
  watch('src/scss/**/*', optsWatch, parallel('styles'));
}

export function serve () {
  log(`${green('-> Serve files to browser...')}`);

  bs.init({
    server: {
      baseDir: 'dist'
    },
    port: 2222,
    logPrefix: 'Blocks',
    ui: false
  });
}

export const build = series(clean, styles, images, pages);

const dev = series(
  build,
  parallel(serve, watcher)
);
export default dev;
