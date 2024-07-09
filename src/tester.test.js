import * as simpleGit from 'simple-git';

import any from '@travi/any';
import {beforeEach, describe, it, expect, vi} from 'vitest';
import {when} from 'jest-when';

import gitIsPresent from './tester.js';

vi.mock('simple-git');

describe('git predicate', () => {
  let checkIsRepo;
  const projectRoot = any.string();

  beforeEach(() => {
    checkIsRepo = vi.fn();

    when(simpleGit.simpleGit)
      .calledWith({baseDir: projectRoot})
      .mockReturnValue({checkIsRepo});
  });

  it('should return `true` if a `.gitignore` file exists', async () => {
    when(checkIsRepo).calledWith('root').mockResolvedValue(true);

    expect(await gitIsPresent({projectRoot})).toBe(true);
  });

  it('should return `false` if a `.gitignore` file does not exist', async () => {
    when(checkIsRepo).calledWith('root').mockResolvedValue(false);

    expect(await gitIsPresent({projectRoot})).toBe(false);
  });
});
