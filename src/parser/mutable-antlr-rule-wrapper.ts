import {ParserRuleContext} from 'antlr4';
import {MutableAntlrParser} from './mutable-antlr-parser';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';
import {AntlrRange} from '../';
import {TerminalNode} from 'antlr4/tree/Tree';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {MutableAntlrTokenWrapper} from './mutable-antlr-token-wrapper';
import {AntlrRuleError} from './antlr-rule-error';
import {sortRange} from 'text-manipulation/dist/buffer/utils';
import {XPath} from '../xpath/xpath';

export class MutableAntlrRuleWrapper implements AntlrRuleWrapper {
    constructor(public rule: ParserRuleContext, private parser: MutableAntlrParser, private fixedRange?: AntlrRange) {
        if (fixedRange) {
            this.fixedRange = sortRange(fixedRange);
        }
    }

    exists(): boolean {
        return this.parser.doesRuleExist(this.rule);
    }

    inRange(pos: { column: number, line: number }): boolean {
        const [start, end] = this.getRange();

        if (this.exists()) {
            return this.parser.comparePositions(start, pos) <= 0 && this.parser.comparePositions(pos, end) < 0;
        }

        return false;
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

            if (!(rule instanceof TerminalNode)) {
                list.push(new MutableAntlrRuleWrapper(rule, this.parser));
            }
        }

        return list;
    }

    getRule(): ParserRuleContext {
        return this.rule;
    }

    getText(): string {
        if (this.fixedRange) {
            return this.parser.getTextRange(this.fixedRange);
        }

        return this.parser.getRuleText(this.rule);
    }

    setText(text: string): void {
        this.fixedRange = undefined;
        return this.parser.setRuleText(this.rule, text);
    }

    getName(): string {
        return this.parser.getRuleName(this.rule);
    }

    getRange(): AntlrRange {
        if (this.fixedRange) {
            return this.fixedRange;
        }

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

    findRulesByName(ruleName: string): AntlrRuleWrapper[] {
        const stack = [this] as AntlrRuleWrapper[];
        const results = []as AntlrRuleWrapper[];

        while (stack.length > 0) {
            const root = stack.pop();
            if (root !== this && root.getName() === ruleName) {
                results.push(root);
            }

            root.getChildren().forEach((child) => {
                stack.push(child);
            });
        }

        return results;
    }

    findRuleByName(ruleName: string): AntlrRuleWrapper {
        const stack = [this] as AntlrRuleWrapper[];

        while (stack.length > 0) {
            const root = stack.pop();

            if (root !== this && root.getName() === ruleName) {
                return root;
            }

            root.getChildren().forEach((child) => {
                stack.push(child);
            });
        }

        return undefined;
    }

    findRuleByPath(path: string): AntlrRuleWrapper {
        const rules = this.findRulesByPath(path);

        if (rules.length > 0) {
            return rules[0];
        }

        return undefined;
    }

    findRulesByPath(path: string): AntlrRuleWrapper[] {
        const xpath = new XPath(this);
        return xpath.findRulesByPath(path);
    }
}
