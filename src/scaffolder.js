import touch from 'touch';
import simpleGit from 'simple-git';
import {info} from '@travi/cli-messages';

import {scaffold as scaffoldAttributes} from './attributes/index.js';

export default async function ({projectRoot}) {
  info('Initializing Git Repository');

  const git = simpleGit({baseDir: projectRoot});

  await Promise.all([
    touch(`${projectRoot}/.gitignore`),
    git.init(),
    scaffoldAttributes({projectRoot})
  ]);

  return {};
}
