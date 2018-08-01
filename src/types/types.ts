import {ParserRuleContext} from 'antlr4';

/**
 * The class/constructor of the ParserRuleContext
 */
export type AntlrRuleClass<T extends ParserRuleContext> = new (parent: ParserRuleContext, invokingState: number) => T;
