import {CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';

import {JsonContext} from './JSONParser';

import {ObjContext} from './JSONParser';

import {PairContext} from './JSONParser';

import {ArrayContext} from './JSONParser';

import {ValueContext} from './JSONParser';


export declare class JSONListener implements ParseTreeListener {
    constructor();
    
    jsonEnter(ctx: JsonContext): void;
    
    jsonExit(ctx: JsonContext): void;
    
    objEnter(ctx: ObjContext): void;
    
    objExit(ctx: ObjContext): void;
    
    pairEnter(ctx: PairContext): void;
    
    pairExit(ctx: PairContext): void;
    
    arrayEnter(ctx: ArrayContext): void;
    
    arrayExit(ctx: ArrayContext): void;
    
    valueEnter(ctx: ValueContext): void;
    
    valueExit(ctx: ValueContext): void;
    
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}
