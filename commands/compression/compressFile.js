import {createReadStream, createWriteStream} from 'fs';
import {createBrotliCompress} from 'zlib';
import {pipeline} from 'stream';
import {isPathExists} from '../../helpers/isPathExists.js';
import {isPathAvailable} from '../../helpers/isPathAvailable.js';

export const compressFile = async (sourceFilePath, destPath) => {
  await isPathExists(sourceFilePath);
  await isPathAvailable(destPath);

  const compress = createBrotliCompress();
  const rs = createReadStream(sourceFilePath);
  const ws = createWriteStream(destPath);

  pipeline(rs, compress, ws, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
};
