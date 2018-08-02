import {RecognitionException} from 'antlr4/error';
import {ParserRuleContext} from 'antlr4';

export type Severity = 'error' | 'warning' | null;

export class AntlrRuleError {
    start: { column: number; line: number };
    end: { column: number; line: number };
    message: string;
    exception: RecognitionException;
    rule: ParserRuleContext;
    severity: Severity = 'error';
}
