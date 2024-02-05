import os from 'os';
import path from 'path';

export const navigateUp = (targetDir) => {
  const homeDir = os.homedir();
  const rootDir = path.parse(homeDir).root;

  if (targetDir === rootDir) {
    return rootDir;
  } else {
    return targetDir;
  }
};
