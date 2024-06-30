import any from '@travi/any';
import {describe, expect, it, vi} from 'vitest';

import {scaffold as scaffoldAttributes} from './attributes/index.js';
import {lift as liftIgnore} from './ignore/index.js';
import lift from './lifter.js';

vi.mock('./attributes/index.js');
vi.mock('./ignore/index.js');

describe('git lifter', () => {
  it('should define the attributes file', async () => {
    const projectRoot = any.string();
    const results = any.simpleObject();

    const result = await lift({projectRoot, results});

    expect(result).toEqual({});
    expect(scaffoldAttributes).toHaveBeenCalledWith({projectRoot});
    expect(liftIgnore).toHaveBeenCalledWith({projectRoot, results});
  });
});
