import {Given, Then} from '@cucumber/cucumber';
import any from '@travi/any';
import {promises as fs} from 'node:fs';
import {assert} from 'chai';

Given('no additional ignores are provided for vcs', async function () {
  return undefined;
});

Given('additional files are provided to be ignored from vcs', async function () {
  this.vcsIgnoreFiles = any.listOf(any.word);
});

Given('additional directories are provided to be ignored from vcs', async function () {
  this.vcsIgnoreDirectories = any.listOf(any.word);
});

Then('the additional ignores are added to the gitignore', async function () {
  const gitIgnoreContent = await fs.readFile(`${process.cwd()}/.gitignore`, 'utf-8');

  assert.equal(
    gitIgnoreContent,
    `${this.existingVcsIgnoredDirectories.join('\n')}

${this.existingVcsIgnoredFiles.join('\n')}
${this.vcsIgnoreDirectories.join('\n')}

${this.vcsIgnoreFiles.join('\n')}`
  );
});

Then('the gitignore file is unchanged', async function () {
  assert.equal(
    await fs.readFile(`${process.cwd()}/.gitignore`, 'utf-8'),
    `${this.existingVcsIgnoredDirectories.join('\n')}\n\n${this.existingVcsIgnoredFiles.join('\n')}`
  );
});
