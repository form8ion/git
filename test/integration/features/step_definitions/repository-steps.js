import {promises as fs} from 'node:fs';

import * as td from 'testdouble';
import {Before, Given, Then} from '@cucumber/cucumber';
import any from '@travi/any';

const simpleGitInstance = td.object(['init']);

Before(async function () {
  td.when(this.git.simpleGit({baseDir: this.projectRoot})).thenReturn(simpleGitInstance);
});

Given('the project is versioned with git', async function () {
  this.existingVcsIgnoredFiles = any.listOf(any.word);
  this.existingVcsIgnoredDirectories = any.listOf(any.word);

  await fs.writeFile(
    `${this.projectRoot}/.gitignore`,
    `${this.existingVcsIgnoredDirectories.join('\n')}\n\n${this.existingVcsIgnoredFiles.join('\n')}`
  );
});

Given('the project is not versioned with git', async function () {
  return undefined;
});

Then('a git repo is initialized', async function () {
  td.verify(simpleGitInstance.init());
});
