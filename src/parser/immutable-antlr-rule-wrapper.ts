import {ParserRuleContext, Token} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {TerminalNode} from 'antlr4/tree/Tree';
import {ImmutableAntlrTokenWrapper} from './immutable-antlr-token-wrapper';

export class ImmutableAntlrRuleWrapper implements AntlrRuleWrapper {

    constructor(private rule: ParserRuleContext, private parser: AntlrParser) {
    }

    getTokens(tokenRuleName?: string): AntlrTokenWrapper[] {
        const count = this.rule.getChildCount();
        const list = [];

        for (let i = 0; i < count; i++) {
            const token = this.rule.getChild(i);
            if ((token instanceof TerminalNode)) {
                const wrapper = new ImmutableAntlrTokenWrapper(token.symbol, this.parser);

                if (tokenRuleName === undefined || wrapper.getName() === tokenRuleName) {
                    list.push(wrapper);
                }
            }
        }

        return list;
    }

    hasToken(tokenRuleName: string): boolean {
        return this.getTokens(tokenRuleName).length > 0;
    }

    getChildren(): AntlrRuleWrapper[] {
        const count = this.rule.getChildCount();
        const list = [];

        for (let i = 0; i < count; i++) {
            const rule = this.rule.getChild(i);
            if (!(rule instanceof TerminalNode)) {
                list.push(new ImmutableAntlrRuleWrapper(rule, this.parser));
            }
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
