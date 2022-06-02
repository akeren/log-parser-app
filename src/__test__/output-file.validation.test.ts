import { OutputFileValidation } from '../validations';
import { BadException } from '../exceptions';

describe('OutputFileValidation()', (): void => {
  const outputFileValidation = new OutputFileValidation();

  it('class should be defined', (): void => {
    expect(outputFileValidation).toBeDefined();
  });

  it('should throw a file not writable exception', (): void => {
    expect(() => outputFileValidation.validateOutputFilePath('/etc/passwd')).toThrow(
      new BadException('Output file path is not writable!')
    );
  });
});
