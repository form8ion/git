import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import writeGitIgnore from './writer.js';
import scaffold from './scaffolder.js';

vi.mock('./writer.js');

describe('ignore scaffolder', () => {
  const projectRoot = any.string();

  it('should write the directories and files', async () => {
    await scaffold({projectRoot});

    expect(writeGitIgnore).toHaveBeenCalledWith({projectRoot, ignores: []});
  });
});
