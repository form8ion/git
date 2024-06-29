import {scaffold as scaffoldAttributes} from './attributes/index.js';

export default async function ({projectRoot}) {
  await scaffoldAttributes({projectRoot});

  return {};
}
