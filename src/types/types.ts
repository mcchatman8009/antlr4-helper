import {ParserRuleContext} from 'antlr4';

/**
 * The class/constructor of the ParserRuleContext
 */
export type AntlrRuleClass<T extends ParserRuleContext> = new (parent: ParserRuleContext, invokingState: number) => T;
/**
 *  A simple list that represents:
 *
 *  <pre>[{ column: number; line: number }, { column: number; line: number }]</pre>
 *
 *  Where the first object is the start position and the last is the end position
 */
export type AntlrRange = [{ column: number; line: number }, { column: number; line: number }];
