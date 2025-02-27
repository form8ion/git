import {describe, it, vi, expect} from 'vitest';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';
import any from '@travi/any';

import gitignoreExists from './existence-checker.js';
import read from './reader.js';
import write from './writer.js';
import appendToIgnoreFile from './appender.js';

vi.mock('./existence-checker.js');
vi.mock('./reader.js');
vi.mock('./writer.js');

describe('gitignore appender', () => {
  const projectRoot = any.string();
  const ignores = any.listOf(any.string);

  it('should add the provided ignores to the existing gitignore', async () => {
    const existingIgnores = any.listOf(any.string);
    when(gitignoreExists).calledWith({projectRoot}).thenResolve(true);
    when(read).calledWith({projectRoot}).thenResolve(existingIgnores);

    await appendToIgnoreFile({projectRoot, ignores});

    expect(write).toHaveBeenCalledWith({projectRoot, ignores: [...existingIgnores, ...ignores]});
  });

  it('should write only the provided ignores when the ignore file does not yet exist', async () => {
    when(gitignoreExists).calledWith({projectRoot}).thenResolve(false);

    await appendToIgnoreFile({projectRoot, ignores});

    expect(write).toHaveBeenCalledWith({projectRoot, ignores});
  });
});
