import {readdir, stat} from 'fs/promises';
import {resolve} from 'path';

export const listFiles = async (path) => {
  let dirContent;
  try {
    dirContent = await readdir(path);
  } catch (err) {
    throw new Error(`Can't read content of the directory ${path}`);
  }

  const tableData = [];
  for (const entry of dirContent) {
    let stats;
    try {
      stats = await stat(path === '/' ? entry : resolve(path, entry));
    } catch (err) {
      throw new Error(`Can't access file ${path}`);
    }

    if (!stats.isDirectory() && !stats.isFile()) {
      return;
    }

    tableData.push({Name: entry, Type: stats.isDirectory() ? 'directory' : 'file'});
  }

  const sortedTableData = tableData
    .sort((a, b) => a.Name.localeCompare(b.Name))
    .sort((a, b) => a.Type.localeCompare(b.Type));
  console.table(sortedTableData);
};
