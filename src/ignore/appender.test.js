import {describe, it, vi, expect} from 'vitest';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';
import any from '@travi/any';

import read from './reader.js';
import write from './writer.js';
import appendToIgnoreFile from './appender.js';

vi.mock('./reader.js');
vi.mock('./writer.js');

describe('gitignore appender', () => {
  const projectRoot = any.string();
  const existingIgnores = any.listOf(any.string);

  it('should add the provided ignores to the existing gitignore', async () => {
    const ignores = any.listOf(any.string);
    when(read).calledWith({projectRoot}).thenResolve(existingIgnores);

    await appendToIgnoreFile({projectRoot, ignores});

    expect(write).toHaveBeenCalledWith({projectRoot, ignores: [...existingIgnores, ...ignores]});
  });
});
