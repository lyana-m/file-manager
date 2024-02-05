import os from 'os';
import { printCpusInfo } from './printCpusInfo.js';

export const getOsInfo = (arg) => {
  switch (arg) {
    case '--EOL':
      console.log(`Default system End-Of-Line: ${JSON.stringify(os.EOL)}`);
      break;

    case '--cpus':
      printCpusInfo();
      break;

    case '--homedir':
      console.log(`Home directory: ${os.homedir()}`);
      break;

    case '--username':
      console.log(`Current system user name: ${os.userInfo().username}`);
      break;

      case '--architecture':
      console.log(`CPU architecture: ${os.arch()}`);
      break;

    default:
      throw new Error(`Unknown command: os ${arg}`);
  }
}
