import {exists} from '@form8ion/ignore-file';

import {it, describe, vi, expect} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import gitignoreExists from './existence-checker.js';

vi.mock('@form8ion/ignore-file');

describe('gitignore existence checker', () => {
  it('should check for existence of the gitignore', async () => {
    const projectRoot = any.string();
    const fileExists = any.boolean();
    when(exists).calledWith({projectRoot, name: 'git'}).thenResolve(fileExists);

    expect(await gitignoreExists({projectRoot})).toBe(fileExists);
  });
});
