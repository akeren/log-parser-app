import { ILogWriter } from '../types';
import { JsonWriter } from './json-writer';
import { InvalidFileTypeException } from '../../exceptions';

export class LogWriter {
  getWriterUsingFileType(fileType: string, outputFilePath: string): ILogWriter {
    switch (fileType) {
      case 'json':
        return new JsonWriter(outputFilePath);
      default:
        throw new InvalidFileTypeException('Invalid file type.');
    }
  }
}
