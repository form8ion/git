import touch from 'touch';

import * as td from 'testdouble';
import {Before, Given, Then} from '@cucumber/cucumber';

const simpleGitInstance = td.object(['init']);

Before(async function () {
  td.when(this.git.simpleGit({baseDir: this.projectRoot})).thenReturn(simpleGitInstance);
});

Given('the project is versioned with git', async function () {
  await touch(`${this.projectRoot}/.gitignore`);
});

Given('the project is not versioned with git', async function () {
  return undefined;
});

Then('a git repo is initialized', async function () {
  td.verify(simpleGitInstance.init());
});
