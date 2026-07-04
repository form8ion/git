import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import appendToIgnores from './appender.js';
import liftGitIgnore from './lifter.js';

vi.mock('./appender.js');

describe('gitignore lifter', () => {
  const projectRoot = any.string();
  const ignoredDirectories = any.listOf(any.word);
  const ignoredFiles = any.listOf(any.word);
  const logger = {info: () => undefined};

  it('should append the provided ignores to the gitignore file', async () => {
    expect(await liftGitIgnore(
      {projectRoot, results: {vcsIgnore: {directories: ignoredDirectories, files: ignoredFiles}}},
      {logger}
    )).toEqual({});

    expect(appendToIgnores).toHaveBeenCalledWith({projectRoot, ignores: [...ignoredDirectories, ...ignoredFiles]});
  });

  it('should append provided directories to ignore', async () => {
    expect(await liftGitIgnore(
      {projectRoot, results: {vcsIgnore: {directories: ignoredDirectories}}},
      {logger}
    )).toEqual({});

    expect(appendToIgnores).toHaveBeenCalledWith({projectRoot, ignores: ignoredDirectories});
  });

  it('should append provided directories to ignore', async () => {
    expect(await liftGitIgnore({projectRoot, results: {vcsIgnore: {files: ignoredFiles}}}, {logger}))
      .toEqual({});

    expect(appendToIgnores).toHaveBeenCalledWith({projectRoot, ignores: ignoredFiles});
  });

  it('should not update the ignore file if no additional ignores are provided', async () => {
    expect(await liftGitIgnore({projectRoot, results: {}}, {logger})).toEqual({});

    expect(appendToIgnores).not.toHaveBeenCalledWith({projectRoot});
  });
});
