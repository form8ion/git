import touch from 'touch';

export default async function ({projectRoot}) {
  await touch(`${projectRoot}/.gitignore`);

  return {};
}
