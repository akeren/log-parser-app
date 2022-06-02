import fs from 'fs';
import { BadException } from '../exceptions';

export class OutputFileValidation {
  validateOutputFilePath(outputFilePath: string) {
    if (fs.existsSync(outputFilePath) && fs.lstatSync(outputFilePath).isFile()) {
      if (!this.isWritableFile(outputFilePath)) {
        throw new BadException(`Output file path is not writable!`);
      }

      fs.unlinkSync(outputFilePath);
    }
  }

  private isWritableFile(outputFilePath: string): boolean {
    try {
      fs.accessSync(outputFilePath, fs.constants.W_OK);
      return true;
    } catch (e) {
      return false;
    }
  }
}
