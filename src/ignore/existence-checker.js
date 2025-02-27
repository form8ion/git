import {exists} from '@form8ion/ignore-file';

export default function gitignoreExists({projectRoot} = {}) {
  return exists({projectRoot, name: 'git'});
}
