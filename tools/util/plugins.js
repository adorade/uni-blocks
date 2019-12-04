/*!
 * Uni-Blocks (v1.0.0): tools/util/plugins.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Load gulp's API, require gulp v.4
export { src, dest, series, parallel, lastRun, watch, tree } from 'gulp';

// Load gulp plugins
export const plugins = require('gulp-load-plugins')({
  // when set to true, the plugin will log info to console.
  // Useful for bug reporting and issue debugging
  // DEBUG: false,

  // whether the plugins should be lazy loaded on demand
  // lazy: true,

  // pattern: ['*'],
  scope: ['devDependencies'],
  // rename: {
  //   'gulp-stylelint': 'gStylelint',
  //   'gulp-eslint': 'gEslint',
  //   'gulp-pug-linter': 'pugLinter'
  // },

  // Multiple `config` locations
  // config: `${process.cwd()}/package.json`
});

// Load others modules
export const bs = require('browser-sync').create();
export const fs = require('fs');
export const del = require('del');

// For fancy log and colors in console
export const log = require('fancy-log');
export { green, magenta, red, bgBlue, bgRed } from 'ansi-colors';