import {scaffold as scaffoldAttributes} from './attributes/index.js';
import {lift as liftIgnore} from './ignore/index.js';

export default async function liftGit({projectRoot, results}) {
  await Promise.all([
    scaffoldAttributes({projectRoot}),
    liftIgnore({projectRoot, results})
  ]);

  return {};
}
