import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class JsonContext extends ParserRuleContext {
    
    value(): ValueContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class ObjContext extends ParserRuleContext {
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class PairContext extends ParserRuleContext {
    
    STRING(): TerminalNode;
    
    value(): ValueContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class ArrayContext extends ParserRuleContext {
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class ValueContext extends ParserRuleContext {
    
    STRING(): TerminalNode;
    
    NUMBER(): TerminalNode;
    
    obj(): ObjContext;
    
    array(): ArrayContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}


export declare class JSONParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    json(): JsonContext;

    obj(): ObjContext;

    pair(): PairContext;

    array(): ArrayContext;

    value(): ValueContext;

    reset(): any;

    matchWildcard(): any;

    getParseListeners(): any;

    removeParseListeners(): any;

    triggerEnterRuleEvent(): any;

    triggerExitRuleEvent(): any;

    getTokenFactory(): any;

    getATNWithBypassAlts(): any;

    getInputStream(): any;

    getTokenStream(): any;

    getCurrentToken(): any;

    consume(): any;

    addContextToParseTree(): any;

    exitRule(): any;

    getPrecedence(): any;

    getExpectedTokens(): any;

    getExpectedTokensWithinCurrentRule(): any;

    getDFAStrings(): any;

    dumpDFA(): any;

    getSourceName(): any;

    removeErrorListeners(): any;

    getTokenTypeMap(): any;

    getRuleIndexMap(): any;

    getErrorListenerDispatch(): any;

}
