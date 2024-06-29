import {fileExists} from '@form8ion/core';

import any from '@travi/any';
import {describe, it, expect, vi} from 'vitest';
import {when} from 'jest-when';

import gitIsPresent from './tester.js';

vi.mock('@form8ion/core');

describe('git predicate', () => {
  const projectRoot = any.string();

  it('should return `true` if a `.gitignore` file exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/.gitignore`).mockResolvedValue(true);

    expect(await gitIsPresent({projectRoot})).toBe(true);
  });

  it('should return `false` if a `.gitignore` file does not exist', async () => {
    when(fileExists).calledWith(`${projectRoot}/.gitignore`).mockResolvedValue(false);

    expect(await gitIsPresent({projectRoot})).toBe(false);
  });
});
