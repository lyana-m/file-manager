import fs from 'fs/promises';
import {isPathExists} from '../../helpers/isPathExists.js';

export const checkTargetDir = async (targetDir) => {
  await isPathExists(targetDir);

  const stats = await fs.stat(targetDir);

  if (!stats.isDirectory()) {
    throw new Error('Target path is not a directory');
  }
};
