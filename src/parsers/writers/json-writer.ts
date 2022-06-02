/* eslint-disable no-unused-vars */
import fs from 'fs';
import { ILogWriter, ILogData } from '../types';

export class JsonWriter implements ILogWriter {
  private result: ILogData[] = [];

  constructor(private readonly outputFilePath: string) {}

  write(logData: ILogData): void {
    this.result.push(logData);
  }

  save(): void {
    fs.createWriteStream(this.outputFilePath).write(JSON.stringify(this.result));
  }
}
