import {MutableTextRange} from 'text-manipulation';
import {ParserRuleContext} from 'antlr4';

export class RuleAndRange {
    constructor(public range: MutableTextRange, public rule: ParserRuleContext) {

    }
}
