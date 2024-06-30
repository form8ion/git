import {info} from '@travi/cli-messages';

import writeIgnores from './writer.js';

export default async function ({projectRoot, results: {vcsIgnore}}) {
  if (vcsIgnore) {
    info('Updating files and directories to be ignored from version control', {level: 'secondary'});

    await writeIgnores({projectRoot, ...vcsIgnore});
  }

  return {};
}
