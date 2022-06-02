import { LogParser } from '../parsers';
import { InputFileValidation, OutputFileValidation } from '../validations';
import { LogWriter } from '../parsers/writers';

describe('LogParser', () => {
  const commandArgs = {
    inputFilePath: 'input.log',
    outputFilePath: 'output.json',
  };

  const inputFileValidation = new InputFileValidation();
  const outputFileValidation = new OutputFileValidation();

  const logWriter = new LogWriter();

  const logParser = new LogParser(commandArgs, inputFileValidation, outputFileValidation, logWriter);

  it('should parse log file', async (): Promise<void> => {
    expect(logParser.parse).toBeDefined();
  });
});
