import * as td from 'testdouble';
import {Before, Then} from '@cucumber/cucumber';

const simpleGitInstance = td.object(['init']);

Before(async function () {
  td.when(this.git.simpleGit({baseDir: this.projectRoot})).thenReturn(simpleGitInstance);
});

Then('a git repo is initialized', async function () {
  td.verify(simpleGitInstance.init());
});
