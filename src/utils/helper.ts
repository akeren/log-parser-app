import { ICommandArguments } from './types';
import { InvalidArgumentException } from '../exceptions';

export const getCommandArguments = (commandArgs: string[]): ICommandArguments => {
  if (commandArgs.length === 0 || commandArgs.length < 4) {
    throw new InvalidArgumentException(`Usage: node <file name> --input <input file path> --output <output file path>`);
  }

  if (commandArgs[0] !== '--input' || commandArgs[2] !== '--output') {
    throw new InvalidArgumentException('Invalid command line arguments!');
  }

  const inputFilePath = commandArgs[1];
  const outputFilePath = commandArgs[3];

  return {
    inputFilePath,
    outputFilePath,
  };
};
