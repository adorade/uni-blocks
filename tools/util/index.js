/*!
 * Uni-Blocks (v1.0.0): tools/util/index.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Load plugins
export {
  src, dest, series, parallel, lastRun, watch, tree,
  $, bs, fs, bgBlue, bgRed, cyan, green, magenta, red
} from './plugins';

// Banner and wrapper
export { banner } from './banner';

// Config
export { dirs, paths } from './config';

// Options
export { opts } from './options';

// Screenshots
export { puppeteer } from './plugins';
export { makeScreenshots } from './blocks';
