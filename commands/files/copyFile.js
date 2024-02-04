import {createReadStream, createWriteStream} from 'fs';
import path from 'path';
import {isPathExists} from '../../helpers/isPathExists.js';

export const copyFile = async (soureFilePath, destPath) => {
  await isPathExists(soureFilePath);
  await isPathExists(destPath);

  const fileName = path.parse(soureFilePath).base;
  const fullDestPath = path.resolve(destPath, fileName);

  const readStream = createReadStream(soureFilePath);
  const writeStream = createWriteStream(fullDestPath);

  readStream.pipe(writeStream).on('error', () => {
    throw new Error('Cant copy file');
  });
};
