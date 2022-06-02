export class InvalidArgumentException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
  }
}
