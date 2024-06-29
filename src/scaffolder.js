import {promises as fs} from 'node:fs';
import touch from 'touch';
import simpleGit from 'simple-git';

export default async function ({projectRoot}) {
  const git = simpleGit({baseDir: projectRoot});

  await Promise.all([
    touch(`${projectRoot}/.gitignore`),
    fs.writeFile(`${projectRoot}/.gitattributes`, '* text=auto'),
    git.init()
  ]);

  return {};
}
