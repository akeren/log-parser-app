import { getCommandArguments } from '../utils';
import { InvalidArgumentException } from '../exceptions';

describe('getCommandArguments', () => {
  const commandArgs = ['--input', 'input.txt', '--output', 'output.txt'];

  it('should throw an invalid argument exception', () => {
    expect(() => {
      getCommandArguments([]);
    }).toThrow(InvalidArgumentException);
  });

  it('should throw an invalid argument exception with array length of 2', () => {
    expect(() => {
      getCommandArguments(['--input', 'input.txt']);
    }).toThrow(InvalidArgumentException);
  });

  it('should throw an invalid argument exception with array length of 3', () => {
    expect(() => {
      getCommandArguments(['--input', 'input.txt', '--output']);
    }).toThrow(InvalidArgumentException);
  });

  it('should return an object with inputFilePath and outputFilePath', () => {
    expect(getCommandArguments(commandArgs)).toEqual({
      inputFilePath: 'input.txt',
      outputFilePath: 'output.txt',
    });
  });
});
