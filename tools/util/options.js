/*!
 * Uni-Blocks (v1.0.0): tools/util/options.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { paths } from './config';

export const opts = {
  styles: {
    failAfterError: true,
    reportOutputDir: paths.logs.gulp,
    reporters: [
      { formatter: 'string', save: 'styles.txt' }
    ],
    syntax: 'scss'
  },
  sass: {
    outputStyle: 'expanded',
    precision: 6
  },
  autoprefixer: {
    // browsers: [], // see .browserslistrc
    cascade: false
  },
  csso: {
    restructure: false,
    comments: false
  },
  eslint: {
    // see .eslintrc.json
  },
  images: {
    gif: { interlaced: true },
    jpeg: { progressive: true },
    png: { optimizationLevel: 4 },
    svg: { plugins: [{ removeViewBox: true }] },
    general: {
      silent: true
    }
  },
  pug: {
    doctype: 'html',
    pretty: '  '
  },
  size: {
    gzip: true,
    showFiles: true
  },
  watch: {
    delay: 2000
  }
};
