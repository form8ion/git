import {promises as fs} from 'node:fs';

import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldAttributes from './scaffolder.js';

vi.mock('node:fs');

describe('attributes scaffolder', () => {
  it('should create the attributes file', async () => {
    const projectRoot = any.string();

    await scaffoldAttributes({projectRoot});

    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/.gitattributes`, '* text=auto');
  });
});
