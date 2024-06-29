import * as simpleGit from 'simple-git';
import touch from 'touch';

import any from '@travi/any';
import {describe, expect, it, vi} from 'vitest';
import {when} from 'jest-when';
import scaffold from './scaffolder.js';

vi.mock('touch');
vi.mock('simple-git');

describe('scaffold', () => {
  it('should initialize the repo', async () => {
    const projectRoot = any.string();
    const init = vi.fn();
    when(simpleGit.simpleGit).calledWith({baseDir: projectRoot}).mockReturnValue({init});

    const results = await scaffold({projectRoot});

    expect(results).toEqual({});
    expect(init).toHaveBeenCalled();
    expect(touch).toHaveBeenCalledWith(`${projectRoot}/.gitignore`);
  });
});
