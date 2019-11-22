/*!
 * Uni-Blocks (v1.0.0): tools/util/banner.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

const pkg = require(`${process.cwd()}/package.json`);
const title = `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1,4)}${pkg.name.charAt(4).toUpperCase()}${pkg.name.slice(5)}`;

const year = new Date(
  process.env.SOURCE_DATE_EPOCH ? process.env.SOURCE_DATE_EPOCH * 1000 : new Date().getTime()
).getFullYear();

export function banner () {
  let result = '';

  try {
    result = [
      '/*!',
      ` * ${title} (v${pkg.version}): <%= file.relative %>`,
      ` * ${pkg.description}`,
      ` * Copyright (c) ${year} ${pkg.author} (${pkg.homepage})`,
      ` * License under ${pkg.license} (${pkg.repository}/blob/master/LICENSE)`,
      ' * ========================================================================== */',
      '' // new line
    ].join('\n');
  } catch (err) {
    console.error(err);
  }

  return result;
}
