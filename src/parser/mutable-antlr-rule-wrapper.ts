import {ParserRuleContext} from 'antlr4';
import {MutableAntlrParser} from './mutable-antlr-parser';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';

export class MutableAntlrRuleWrapper implements AntlrRuleWrapper {
    constructor(public rule: ParserRuleContext, private parser: MutableAntlrParser) {
    }

    getChildren(): AntlrRuleWrapper[] {
        const count = this.rule.getChildCount();
        const list = [];

        for (let i = 0; i < count; i++) {
            const rule = this.rule.getChild(i);
            list[i] = new MutableAntlrRuleWrapper(rule, this.parser);
        }

        return list;
    }

    getRule(): ParserRuleContext {
        return this.rule;
    }

    getText(): string {
        return this.parser.getRuleText(this.rule);
    }

    setText(text: string): void {
        return this.parser.setRuleText(this.rule, text);
    }

    getName(): string {
        return this.parser.getRuleName(this.rule);
    }

    getRange(): AntlrRange {
        return this.parser.getRuleRange(this.rule);
    }

    getParent(): AntlrRuleWrapper {
        const parent = this.parser.getRuleParent(this.rule);
        if (parent) {
            return new MutableAntlrRuleWrapper(parent, this.parser);
        }

        return undefined;
    }

    getSiblings(): AntlrRuleWrapper[] {
        const siblings = this.parser.getSiblings(this.rule)
            .map((sibling) => new MutableAntlrRuleWrapper(sibling, this.parser));

        return siblings;
    }
}
