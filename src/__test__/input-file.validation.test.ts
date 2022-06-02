import { InputFileValidation } from '../validations';
import { FileNotFoundException, NotAFileException } from '../exceptions';

describe('InputFileValidation', (): void => {
  const inputFileValidation = new InputFileValidation();
  it('class should be defined', (): void => {
    expect(inputFileValidation).toBeDefined();
  });

  it('should throw an file not exception', (): void => {
    expect(() => inputFileValidation.validateInputFilePath('')).toThrow(
      new FileNotFoundException('Input file path does not exist!')
    );
  });

  it('should throw is not a file', (): void => {
    expect(() => inputFileValidation.validateInputFilePath('/dev/null')).toThrow(
      new NotAFileException('Input file path is not a file!')
    );
  });
});
