import {promises as fs} from 'node:fs';

export default function scaffoldAttributes({projectRoot}) {
  return fs.writeFile(`${projectRoot}/.gitattributes`, '* text=auto');
}
