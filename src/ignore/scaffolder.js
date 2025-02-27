import write from './writer.js';

export default function ({projectRoot, files = [], directories = []}) {
  return write({projectRoot, ignores: [...directories, ...files]});
}
