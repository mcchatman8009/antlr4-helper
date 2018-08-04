import {AntlrFactory} from '../factory/antlr-factory';
import {ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';
import {createBuffer, MutableTextRange, TextBuffer} from 'text-manipulation';
import {AntlrParser} from './antlr-parser';
import {AntlrRange, AntlrRuleClass} from '../';
import {RuleTable} from './rule-table';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';
import {MutableAntlrRuleWrapper} from './mutable-antlr-rule-wrapper';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {AntlrRuleError} from './antlr-rule-error';
import {TokenTable} from './token-table';
import {FunctionalRuleParser} from './functional-rule-parser';

/**
 * The MutableAntlrParser allows for text manipulation at the rule and token level.
 * Once the parse is complete the {@link getText} method enables one to see the complete
 * text of all the changes.
 *
 * <br/>
 * @example
 * <br/>
 *
 * <code>
 * <pre>
 *  ...
 * const parser = antlrHelper.createParser(factory);
 * ...
 * parser.addExitRuleListener(ExpressionContext, (rule)=>{
 *     parser.setRuleText(rule, 'replaced expression');
 *     console.log(parser.getRuleText(rule));
 * });
 *
 * parser.parse(text);
 *
 * console.log(parser.getText());
 *
 * </pre>
 * </code>
 *
 * @class MutableAntlrParser
 */
export class MutableAntlrParser implements AntlrParser {
    private textBuffer: TextBuffer;
    private changedRuleMap: Map<ParserRuleContext, MutableTextRange>;
    private changedTokenMap: Map<Token, MutableTextRange>;
    private ruleTable: RuleTable;
    private tokenTable: TokenTable;
    private functionalRuleParser: FunctionalRuleParser;

    /**
     * Provide an AntlrFactory to construct
     * @param {AntlrFactory | AntlrParser} parser
     */
    constructor(private parser: AntlrParser) {
        this.changedRuleMap = new Map<ParserRuleContext, MutableTextRange>();
        this.changedTokenMap = new Map<Token, MutableTextRange>();

        this.parser.addExitRuleListener(null, (rule) => {
            this.ruleTable.addRule(rule, this.parser.getRuleRange(rule));
        });

        this.parser.addTokenListener((token) => {
            this.tokenTable.addToken(token, this.parser.getTokenRange(token));
        });
    }


    /**
     * Parse the input string
     * (The internal text model is changed on each parse)
     *
     * @param {string} input
     * @returns {ParserRuleContext} - the invoked root rule
     */
    parse(input: string): ParserRuleContext {
        // clear rule & token change maps
        this.changedRuleMap.clear();
        this.changedTokenMap.clear();
        this.functionalRuleParser = new FunctionalRuleParser(this);

        this.textBuffer = createBuffer(input);
        this.ruleTable = new RuleTable(this.textBuffer);
        this.tokenTable = new TokenTable(this.textBuffer);

        return this.parser.parse(input);
    }

    /**
     * Change the text of the token
     *
     * @param {Token | TerminalNode} token
     * @param {string} text
     */
    setTokenText(token: Token, text: string) {
        let range = new MutableTextRange(this.getTokenRange(token), this.textBuffer);

        if (this.changedTokenMap.has(token)) {
            range = this.changedTokenMap.get(token);
        }

        const originalRange = [range.start, range.end];

        range.setText(text);

        this.tokenTable.updateToken(originalRange as any, [range.start, range.end], token);

        this.changedTokenMap.set(token, range);
    }

    /**
     * Get the range of a given token, where the first object
     * is the start position and the last is the end position
     *
     * @param {Token} token
     *
     * @returns {AntlrRange}
     */
    getTokenRange(token: Token): AntlrRange {
        if (this.changedTokenMap.has(token)) {
            const range = this.changedTokenMap.get(token);
            return [range.start, range.end];
        }

        return this.parser.getTokenRange(token);
    }

    /**
     * Get the text of a given token
     *
     * @param {Token} token
     * @returns {string}
     */
    getTokenText(token: Token): string {
        let range = new MutableTextRange(this.getTokenRange(token), this.textBuffer);

        if (this.changedTokenMap.has(token)) {
            range = this.changedTokenMap.get(token);
        }

        return range.getText();
    }

    /**
     * Get the text of the completely parsed rule
     *
     * @param {ParserRuleContext} rule
     * @returns {string}
     */
    getRuleText(rule: ParserRuleContext): string {
        let range = new MutableTextRange(this.parser.getRuleRange(rule), this.textBuffer);

        if (this.changedRuleMap.has(rule)) {
            range = this.changedRuleMap.get(rule);
        }

        return range.getText();
    }

    /**
     * Change the text of the completely parsed rule
     *
     * @param {ParserRuleContext} rule
     * @param {string} text
     */
    setRuleText(rule: ParserRuleContext, text: string) {
        let range = new MutableTextRange(this.parser.getRuleRange(rule), this.textBuffer);

        if (this.changedRuleMap.has(rule)) {
            range = this.changedRuleMap.get(rule);
        }

        const originalRange = [range.start, range.end];

        range.setText(text);

        this.changedRuleMap.set(rule, range);
        this.ruleTable.updateRule(originalRange as any, [range.start, range.end], rule);
    }

    getRuleAt(column: number, line: number): AntlrRuleWrapper {
        const rule = this.ruleTable.getRuleAt(column, line);

        if (rule) {
            return new MutableAntlrRuleWrapper(rule, this);
        }

        return undefined;
    }

    getRulePositionTable(): ParserRuleContext[][] {
        return this.ruleTable.ruleTable;
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
     * });
     * </code>
     * </pre>
     *
     * @param {AntlrRuleClass<ParserRuleContext>} ruleClass
     * @param {(rule: T) => void} listener
     */
    addEnterRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, listener: (rule: T) => void) {
        this.parser.addEnterRuleListener(ruleClass, listener);
    }

    /**
     * Add a listener for when the parser exits a given rule.
     * Within this listener is where you would typically call methods such as
     * {@link setRuleText}, {@link getRuleText} ,{@link setTokenText} and {@link  getTokenText}
     *
     * See example below:
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
     * });
     * </code>
     * </pre>
     *
     * @param {AntlrRuleClass<ParserRuleContext>} ruleClass
     * @param {(rule: T) => void} listener
     */
    addExitRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, listener: (rule: T) => void) {
        this.parser.addExitRuleListener(ruleClass, listener);
    }

    addCustomRuleValidator<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, validator: (rule: T) => (AntlrRuleError | undefined)) {
        this.parser.addCustomRuleValidator(ruleClass, validator);
    }

    addTokenListener(listener: (token: Token) => void): void {
        this.parser.addTokenListener(listener);
    }

    addParserCompleteListener(listener: () => void): void {
        this.parser.addParserCompleteListener(listener);
    }

    getRuleStack(): ReadonlyArray<ParserRuleContext> {
        return this.parser.getRuleStack();
    }

    /**
     * Get the complete parsed and transformed text
     *
     * @returns {string}
     */
    getText(): string {
        return this.textBuffer.getText();
    }

    getLineCount(): number {
        return this.textBuffer.getLineCount();
    }

    getColumnCount(line: number): number {
        return this.textBuffer.getColumnCount(line);
    }

    checkForErrors(): void {
        this.parser.checkForErrors();
    }

    getTokenAt(column: number, line: number): AntlrTokenWrapper | undefined {
        return this.parser.getTokenAt(column, line);
    }

    getRuleRange(rule: ParserRuleContext): AntlrRange {
        if (this.changedRuleMap.has(rule)) {
            const range = this.changedRuleMap.get(rule);
            return [range.start, range.end];
        }

        // Use the unchanged range
        return this.parser.getRuleRange(rule);
    }

    getErrors(): AntlrRuleError[] {
        return this.parser.getErrors();
    }

    getWarnings(): AntlrRuleError[] {
        return this.parser.getWarnings();
    }

    hasErrors(): boolean {
        return this.parser.hasErrors();
    }

    hasWarnings(): boolean {
        return this.parser.hasWarnings();
    }

    getRelevantError(): AntlrRuleError {
        return this.parser.getRelevantError();
    }

    getRuleName(rule: ParserRuleContext): string {
        return this.parser.getRuleName(rule);
    }

    getTokenName(token: Token): string {
        return this.parser.getTokenName(token);
    }

    getRuleParent(rule: ParserRuleContext): ParserRuleContext {
        return this.parser.getRuleParent(rule);
    }

    createRuleError(rule: ParserRuleContext): AntlrRuleError {
        return this.parser.createRuleError(rule);
    }

    hasErrorNode(ctx: ParserRuleContext): boolean {
        return this.parser.hasErrorNode(ctx);
    }

    getSiblings(rule: ParserRuleContext): ParserRuleContext[] {
        return this.parser.getSiblings(rule);
    }

    siblingsHaveNoErrors(rule: ParserRuleContext): boolean {
        return this.parser.siblingsHaveNoErrors(rule);
    }

    getRuleBefore(rule: ParserRuleContext): ParserRuleContext {
        return this.parser.getRuleBefore(rule);
    }

    getLine(line: number): string {
        return this.textBuffer.getLine(line);
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
        return new Set<Token>([]);
    }

    getErrorRuleAt(column: number, line: number): ParserRuleContext {
        return this.parser.getErrorRuleAt(column, line);
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
