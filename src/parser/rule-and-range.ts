import {MutableTextRange} from 'text-manipulation';
import {ParserRuleContext} from '../../node_modules/antlr4-tool/dist/node_modules/@types/antlr4';

export class RuleAndRange {
    constructor(public range: MutableTextRange, public rule: ParserRuleContext) {

    }
}
