/*!
 * Uni-Blocks (v1.0.0): tools/tasks/scripts.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, $, bs, fs, magenta, green, paths, opts, banner
} from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

// Copy JS files
// -----------------------------------------------------------------------------
export function cleanScripts () {
  $.log(`${green('-> Clean all scripts')} in ${magenta(paths.scripts.dest)} folder`);

  return $.del(paths.scripts.dest);
}
cleanScripts.displayName = 'clean:js';
cleanScripts.description = 'Clean up scripts folder';

export function lintJS () {
  $.log(`${green('-> Linting JS files...')}`);

  const outputDir = paths.logs.gulp;
  fs.mkdirSync(`${outputDir}`, { recursive: true });
  const output = fs.createWriteStream( `${outputDir}/scripts.txt` );

  return src(paths.scripts.src, {
    since: lastRun(lintJS)
  })
    .pipe($.gEslint())
    .pipe($.gEslint.format())
    .pipe($.gEslint.format('stylish', output))
    .pipe($.gEslint.failAfterError());
}
lintJS.displayName = 'lint:js';
lintJS.description = 'Lint JS files';

export function copyJS () {
  $.log(`${green('-> Copying JS files...')}`);

  return src(paths.scripts.src)
    .pipe($.header(banner()))
    .pipe($.size(opts.size))
    .pipe(dest(paths.scripts.dest))
    .pipe(bs.stream({ match: '**/*.js' }));
}
copyJS.displayName = 'copy:js';
copyJS.description = 'Copy JS files';
