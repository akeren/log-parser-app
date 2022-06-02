export class InvalidFileTypeException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, InvalidFileTypeException.prototype);
  }
}
