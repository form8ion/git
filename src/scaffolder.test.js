import * as simpleGit from 'simple-git';

import any from '@travi/any';
import {describe, expect, it, vi} from 'vitest';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import {scaffold as scaffoldIgnore} from './ignore/index.js';
import scaffold from './scaffolder.js';

vi.mock('touch');
vi.mock('simple-git');
vi.mock('./ignore/index.js');

describe('scaffold', () => {
  it('should initialize the repo', async () => {
    const projectRoot = any.string();
    const init = vi.fn();
    when(simpleGit.simpleGit).calledWith({baseDir: projectRoot}).thenReturn({init});

    const results = await scaffold({projectRoot});

    expect(results).toEqual({});
    expect(init).toHaveBeenCalled();
    expect(scaffoldIgnore).toHaveBeenCalledWith({projectRoot});
  });
});
