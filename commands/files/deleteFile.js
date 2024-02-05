import {rm} from 'fs/promises';
import {isPathExists} from '../../helpers/isPathExists.js';

export const deleteFile = async (filePath) => {
  await isPathExists(filePath);
  await rm(filePath);
}
