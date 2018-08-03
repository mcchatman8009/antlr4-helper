import {Token} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';
import {AntlrTokenWrapper} from './antlr-token-wrapper';

export class ImmutableAntlrTokenWrapper implements AntlrTokenWrapper {
    constructor(private token: Token, private parser: AntlrParser) {
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

    getRange(): AntlrRange {
        return this.parser.getTokenRange(this.token);
    }
}
