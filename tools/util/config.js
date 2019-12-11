/*!
 * Uni-Blocks (v1.0.0): tools/util/config.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export const dirs = {
  root: './',
  src: 'src',
  dest: 'dist',
  logs: 'logs'
};

export const paths = {
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    dest: `${dirs.dest}/css/`,
    filter: [`${dirs.dest}/css/*.css`, '!**/css/*.min.css']
  },
  scripts: {
    src: `${dirs.src}/js/**/*.js`,
    dest: `${dirs.dest}/js/`
  },
  images: {
    src: `${dirs.src}/images/**/*.{gif,jpg,jpeg,png,svg}`,
    dest: `${dirs.dest}/images/`
  },
  views: {
    // Ignore files that start with '_'
    src: [`${dirs.src}/views/**/*.pug`, '!**/_*.pug'],
    all: `${dirs.src}/views/**/*.pug`,
    dest: `${dirs.dest}/`,
    del: `${dirs.dest}/*.html`
  },
  blocks: {
    src: `${dirs.src}/views/includes/**/*.pug`,
    dest: `${dirs.dest}/blocks/`
  },
  logs: {
    cli: `${dirs.logs}/cli/`,
    gulp: `${dirs.logs}/gulp/`
  }
};
