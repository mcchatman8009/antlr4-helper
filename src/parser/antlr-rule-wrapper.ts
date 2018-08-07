import {ParserRuleContext, Token} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {AntlrRuleError} from './antlr-rule-error';

export interface AntlrRuleWrapper {
    getRule(): ParserRuleContext;

    getName(): string;

    setText(text: string): void;

    getText(): string;

    getRange(): AntlrRange;

    getParent(): AntlrRuleWrapper;

    getChildren(): AntlrRuleWrapper[];

    getSiblings(): AntlrRuleWrapper[];

    getTokens(tokenRuleName?: string): AntlrTokenWrapper[];

    getToken(tokenRuleName?: string): AntlrTokenWrapper;

    hasToken(tokenRuleName: string): boolean;

    createRuleError(): AntlrRuleError;

    exists(): boolean;
}
