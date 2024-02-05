import {rm} from 'fs/promises';
import {copyFile} from './copyFile.js';

export const moveFile = async (soureFilePath, destPath) => {
  try {
    await copyFile(soureFilePath, destPath);
    await rm(soureFilePath);
  } catch (err) {
    throw new Error(err.message);
  }
}
