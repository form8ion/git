import any from '@travi/any';
import {describe, expect, it, vi} from 'vitest';

import {scaffold as scaffoldAttributes} from './attributes/index.js';
import lift from './lifter.js';

vi.mock('./attributes/index.js');

describe('git lifter', () => {
  it('should define the attributes file', async () => {
    const projectRoot = any.string();

    const results = await lift({projectRoot});

    expect(results).toEqual({});
    expect(scaffoldAttributes).toHaveBeenCalledWith({projectRoot});
  });
});
