/*!
 * Uni-Blocks (v1.0.0): tools/tasks/pages.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, $, bs, green, magenta, paths, opts
} from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

// Generating HTML from templates and content files
// -----------------------------------------------------------------------------
export function cleanPages () {
  $.log(`${green('-> Clean all pages')} in ${magenta(paths.views.dest)} folder`);

  return $.del(paths.views.del);
}
cleanPages.displayName = 'clean:pages';
cleanPages.description = 'Clean up html files';

export function lintPages () {
  $.log(`${green('-> Linting templates...')}`);

  return src(paths.views.all, {
    since: lastRun(lintPages)
  })
    .pipe($.pugLinter({ reporter: 'default' }))
    .pipe($.pugLinter({ failAfterError: true }));
}
lintPages.displayName = 'lint:pages';
lintPages.description = 'Lint pug (views) files';

export function pagile () {
  $.log(`${green('-> Generating Pages via Pug...')}`);

  return src(paths.views.src)
    .pipe($.pug(opts.pug))
    .pipe($.size(opts.size))
    .pipe(dest(paths.views.dest))
    .pipe(bs.stream({ match: '**/*.html' }));
}
pagile.displayName = 'pagile';
pagile.description = 'Generate Pages via Pug';
