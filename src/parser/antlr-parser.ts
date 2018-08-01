import {AntlrFactory} from '../factory/antlr-factory';
import {ParserRuleContext, CommonTokenStream, InputStream, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';
import {Subject} from 'rxjs/index';
import {filter} from 'rxjs/operators';
import {AntlrRuleClass} from '../types/types';
import {TextPosition} from 'text-manipulation/dist/buffer/text-position';

export class AntlrParser implements ParseTreeListener {
    private inputStream: InputStream;
    private enterRuleSubject: Subject<ParserRuleContext>;
    private exitRuleSubject: Subject<ParserRuleContext>;

    /**
     * Provide an AntlrFactory to construct
     * @param {AntlrFactory} factory
     */
    constructor(private factory: AntlrFactory) {
        this.enterRuleSubject = new Subject<ParserRuleContext>();
        this.exitRuleSubject = new Subject<ParserRuleContext>();
    }

    /**
     * Parse the input string
     *
     * @param {string} input
     * @returns {ParserRuleContext} - the invoked root rule
     */
    parse(input: string): ParserRuleContext {
        this.inputStream = new InputStream(input);

        const lexer = this.factory.createLexer(this.inputStream);

        const tokenStream = new CommonTokenStream(lexer);

        const parser = this.factory.createParser(tokenStream);
        parser.addParseListener(this);

        const rootRule = this.factory.createAndInvokeRootRule(parser);

        return rootRule;
    }

    /**
     * Get the range of a given token, where the first object
     * is the start position and the last is the end position
     *
     * @param {Token | TerminalNode} token
     * @returns {[{column: number; line: number} , {column: number; line: number}]}
     */
    getTokenRange(token: (Token | TerminalNode)): [{ column: number, line: number }, { column: number, line: number }] {
        let start: TextPosition;
        let stop: TextPosition;

        if (token instanceof TerminalNode) {
            start = {column: token.symbol.column, line: token.symbol.line - 1};
            stop = {column: token.symbol.column + token.symbol.text.length, line: token.symbol.line - 1};

            return [start, stop];
        }

        start = {column: token.column, line: token.line - 1};
        stop = {column: token.column + token.text.length, line: token.line - 1};

        return [start, stop];
    }

    /**
     * Get the text of a given token
     *
     * @param {Token | TerminalNode} token
     * @returns {string}
     */
    getTokenText(token: (Token | TerminalNode)): string {
        if (token instanceof TerminalNode) {
            return token.symbol.text;
        }

        return token.text;
    }

    /**
     * Get the complete text of a completely parsed rule
     *
     * @param {ParserRuleContext} rule
     * @returns {string}
     */
    getRuleText(rule: ParserRuleContext): string {
        const start = rule.start.start;
        const stop = rule.stop.stop;

        return this.inputStream.getText(start, stop);
    }

    visitTerminal(node: TerminalNode): void {
    }

    visitErrorNode(node: ErrorNode): void {

    }

    enterEveryRule(ctx: ParserRuleContext): void {
        this.enterRuleSubject.next(ctx);
    }

    exitEveryRule(ctx: ParserRuleContext): void {
        this.exitRuleSubject.next(ctx);
    }

    /**
     * Get the range of a given rule, where the first object
     * is the start position and the last is the end position
     *
     * @param {ParserRuleContext} rule
     * @returns {[{column: number; line: number} , {column: number; line: number}]}
     */
    getRuleRange(rule: ParserRuleContext): [{ column: number, line: number }, { column: number, line: number }] {
        const start = {column: rule.start.column, line: rule.start.line - 1};
        const end = {column: rule.stop.column + rule.stop.text.length, line: rule.stop.line - 1};

        return [start, end];
    }

    /**
     * Checks if a rule matches the ruleClass given
     *
     * @param {ParserRuleContext} rule
     * @param {AntlrRuleClass<any>} ruleClass
     * @returns {boolean}
     */
    doesRuleMatchClass(rule: ParserRuleContext, ruleClass: AntlrRuleClass<any>): boolean {
        return ruleClass && rule && rule instanceof ParserRuleContext &&
            rule.constructor.name === ruleClass.name;
    }

    /**
     * Add a listener for when the parser enters a given rule. See example below
     *
     * <br/>
     *
     * @example
     * <br/>
     *
     * <pre>
     * <code>
     * parser.addEnterRuleListener(ExpressionContext, (rule)=>{
     *     console.log("entering an expression rule");
     * })
     * </code>
     * </pre>
     *
     * @param {AntlrRuleClass<ParserRuleContext>} ruleClass
     * @param {(rule: T) => void} listener
     */
    addEnterRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, listener: (rule: T) => void) {
        this.enterRuleSubject.asObservable()
            .pipe(filter(rule => this.doesRuleMatchClass(rule, ruleClass)))
            .subscribe(listener);
    }

    /**
     * Add a listener for when the parser exits a given rule. See example below
     *
     * <br/>
     *
     * @example
     * <br/>
     *
     * <pre>
     * <code>
     * parser.addExitRuleListener(ExpressionContext, (rule)=>{
     *     console.log(parser.getRuleText(rule));
     * })
     * </code>
     * </pre>
     *
     * @param {AntlrRuleClass<ParserRuleContext>} ruleClass
     * @param {(rule: T) => void} listener
     */
    addExitRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, listener: (rule: T) => void) {
        this.exitRuleSubject.asObservable()
            .pipe(filter(rule => this.doesRuleMatchClass(rule, ruleClass)))
            .subscribe(listener);
    }
}
