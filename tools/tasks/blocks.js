/*!
 * Uni-Blocks (v1.0.0): tools/tasks/blocks.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, $, bs, green, magenta, dirs, paths, opts, makeScreenshots
} from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

// Generating HTML Blocks from templates files
// -----------------------------------------------------------------------------
export function cleanBlocks () {
  $.log(`${green('-> Clean all blocks')} in ${magenta(paths.blocks.dest)} folder`);

  return $.del(paths.blocks.dest);
}
cleanBlocks.displayName = 'clean:blocks';
cleanBlocks.description = 'Clean up blocks files';

export function blocks () {
  $.log(`${green('-> Generating Blocks via Pug...')}`);

  return src(paths.blocks.src)
    .pipe($.pug(opts.blocks))
    .pipe($.size(opts.size))
    .pipe(dest(paths.blocks.dest));
}
blocks.displayName = 'blocks';
blocks.description = 'Generate Blocks via Pug';

export async function screenshots (cb) {
  // Delete screenshots folder
  $.log(`${green('-> Clean')} all ${magenta('screenshots')}`);
  $.del('screenshots');

  // Start the server
  $.log(`${green('-> Init server')}`);
  bs.init({
    server: {
      baseDir: dirs.dest
    },
    port: 2221,
    logPrefix: 'Blocks',
    ui: false,
    open: false,
    logLevel: 'silent'
  });

  // Do blocks capture
  $.log(`${green('-> Make screenshots')}`);
  const selector = 'header, .uni-block';
  const names = [
    'contacts',
    'contents',
    'cta',
    'features',
    'footers',
    'forms',
    'headers',
    'pricings',
    'teams',
    'testimonials'
  ];
  await makeScreenshots(names, selector);

  // Quit the server after 5 seconds
  $.log(`${green('-> Stop server')}`);
  setTimeout(() => {
    bs.exit();
  }, 5000);

  cb();
}
