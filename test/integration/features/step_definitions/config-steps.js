import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('git configuration is defined', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/.gitignore`), true);
});
