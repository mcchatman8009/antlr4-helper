import {Token} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {MutableAntlrParser} from './mutable-antlr-parser';
import {AntlrRuleError} from './antlr-rule-error';

export class MutableAntlrTokenWrapper implements AntlrTokenWrapper {
    constructor(private token: Token, private parser: MutableAntlrParser) {
    }

    inRange(pos: { column: number, line: number }): boolean {
        const [start, end] = this.getRange();

        if (this.exists()) {
            return this.parser.comparePositions(start, pos) <= 0 && this.parser.comparePositions(pos, end) < 0;
        }

        return false;
    }

    exists(): boolean {
        return this.parser.doesTokenExist(this.token);
    }

    getToken(): Token {
        return this.token;
    }

    getName(): string {
        return this.parser.getTokenName(this.token);
    }

    getText(): string {
        return this.parser.getTokenText(this.token);
    }

    setText(text: string) {
        return this.parser.setTokenText(this.token, text);
    }

    getRange(): AntlrRange {
        return this.parser.getTokenRange(this.token);
    }
}
