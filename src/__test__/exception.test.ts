import {
  BadException,
  FileNotFoundException,
  InvalidArgumentException,
  InvalidFileTypeException,
  NotAFileException,
} from '../exceptions';

describe('Exception module', () => {
  it('should throw a bad exception', () => {
    expect(() => {
      throw new BadException('BadException');
    }).toThrowError('BadException');
  });

  it('should throw a file not found exception', () => {
    expect(() => {
      throw new FileNotFoundException('FileNotFoundException');
    }).toThrowError('FileNotFoundException');
  });

  it('should throw an invalid argument exception', () => {
    expect(() => {
      throw new InvalidArgumentException('InvalidArgumentException');
    });
  });

  it('should throw an invalid file type exception', () => {
    expect(() => {
      throw new InvalidFileTypeException('InvalidFileTypeException');
    });
  });

  it('should throw a not a file exception', () => {
    expect(() => {
      throw new NotAFileException('NotAFileException');
    });
  });
});
