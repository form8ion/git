import {promises as fs} from 'node:fs';
import touch from 'touch';

export default async function ({projectRoot}) {
  await Promise.all([
    touch(`${projectRoot}/.gitignore`),
    fs.writeFile(`${projectRoot}/.gitattributes`, '* text=auto')
  ]);

  return {};
}
