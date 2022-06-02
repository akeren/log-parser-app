import { JsonWriter } from '../parsers/writers';

describe('JsonWriter', (): void => {
  const jsonWriter = new JsonWriter('/tmp/test.json');

  it('should write log data to a file', (): void => {
    expect(
      jsonWriter.write({
        timestamp: new Date().getTime(),
        loglevel: 'error',
        transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
        error: 'test error',
      })
    ).toBeUndefined();
  });

  it('should save the file', (): void => {
    expect(jsonWriter.save()).toBeUndefined();
  });
});
