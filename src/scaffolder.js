import touch from 'touch';
import simpleGit from 'simple-git';
import {info} from '@travi/cli-messages';

export default async function ({projectRoot}) {
  info('Initializing Git Repository');

  const git = simpleGit({baseDir: projectRoot});

  await Promise.all([
    touch(`${projectRoot}/.gitignore`),
    git.init()
  ]);

  return {};
}
