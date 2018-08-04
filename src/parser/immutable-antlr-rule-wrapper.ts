import {ParserRuleContext, Token} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';

export class ImmutableAntlrRuleWrapper implements AntlrRuleWrapper {
    constructor(private rule: ParserRuleContext, private parser: AntlrParser) {
    }

    getChildren(): AntlrRuleWrapper[] {
        const count = this.rule.getChildCount();
        const list = [];

        for (let i = 0; i < count; i++) {
            const rule = this.rule.getChild(i);
            list[i] = new ImmutableAntlrRuleWrapper(rule, this.parser);
        }

        return list;
    }

    getSiblings(): AntlrRuleWrapper[] {
        const siblings = this.parser.getSiblings(this.rule)
            .map((sibling) => new ImmutableAntlrRuleWrapper(sibling, this.parser));

        return siblings;
    }

    setText(text: string) {
        throw new Error(`${this.getName()} is an immutable AntlrRuleWrapper`);
    }

    getParent(): AntlrRuleWrapper {
        const parent = this.parser.getRuleParent(this.rule);

        if (parent) {
            return new ImmutableAntlrRuleWrapper(parent, this.parser);
        }

        return undefined;
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
