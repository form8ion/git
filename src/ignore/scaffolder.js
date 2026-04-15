import write from './writer.js';

export default function scaffoldeIgnore({projectRoot}) {
  return write({projectRoot, ignores: []});
}
