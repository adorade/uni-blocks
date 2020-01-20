/*!
 * Uni-Blocks (v1.0.0): tools/util/plugins.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Importing specific gulp API
// functions lets us write them as series() instead of gulp.series()
export { src, dest, series, parallel, lastRun, watch, tree } from 'gulp';

// Load all plugins in "devDependencies" into the variable $
export const $ = require('gulp-load-plugins')({
  // when set to true, the plugin will log info to console.
  // Useful for bug reporting and issue debugging
  // DEBUG: false,

  // whether the plugins should be lazy loaded on demand
  // lazy: true,

  pattern: [ '*' ],
  scope: [ 'devDependencies' ],
  rename: {
    'fancy-log': 'log',
    'gulp-stylelint': 'gStylelint',
    'gulp-eslint': 'gEslint',
    'gulp-pug-linter': 'pugLinter'
  }
});

// Load others modules
export const bs = require('browser-sync').create();
export const fs = require('fs');

// Colors for fancy log
export { bgBlue, bgRed, cyan, green, magenta, red } from 'ansi-colors';

// Use for screenshots
import puppeteer from 'puppeteer';
export { puppeteer };
