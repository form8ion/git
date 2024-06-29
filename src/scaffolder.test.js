import * as simpleGit from 'simple-git';
import touch from 'touch';

import any from '@travi/any';
import {expect, describe, it, vi} from 'vitest';
import {when} from 'jest-when';

import {scaffold as scaffoldAttributes} from './attributes/index.js';
import scaffold from './scaffolder.js';

vi.mock('touch');
vi.mock('simple-git');
vi.mock('./attributes/index.js');

describe('scaffold', () => {
  it('should initialize the repo', async () => {
    const projectRoot = any.string();
    const init = vi.fn();
    when(simpleGit.simpleGit).calledWith({baseDir: projectRoot}).mockReturnValue({init});

    const results = await scaffold({projectRoot});

    expect(results).toEqual({});
    expect(init).toHaveBeenCalled();
    expect(touch).toHaveBeenCalledWith(`${projectRoot}/.gitignore`);
    expect(scaffoldAttributes).toHaveBeenCalledWith({projectRoot});
  });
});
