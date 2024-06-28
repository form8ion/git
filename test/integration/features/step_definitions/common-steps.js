import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, Then, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';
import assert from 'node:assert';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

let scaffold;

Before(async function () {
  this.projectRoot = process.cwd();

  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({scaffold} = await import('@form8ion/git'));

  stubbedFs({
    node_modules: stubbedNodeModules
  });
});

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  this.result = await scaffold({projectRoot: this.projectRoot});
});

Then('scaffold results are returned', async function () {
  assert.deepEqual(this.result, {});
});
