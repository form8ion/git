import {promises as fs} from 'node:fs';
import touch from 'touch';

import any from '@travi/any';
import {expect, describe, it, vi} from 'vitest';

import scaffold from './scaffolder.js';

vi.mock('node:fs');
vi.mock('touch');

describe('scaffold', () => {
  it('should initialize the repo', async () => {
    const projectRoot = any.string();

    const results = await scaffold({projectRoot});

    expect(results).toEqual({});
    expect(touch).toHaveBeenCalledWith(`${projectRoot}/.gitignore`);
    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/.gitattributes`, '* text=auto');
  });
});
