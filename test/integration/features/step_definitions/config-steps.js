import {promises as fs} from 'node:fs';
import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Given, Then} from '@cucumber/cucumber';

Given('git is properly configured', async function () {
  await fs.writeFile(`${this.projectRoot}/.gitattributes`, '');
});

Given('git is missing the attributes file', async function () {
  return undefined;
});

Then('git configuration is defined', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/.gitignore`), true);
});

Then('the attributes file is defined', async function () {
  assert.equal(await fs.readFile(`${this.projectRoot}/.gitattributes`, 'utf-8'), '* text=auto');
});

Then('git is not configured', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/.gitignore`), false);
  assert.equal(await fileExists(`${this.projectRoot}/.gitattributes`), false);
});
