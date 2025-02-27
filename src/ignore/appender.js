import readGitIgnore from './reader.js';
import writeGitIgnore from './writer.js';

export default async function appendToIgnoreFile({projectRoot, ignores}) {
  const existingIgnores = await readGitIgnore({projectRoot});

  await writeGitIgnore({projectRoot, ignores: [...existingIgnores, ...ignores]});
}
