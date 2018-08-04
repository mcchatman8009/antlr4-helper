import {ParserRuleContext, Token} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';
import {AntlrTokenWrapper} from './antlr-token-wrapper';

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

    hasToken(tokenRuleName: string): boolean;
}
