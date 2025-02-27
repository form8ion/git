import {read} from '@form8ion/ignore-file';

import {it, describe, vi, expect} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import readGitIgnore from './reader.js';

vi.mock('@form8ion/ignore-file');

describe('gitignore reader', () => {
  it('should read the contents of the .gitignore file', async () => {
    const projectRoot = any.string();
    const existingIgnores = any.listOf(any.word);
    when(read).calledWith({projectRoot, name: 'git'}).thenResolve(existingIgnores);

    expect(await readGitIgnore({projectRoot})).toEqual(existingIgnores);
  });
});
