import fs from 'fs/promises';

export const createFile = async (path) => {
  try {
    await fs.open(path, 'wx');
  } catch {
    throw new Error(`File already exists ${path}`)
  }
}
