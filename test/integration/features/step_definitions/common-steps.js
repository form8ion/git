import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, Then, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';
import assert from 'node:assert';
import * as td from 'testdouble';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

let scaffold, test, lift;

Before(async function () {
  this.projectRoot = process.cwd();
  this.git = await td.replaceEsm('simple-git');

  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({scaffold, test, lift} = await import('@form8ion/git'));

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

When('the project is lifted', async function () {
  if (await test({projectRoot: this.projectRoot})) {
    this.results = await lift({
      projectRoot: this.projectRoot,
      results: {
        ...(this.vcsIgnoreDirectories || this.vcsIgnoreFiles) && {
          vcsIgnore: {
            ...this.vcsIgnoreDirectories && {directories: this.vcsIgnoreDirectories},
            ...this.vcsIgnoreFiles && {files: this.vcsIgnoreFiles}
          }
        }
      }
    });
  }
});

Then('scaffold results are returned', async function () {
  assert.deepEqual(this.result, {});
});
