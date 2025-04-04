import {fileExists} from '@form8ion/core';

import {describe, it, expect, vi, afterEach} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import gitignoreExists from './tester.js';

vi.mock('@form8ion/core');

describe('gitignore tester', () => {
  const projectRoot = any.string();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return `true` if a `.gitignore` file exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/.gitignore`).thenResolve(true);

    expect(await gitignoreExists({projectRoot})).toBe(true);
  });

  it('should return `false` if a `.gitignore` file does not exist', async () => {
    when(fileExists).calledWith(`${projectRoot}/.gitignore`).thenResolve(false);

    expect(await gitignoreExists({projectRoot})).toBe(false);
  });
});
