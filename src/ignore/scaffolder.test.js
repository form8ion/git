import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import writeGitIgnore from './writer.js';
import scaffold from './scaffolder.js';

vi.mock('./writer.js');

describe('ignore scaffolder', () => {
  const projectRoot = any.string();

  it('should write the directories and files', async () => {
    const directories = any.listOf(any.string);
    const files = any.listOf(any.string);

    await scaffold({projectRoot, directories, files});

    expect(writeGitIgnore).toHaveBeenCalledWith({projectRoot, ignores: [...directories, ...files]});
  });
});
