import {ParserRuleContext} from 'antlr4';

export type AntlrRuleClass<T> = new (parent: ParserRuleContext, invokingState: number) => T;
