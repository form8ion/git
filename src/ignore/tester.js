import {fileExists} from '@form8ion/core';

export default function ignoreExists({projectRoot}) {
  return fileExists(`${projectRoot}/.gitignore`);
}
