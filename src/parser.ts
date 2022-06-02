import { getCommandArguments } from './utils';
import { InputFileValidation, OutputFileValidation } from './validations';
import { LogParser } from './parsers';
import { LogWriter } from './parsers/writers';

const commandArgs = getCommandArguments(process.argv.splice(2));

const logParser = new LogParser(commandArgs, new InputFileValidation(), new OutputFileValidation(), new LogWriter());

logParser.parse();
