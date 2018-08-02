import {ParserRuleContext} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';

export class AntlrRuleWrapper {
    constructor(private rule: ParserRuleContext, private parser: AntlrParser) {
    }

    getRule(): ParserRuleContext {
        return this.rule;
    }

    getName(): string {
        return this.parser.getRuleName(this.rule);
    }

    getText(): string {
        return this.parser.getRuleText(this.rule);
    }

    getRange(): AntlrRange {
        return this.parser.getRuleRange(this.rule);
    }
}
