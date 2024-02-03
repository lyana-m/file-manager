import {availableCommands, availableOsArgs} from '../constants/availableCommands.js';

export const isCommandValid = (command, args) => {
  switch (command) {
    case 'up':
    case 'ls':
      return args.length === 0;

    case 'cd':
    case 'cut':
    case 'add':
    case 'rm':
    case 'hash':
      return args.length === 1;

    case 'os':
      return args.length === 1 && availableOsArgs.includes(args[0]);

    case 'rn':
    case 'cp':
    case 'mv':
    case 'mv':
    case 'compress':
    case 'decompress':
      return args.length === 2;

    default:
      return false;
  }
};
