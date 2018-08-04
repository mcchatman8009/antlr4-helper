import {ParserRuleContext} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';

export interface AntlrRuleWrapper {
    getRule(): ParserRuleContext;

    getName(): string;

    setText(text: string): void;

    getText(): string;

    getRange(): AntlrRange;

    getParent(): AntlrRuleWrapper;

    getChildren(): AntlrRuleWrapper[];

    getSiblings(): AntlrRuleWrapper[];
}
