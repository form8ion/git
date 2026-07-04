import appendIgnores from './appender.js';

export default async function liftIgnore({projectRoot, results: {vcsIgnore}}, {logger}) {
  if (vcsIgnore) {
    logger.info('Updating files and directories to be ignored from version control', {level: 'secondary'});

    const {directories = [], files = []} = vcsIgnore;

    await appendIgnores({projectRoot, ignores: [...directories, ...files]});
  }

  return {};
}
