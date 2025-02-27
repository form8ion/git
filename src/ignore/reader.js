import {read} from '@form8ion/ignore-file';

export default function readGitIgnore({projectRoot}) {
  return read({projectRoot, name: 'git'});
}
