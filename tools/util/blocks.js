/*!
 * Uni-Blocks (v1.0.0): tools/util/blocks.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { $, fs, cyan, green, magenta, red, puppeteer } from './';

function delay (timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

function getDirPath (name) {
  return `screenshots/${name}`;
}

function getFileName (index) {
  return `${index + 1}.jpg`;
}

function getUrl (name) {
  return `http://localhost:2221/${name}.html`;
}

async function makeScreenshotsByName (name, selector) {
  const browser = await puppeteer.launch({
    args: [
      // --- Working on Linux
      // '--no-sandbox', '--disable-setuid-sandbox',

      // --- Working on WSL
      '--no-sandbox', '--single-process'
    ]
  });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1280,
    height: 30000
  });

  const url = getUrl(name);
  await page.goto(url, { timeout: 0 });

  const dirPath = getDirPath(name);
  fs.mkdirSync(dirPath, { recursive: true });

  await delay(3000);

  const blocks = await page.$$(selector);
  for (var index = 0; index < blocks.length; index++) {
    const path = `${dirPath}/${getFileName(index)}`;

    await blocks[index].screenshot({
      path: path,
      type: 'jpeg',
      quality: 100,
    });

    $.log(`Saved screenshot for '${cyan(name)}' to '${magenta(path)}'`);
  }

  await browser.close();
}

export async function makeScreenshots (description, selector) {
  for (var i = 0; i < description.length; i++) {
    try {
      await makeScreenshotsByName(description[i], selector);
      $.log(`${magenta('Screenshots')} for ${cyan(description[i])} ... ${green('DONE!')}`);
    } catch(e) {
      $.log.error(`Error in capturing blocks for ${cyan(description[i])}: ${red(e)}`);
      process.exit(1);
    }
  }
}
