import {info} from '@travi/cli-messages';

import appendIgnores from './appender.js';

export default async function ({projectRoot, results: {vcsIgnore}}) {
  if (vcsIgnore) {
    info('Updating files and directories to be ignored from version control', {level: 'secondary'});

    const {directories = [], files = []} = vcsIgnore;

    await appendIgnores({projectRoot, ignores: [...directories, ...files]});
  }

  return {};
}
