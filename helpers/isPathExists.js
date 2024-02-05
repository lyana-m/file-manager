import {access} from 'fs/promises';

export const isPathExists = async (path) => {
  try {
    await access(path);
  } catch {
    throw new Error(`Path ${path} does not exist`);
  }
}
