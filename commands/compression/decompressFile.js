import {createReadStream, createWriteStream} from 'fs';
import {createBrotliDecompress} from 'zlib';
import {pipeline} from 'stream';
import {isPathExists} from '../../helpers/isPathExists.js';
import {isPathAvailable} from '../../helpers/isPathAvailable.js';

export const decompressFile = async (sourceFilePath, destPath) => {
  await isPathExists(sourceFilePath);
  await isPathAvailable(destPath);

  const decompress = createBrotliDecompress();
  const rs = createReadStream(sourceFilePath);
  const ws = createWriteStream(destPath);

  pipeline(rs, decompress, ws, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
};
