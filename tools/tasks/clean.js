/*!
 * Uni-Blocks (v1.0.0): tools/tasks/clean.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { dirs, $, magenta, green } from '../util';

// Clean all output folder
// -----------------------------------------------------------------------------
export function clean () {
  $.log(`${green('-> Clean all files')} in ${magenta(dirs.dest)} folder`);

  return $.del(dirs.dest);
}
clean.displayName = 'clean';
clean.description = 'Clean all output folder';
