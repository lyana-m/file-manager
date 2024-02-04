import {access} from 'fs/promises';

export const isPathAvailable = async (path) => {
  try {
    await access(path);
    throw new Error(`Path ${path} already exists`);
  } catch (err) {
    if (err.message === `Path ${path} already exists`) {
      throw err;
    }
  }
}
