import {rename} from 'fs/promises';
import path from 'path';
import {isPathExists} from '../../helpers/isPathExists.js';

export const renameFile = async (filePath, newFileName) => {
  await isPathExists(filePath);

  const fileDir = path.parse(filePath).dir;
  const newFilePath = path.resolve(fileDir, newFileName);

  try {
    await rename(filePath, newFilePath);
  } catch (err) {
    throw new Error('Cant rename file');
  }
};
