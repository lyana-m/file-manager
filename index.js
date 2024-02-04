import {homedir} from 'os';
import {FileManager} from './FileManager.js';
import {OPERATION_FAILED} from './constants/errors.js';

const args = process.argv.slice(2);
const username = args[0].split('=')[1];

const rootDir = homedir();

console.log(`Welcome to the File Manager, ${username}!\n\nYou are currently in ${rootDir}\n`);

process.on('exit', () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
});

// (ctrl + c)
process.on('SIGINT', () => {
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.log(`${OPERATION_FAILED}: ${error.message}\n`);
})

export const manager = new FileManager(rootDir);
manager.start();
