export interface IErrorLogData {
  transactionId: string;
  code: number;
  details: string;
  err: string;
}

export interface ILogData {
  timestamp: number;
  loglevel: string;
  transactionId: string;
  error: string;
}

export interface ILogWriter {
  // eslint-disable-next-line no-unused-vars
  write(data: ILogData): void;

  save(): void;
}
