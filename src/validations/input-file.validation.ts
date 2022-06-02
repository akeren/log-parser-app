import fs from 'fs';
import { FileNotFoundException, NotAFileException } from '../exceptions';

export class InputFileValidation {
  validateInputFilePath(inputFilePath: string): void {
    if (!fs.existsSync(inputFilePath)) {
      throw new FileNotFoundException(`Input file path does not exist!`);
    }

    if (!fs.lstatSync(inputFilePath).isFile() || !this.isReadableFile(inputFilePath)) {
      throw new NotAFileException(`Input file path is not a file!`);
    }
  }

  private isReadableFile(inputFilePath: string): boolean {
    try {
      fs.accessSync(inputFilePath, fs.constants.R_OK);
      return true;
    } catch (e) {
      return false;
    }
  }
}
