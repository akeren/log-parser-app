export class FileNotFoundException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, FileNotFoundException.prototype);
  }
}
