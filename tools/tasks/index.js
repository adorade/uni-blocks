/*!
 * Uni-Blocks (v1.0.0): tools/tasks/index.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export { checks } from './checks';                                      // Checks
export { clean } from './clean';                                        // Cleaners
export { cleanStyles, lintSCSS, compile, minifyCSS } from './styles';   // Styles
export { cleanScripts, lintJS, copyJS } from './scripts';               // Scripts
export { cleanImages, imagine } from './images';                        // Images
export { cleanPages, lintPages, pagile } from './pages';                // Pages
export { cleanBlocks, blocks, screenshots } from './blocks';            // Blocks
export { serve } from './serve';                                        // Serve and Watch
