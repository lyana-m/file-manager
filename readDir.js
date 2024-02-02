import { readdir, stat } from 'fs/promises';
import { resolve } from 'path';

export const readDir = async (path) => {
  let dirContent;
  try {
    dirContent = await readdir(path);
  } catch (err) {
    console.log('Operation failed');
    return;
  };

  const tableData = [];
  for (const entry of dirContent) {
    let stats;
    try {
      stats = await stat(resolve(path, entry))
    } catch (err) {
      console.log('Operation failed');
      return;
    }

    if (!stats.isDirectory() && !stats.isFile()) {
      return;
    }

    tableData.push({ Name: entry, Type: stats.isDirectory() ? 'directory' : 'file' });
  }

  const sortedTableData = tableData.sort((a, b) => a.Type.localeCompare(b.Type));
  console.table(sortedTableData);
}
