import simpleGit from 'simple-git';

import {scaffold as scaffoldIgnore} from './ignore/index.js';

export default async function scaffoldGit({projectRoot}, {logger}) {
  logger.info('Initializing Git Repository');

  const git = simpleGit({baseDir: projectRoot});

  await Promise.all([
    scaffoldIgnore({projectRoot}),
    git.init()
  ]);

  return {};
}
