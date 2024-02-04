import {createHash} from 'crypto';
import {createReadStream} from 'fs';
import {pipeline} from 'stream';
import {isPathExists} from '../../helpers/isPathExists.js';

export const getFileHash = async (filePath) => {
  await isPathExists(filePath);

  const hash = createHash('sha256').setEncoding('hex');
  const readStream = createReadStream(filePath);

  pipeline(readStream, hash, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(hash.read());
    }
  });
};
