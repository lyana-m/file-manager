import {createReadStream} from 'fs';
import {stat} from 'fs/promises';
import {isPathExists} from '../../helpers/isPathExists.js';

export const readFile = async (filePath) => {
  await isPathExists(filePath);

  const stats = await stat(filePath);

  if (!stats.isFile()) {
    throw new Error('Illegal read operation on a directory');
  }

  const fileStream = createReadStream(filePath);

  fileStream.on('data', (data) => {
    console.log(data.toString());
  })

  fileStream.on('end', () => {
    fileStream.destroy();
  });

  fileStream.on('error', () => {
    throw new Error(`Can't read file ${filePath}`);
  });
};
