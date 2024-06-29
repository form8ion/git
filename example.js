// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold, test, lift} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

const projectRoot = process.cwd();

await scaffold({projectRoot});

if (await test({projectRoot})) {
  await lift({projectRoot});
}
