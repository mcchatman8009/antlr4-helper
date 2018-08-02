import {ErrorListener, RecognitionException} from 'antlr4/error';
import {Recognizer, Token} from 'antlr4';
import {ErrorRuleHandler} from './error-rule-handler';
import {AntlrRuleError} from './antlr-rule-error';

export class LexErrorHandler extends ErrorListener {
    constructor(private errorHandler: ErrorRuleHandler) {
        super();
    }

    syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any): void {
        const ch: number = column;
        const editorLine = line - 1;

        const from = {column: Math.max(0, ch), line: editorLine};
        const to = {column: ch + 1, line: editorLine};
        const error = new AntlrRuleError();

        error.start = from;
        error.end = to;
        error.message = msg;
        error.exception = e;
        error.rule = null;

        this.errorHandler.addError(error);
    }
}
