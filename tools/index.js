/*!
 * Uni-Blocks (v1.0.0): tools/index.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export {
  checks,                                             // Checks
  clean,                                              // Cleaners
  cleanStyles, lintSCSS, compile, minifyCSS,          // Styles
  cleanScripts, lintJS, copyJS,                       // Scripts
  cleanImages, imagine,                               // Images
  cleanPages, lintPages, pagile,                      // Pages
  cleanBlocks, blocks, screenshots,                   // Blocks
  serve } from './tasks';                             // Serve and Watch
