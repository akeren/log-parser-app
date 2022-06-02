export class BadException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, BadException.prototype);
  }
}
