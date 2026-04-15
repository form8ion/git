import simpleGit from 'simple-git';

export default function projectVersionedWithGit({projectRoot}) {
  const git = simpleGit({baseDir: projectRoot});

  return git.checkIsRepo('root');
}
