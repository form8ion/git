import * as simpleGit from 'simple-git';

import any from '@travi/any';
import {beforeEach, describe, it, expect, vi} from 'vitest';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import gitIsPresent from './tester.js';

vi.mock('simple-git');

describe('git predicate', () => {
  let checkIsRepo;
  const projectRoot = any.string();

  beforeEach(() => {
    checkIsRepo = vi.fn();

    when(simpleGit.simpleGit)
      .calledWith({baseDir: projectRoot})
      .thenReturn({checkIsRepo});
  });

  it('should return `true` if a `.gitignore` file exists', async () => {
    when(checkIsRepo).calledWith('root').thenResolve(true);

    expect(await gitIsPresent({projectRoot})).toBe(true);
  });

  it('should return `false` if a `.gitignore` file does not exist', async () => {
    when(checkIsRepo).calledWith('root').thenResolve(false);

    expect(await gitIsPresent({projectRoot})).toBe(false);
  });
});
