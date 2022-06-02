import { LogWriter, JsonWriter } from '../parsers/writers';

describe('LogWriter', (): void => {
  const logWriter = new LogWriter();

  it('should write using filetype and output file', (): void => {
    expect(logWriter.getWriterUsingFileType('json', 'output.json')).toBeInstanceOf(JsonWriter);
  });
});
