import {homedir} from 'os';
import {isCommandValid} from './isCommandValid.js';
import {readDir} from './readDir.js';

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

process.stdin.on('data', async (data) => {
  const input = data.toString().trim();

  if (input === '.exit') {
    process.exit(0);
  }

  if (!isCommandValid(input)) {
    console.log(`Invalid input\n`);
  }

  if (input === 'ls') {
    await readDir(rootDir);
  }

  console.log(`You are currently in ${rootDir}\n`)
  // console.log(`You entered: ${input}`);
});
