import {ParserRuleContext} from 'antlr4';
import {MutableAntlrParser} from './mutable-antlr-parser';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';
import {AntlrRange} from '../';
import {TerminalNode} from 'antlr4/tree/Tree';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {MutableAntlrTokenWrapper} from './mutable-antlr-token-wrapper';
import {AntlrRuleError} from './antlr-rule-error';

export class MutableAntlrRuleWrapper implements AntlrRuleWrapper {
    constructor(public rule: ParserRuleContext, private parser: MutableAntlrParser) {
    }

    exists(): boolean {
        return this.parser.doesRuleExist(this.rule);
    }

    getTokens(tokenRuleName?: string): AntlrTokenWrapper[] {
        const count = this.rule.getChildCount();
        const list = [];

        for (let i = 0; i < count; i++) {
            const token = this.rule.getChild(i);
            if ((token instanceof TerminalNode)) {
                const wrapper = new MutableAntlrTokenWrapper(token.symbol, this.parser);

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

    getToken(tokenRuleName?: string): AntlrTokenWrapper {
        const tokens = this.getTokens(tokenRuleName);

        if (tokens.length > 0) {
            return tokens[0];
        }

        return undefined;
    }

    createRuleError(): AntlrRuleError {
        return this.parser.createRuleError(this.getRule());
    }
}
