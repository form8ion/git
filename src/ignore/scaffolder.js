import write from './writer.js';

export default function ({projectRoot}) {
  return write({projectRoot, ignores: []});
}
