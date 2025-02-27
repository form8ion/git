import gitignoreExists from './existence-checker.js';
import readGitIgnore from './reader.js';
import writeGitIgnore from './writer.js';

export default async function appendToIgnoreFile({projectRoot, ignores}) {
  let existingIgnores = [];

  if (await gitignoreExists({projectRoot})) {
    existingIgnores = await readGitIgnore({projectRoot});
  }

  await writeGitIgnore({projectRoot, ignores: [...existingIgnores, ...ignores]});
}
