import {ParserRuleContext} from 'antlr4';
import {AntlrParser} from './antlr-parser';
import {AntlrRange} from '../';

export interface AntlrRuleWrapper {
    getRule(): ParserRuleContext;

    getName(): string;

    getText(): string;

    getRange(): AntlrRange;

    getParent(): AntlrRuleWrapper;

    getSiblings(): AntlrRuleWrapper[];
}
