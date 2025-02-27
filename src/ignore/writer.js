import {write} from '@form8ion/ignore-file';

export default function writeGitIgnore({projectRoot, ignores}) {
  return write({projectRoot, name: 'git', ignores});
}
