// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold, test, lift} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

const projectRoot = process.cwd();
const logger = {
  info: () => undefined,
  success: () => undefined,
  warn: () => undefined,
  error: () => undefined
};

await scaffold({projectRoot}, {logger});

if (await test({projectRoot})) {
  await lift({projectRoot, results: {vcsIgnore: {file: [], directories: []}}}, {logger});
}
