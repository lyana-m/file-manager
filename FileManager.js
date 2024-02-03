import path from 'path';
import {parseInput} from './helpers/parseInput.js';
import {isCommandValid} from './helpers/isCommandValid.js';
import {INVALID_INPUT, OPERATION_FAILED} from './constants/errors.js';
import {listFiles} from './commands/files/listFiles.js';
import {navigateUp} from './commands/navigation/navigateUp.js';
import {checkTargetDir} from './commands/navigation/checkTargetDir.js';

export class FileManager {
  currentDir;

  constructor(rootDir) {
    this.currentDir = rootDir;
  }

  ls = async () => {
    listFiles(this.currentDir);
  };

  up = () => {
    const newDir = path.resolve(this.currentDir, '..');
    this.currentDir = navigateUp(newDir);
  };

  cd = async ([targetDir]) => {
    const newDir = path.resolve(this.currentDir, targetDir);
    await checkTargetDir(newDir);
    this.currentDir = newDir;
  };

  start() {
    process.stdin.on('data', async (data) => {
      const input = data.toString().trim();

      if (input === '.exit') {
        process.exit(0);
      }

      const {command, args} = parseInput(input);

      console.log(command, args);

      if (isCommandValid(command, args)) {
        try {
          await this[command](args);
        } catch (err) {
          console.log(`${OPERATION_FAILED}: ${err.message}`);
        }
      } else {
        console.log(INVALID_INPUT);
      }

      console.log(`You are currently in ${this.currentDir}\n`);
    });
  }
}
