import {AntlrFactory} from '../factory/antlr-factory';
import {ParserRuleContext, CommonTokenStream, InputStream, Token, Recognizer} from 'antlr4';
import {ErrorNode, ErrorNodeImpl, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';
import {Subject} from 'rxjs/index';
import {filter} from 'rxjs/operators';
import {AntlrRuleClass} from '../types/types';
import {TextPosition} from 'text-manipulation/dist/buffer/text-position';
import * as _ from 'lodash';
import {AntlrParserWrapper} from './antlr-parser-wrapper';
import {RuleTable} from './rule-table';
import {createBuffer, TextBuffer} from 'text-manipulation';
import {ErrorRuleHandler} from './error-rule-handler';
import {AntlrRuleError} from './antlr-rule-error';
import {LexErrorHandler} from './lex-error-handler';
import {AntlrRange} from '../';
import {TokenTable} from './token-table';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {AntlrParser} from './antlr-parser';
import {ImmutableAntlrTokenWrapper} from './immutable-antlr-token-wrapper';
import {ImmutableAntlrRuleWrapper} from './immutable-antlr-rule-wrapper';
import {FunctionalRuleParser} from './functional-rule-parser';

export class ImmutableAntlrParser implements ParseTreeListener, AntlrParser {

    private inputStream: InputStream;
    private tokenSubject: Subject<Token>;
    private enterRuleSubject: Subject<ParserRuleContext>;
    private exitRuleSubject: Subject<ParserRuleContext>;
    private parseCompleteSubject: Subject<void>;
    private customValidatorSubject: Subject<ParserRuleContext>;
    private parserWrapper: AntlrParserWrapper;
    private ruleTable: RuleTable;
    private tokenTable: TokenTable;
    private errorHandler: ErrorRuleHandler;
    private textBuffer: TextBuffer;
    private stack: ParserRuleContext[];
    private functionalRuleParser: FunctionalRuleParser;


    /**
     * Provide an AntlrFactory to construct
     * @param {AntlrFactory} factory
     */
    constructor(private factory: AntlrFactory) {
        this.tokenSubject = new Subject<Token>();
        this.enterRuleSubject = new Subject<ParserRuleContext>();
        this.exitRuleSubject = new Subject<ParserRuleContext>();
        this.customValidatorSubject = new Subject<ParserRuleContext>();
        this.parseCompleteSubject = new Subject<void>();

    }

    /**
     * Parse the input string
     *
     * @param {string} input
     * @returns {ParserRuleContext} - the invoked root rule
     */
    parse(input: string): ParserRuleContext {
        this.stack = [];
        this.functionalRuleParser = new FunctionalRuleParser(this);
        this.inputStream = new InputStream(input);
        this.textBuffer = createBuffer(input);
        this.errorHandler = new ErrorRuleHandler(this, this.textBuffer);
        this.ruleTable = new RuleTable(this.textBuffer);
        this.tokenTable = new TokenTable(this.textBuffer);

        const lexer = this.factory.createLexer(this.inputStream);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new LexErrorHandler(this.errorHandler));

        const tokenStream = new CommonTokenStream(lexer);

        const parser = this.factory.createParser(tokenStream);
        parser.removeErrorListeners();
        parser.addErrorListener(this.errorHandler);

        this.parserWrapper = new AntlrParserWrapper(parser);

        parser.addParseListener(this);

        const rootRule = this.factory.createAndInvokeRootRule(parser);
        this.parseCompleteSubject.next(null);

        return rootRule;
    }

    getLineCount(): number {
        return this.textBuffer.getLineCount();
    }

    getColumnCount(line: number): number {
        return this.textBuffer.getColumnCount(line);
    }

    checkForErrors() {
        if (this.hasErrors()) {
            throw new SyntaxError(this.getRelevantError().message);
        }
    }

    /**
     * Get the range of a given token, where the first object
     * is the start position and the last is the end position
     *
     * @param {Token | TerminalNode} token
     * @returns {AntlrRange}
     */
    getTokenRange(token: (Token | TerminalNode)): AntlrRange {
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
     * Retrieve a token a the specified position
     *
     * @param {number} column
     * @param {number} line
     * @returns {Token}
     */
    getTokenAt(column: number, line: number): AntlrTokenWrapper | undefined {
        const token = this.tokenTable.getTokenAt(column, line);

        if (token) {
            return new ImmutableAntlrTokenWrapper(token, this);
        }

        return undefined;
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

    /**
     * Get the range of a given rule, where the first object
     * is the start position and the last is the end position
     *
     * @param {ParserRuleContext} rule
     * @returns {AntlrRange}
     */
    getRuleRange(rule: ParserRuleContext): AntlrRange {
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

    addParserCompleteListener(listener: () => void): void {
        this.parseCompleteSubject.asObservable().subscribe(listener);
    }

    addEnterRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, listener: (rule: T) => void) {
        if (ruleClass) {
            this.enterRuleSubject.asObservable()
                .pipe(filter(rule => this.doesRuleMatchClass(rule, ruleClass)))
                .subscribe(listener);
        } else {
            this.enterRuleSubject.asObservable().subscribe(listener);
        }
    }

    addExitRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, listener: (rule: T) => void) {
        if (ruleClass) {
            this.exitRuleSubject.asObservable()
                .pipe(filter(rule => this.doesRuleMatchClass(rule, ruleClass)))
                .subscribe(listener);
        } else {
            this.exitRuleSubject.asObservable().subscribe(listener);
        }
    }

    addTokenListener(listener: (token: Token) => void) {
        this.tokenSubject.asObservable().subscribe(listener);

    }

    addCustomRuleValidator<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, validator: (rule: T) => AntlrRuleError | undefined) {
        this.customValidatorSubject.asObservable()
            .pipe(filter(rule => this.doesRuleMatchClass(rule, ruleClass)))
            .subscribe((rule) => {
                const error = validator(rule as any);

                if (!_.isNil(error)) {
                    this.errorHandler.addError(error);
                }
            });
    }

    getRulesInLine(line: number): Set<ParserRuleContext> {
        const table = this.getRulePositionTable();

        if (table[line]) {
            const set = table[line].map((rule) => rule).filter((rule) => rule !== undefined);
            return new Set<ParserRuleContext>(set);
        }

        return new Set<ParserRuleContext>([]);
    }

    getTokensInLine(line: number): Set<Token> {
        const table = this.getTokenPositionTable();

        if (table[line]) {
            const set = table[line].map((token) => token).filter((token) => token !== undefined);
            return new Set<Token>(set);
        }

        return new Set<Token>([]);
    }

    getLine(line: number): string {
        return this.textBuffer.getLine(line);
    }

    getSiblings(rule: ParserRuleContext): ParserRuleContext[] {
        const parent = rule.parentCtx;
        const children: ParserRuleContext[] = [];

        if (parent && parent.getChildCount() > 0) {
            for (let i = 0; i < parent.getChildCount(); i++) {
                const child = parent.getChild(i);
                if (rule !== child && child instanceof ParserRuleContext) {
                    children.push(child);
                }
            }
        }

        return children;
    }

    getRuleBefore(rule: ParserRuleContext): ParserRuleContext {
        const siblings = this.getSiblings(rule);

        if (siblings.length > 0) {
            return siblings[0];
        }

        return undefined;
    }

    siblingsHaveNoErrors(rule: ParserRuleContext): boolean {
        const siblings = this.getSiblings(rule);

        for (const sibling of siblings) {
            if (sibling.exception || this.hasErrorNode(sibling)) {
                return false;
            }

        }

        return true;
    }

    hasErrorNode(ctx: ParserRuleContext): boolean {
        const n = ctx.getChildCount();
        for (let i = 0; i < n; i++) {
            const child = ctx.getChild(i);

            if (child instanceof ErrorNodeImpl) {
                return true;
            }
        }

        return false;
    }

    getRuleStack(): ReadonlyArray<ParserRuleContext> {
        return this.stack;
    }

    getText(): string {
        return this.textBuffer.getText();
    }

    getErrors(): AntlrRuleError[] {
        return this.errorHandler.getErrors().filter((err) => err.severity === 'error');
    }

    getWarnings(): AntlrRuleError[] {
        return this.errorHandler.getErrors().filter((err) => err.severity === 'warning');
    }

    getTokenPositionTable(): Token[][] {
        return this.tokenTable.tokenTable;
    }

    getRulePositionTable(): ParserRuleContext[][] {
        return this.ruleTable.ruleTable;
    }

    getErrorRuleAt(column: number, line: number): ParserRuleContext {
        return this.errorHandler.getErrorRuleAt(column, line);
    }

    getErrorRuleTable(): ParserRuleContext[][] {
        return this.errorHandler.getErrorRuleTable();
    }

    hasErrors(): boolean {
        return this.getErrors().length > 0;
    }

    hasWarnings(): boolean {
        return this.getWarnings().length > 0;
    }

    getRelevantError(): AntlrRuleError {
        if (this.hasErrors()) {
            return _.last(this.getErrors());
        }
    }

    createRuleError(rule: ParserRuleContext): AntlrRuleError {
        const range = this.getRuleRange(rule);
        const error = new AntlrRuleError();

        error.rule = rule;
        error.start = range[0];
        error.end = range[1];
        error.message = `Error matching the ${this.getRuleName(rule)} rule`;

        return error;
    }

    getRuleAt(column: number, line: number): AntlrRuleWrapper | undefined {
        const rule = this.ruleTable.getRuleAt(column, line);

        if (rule) {
            return new ImmutableAntlrRuleWrapper(rule, this);
        }

        return undefined;
    }

    getRuleName(rule: ParserRuleContext): string {
        return this.parserWrapper.ruleIndexToNameMap.get(rule.ruleIndex);
    }

    getTokenName(token: Token): string {
        return this.parserWrapper.tokenTypeToSymoblMap.get(token.type);
    }

    getRuleParent(rule: ParserRuleContext): ParserRuleContext {
        if (rule) {
            return rule.parentCtx;
        }

        return undefined;
    }

    /**
     * (For internal use only)
     *
     * @param {TerminalNode} node
     */
    visitTerminal(node: TerminalNode): void {
        this.tokenTable.addToken(node.symbol, this.getTokenRange(node.symbol));
        this.tokenSubject.next(node.symbol);
    }

    /**
     * (For internal use only)
     * @param {ErrorNode} node
     */
    visitErrorNode(node: ErrorNode): void {

    }

    /**
     * (For internal use only)
     *
     * @param {ParserRuleContext} ctx
     */
    enterEveryRule(ctx: ParserRuleContext): void {
        this.stack.push(ctx);
        this.enterRuleSubject.next(ctx);
    }

    /**
     * (For internal use only)
     *
     * @param {ParserRuleContext} ctx
     */
    exitEveryRule(ctx: ParserRuleContext): void {
        if (this.hasErrorNode(ctx) && this.siblingsHaveNoErrors(ctx)) {
            this.errorHandler.processRuleWithError(ctx);
        } else if (this.getErrors().length === 0) {
            if (ctx.stop && ctx.start) {
                this.customValidatorSubject.next(ctx);

                if (this.getErrors().length === 0) {
                    this.ruleTable.addRule(ctx, this.getRuleRange(ctx));
                    this.exitRuleSubject.next(ctx);
                }
            }
            // this.errorHandler.processRecognitionException(ctx.exception);
        }
    }

    setTokenText(token: Token, text: string) {
        throw new Error('Cannot set token text on ImmutableAntlrParser');
    }

    setRuleText(rule: ParserRuleContext, text: string) {
        throw new Error('Cannot set rule text on ImmutableAntlrParser');
    }

    filter(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrParser {
        this.functionalRuleParser.filter(filterFunction);
        return this;
    }

    forEach<T>(eachFunction: (rule: AntlrRuleWrapper, index: number) => void): void {
        this.functionalRuleParser.forEach(eachFunction);
        this.functionalRuleParser = new FunctionalRuleParser(this);
    }

    map<T>(mapFunction: (rule: AntlrRuleWrapper, index: number) => T): T[] {
        const results = this.functionalRuleParser.map(mapFunction);
        this.functionalRuleParser = new FunctionalRuleParser(this);
        return results;

    }

    reduce<T>(reduceFunction: (acc: T, rule: AntlrRuleWrapper, index: number) => T, accumulator: T): T {
        const results = this.functionalRuleParser.reduce(reduceFunction, accumulator);
        this.functionalRuleParser = new FunctionalRuleParser(this);
        return results;
    }
}
