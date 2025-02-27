import {write} from '@form8ion/ignore-file';

import {describe, it, vi, expect} from 'vitest';
import any from '@travi/any';

import writeGitIgnore from './writer.js';

vi.mock('@form8ion/ignore-file');

describe('gitignore writer', () => {
  it('should write the provided ignores to the .gitignore file', async () => {
    const projectRoot = any.string();
    const ignores = any.listOf(any.string);

    await writeGitIgnore({projectRoot, ignores});

    expect(write).toHaveBeenCalledWith({projectRoot, name: 'git', ignores});
  });
});
