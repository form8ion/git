import simpleGit from 'simple-git';
import {info} from '@travi/cli-messages';

import {scaffold as scaffoldIgnore} from './ignore/index.js';

export default async function ({projectRoot}) {
  info('Initializing Git Repository');

  const git = simpleGit({baseDir: projectRoot});

  await Promise.all([
    scaffoldIgnore({projectRoot}),
    git.init()
  ]);

  return {};
}
