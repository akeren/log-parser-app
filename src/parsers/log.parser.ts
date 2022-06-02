/* eslint-disable no-unused-vars */
import fs from 'fs';
import events from 'events';
import readline from 'readline';
import { ICommandArguments } from '../utils/types';
import { IErrorLogData, ILogData } from './types';
import { InputFileValidation, OutputFileValidation } from '../validations';
import { LogWriter } from './writers';

export class LogParser {
  constructor(
    private readonly commandArgs: ICommandArguments,
    private readonly inputFileValidation: InputFileValidation,
    private readonly outputFileValidation: OutputFileValidation,
    private readonly logWriter: LogWriter
  ) {}

  async parse(): Promise<void> {
    this.inputFileValidation.validateInputFilePath(this.commandArgs.inputFilePath);
    this.outputFileValidation.validateOutputFilePath(this.commandArgs.outputFilePath);

    const fileType = this.commandArgs.outputFilePath.split('.').pop() as string;

    const logWriter = this.logWriter.getWriterUsingFileType(fileType, this.commandArgs.outputFilePath);

    const readLine = readline.createInterface({
      input: fs.createReadStream(this.commandArgs.inputFilePath),
      crlfDelay: Infinity,
    });

    readLine.on('line', (line: string) => {
      const [timestamp, logLevel, logData] = line.split(' - ');

      if (logLevel === 'error') {
        const parsedLogData: IErrorLogData = JSON.parse(logData);

        const outputLogData: ILogData = {
          timestamp: this.convertDateToTimeStamp(new Date(timestamp)),
          loglevel: logLevel,
          transactionId: parsedLogData.transactionId || '',
          error: parsedLogData.err || '',
        };

        logWriter.write(outputLogData);
      }
    });

    await events.once(readLine, 'close');

    logWriter.save();

    console.log('Logs parsed successfully!');
  }

  private convertDateToTimeStamp(date: Date): number {
    return date.getTime();
  }
}
