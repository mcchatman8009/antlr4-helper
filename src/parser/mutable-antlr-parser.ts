import {AntlrFactory} from '../factory/antlr-factory';
import {ParserRuleContext, Token} from 'antlr4';
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
import {MutableAntlrTokenWrapper} from './mutable-antlr-token-wrapper';

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
    private ruleTable: RuleTable;
    private tokenTable: TokenTable;
    private functionalRuleParser: FunctionalRuleParser;
    private textChanged: boolean;

    /**
     * Provide an AntlrFactory to construct
     * @param {AntlrFactory | AntlrParser} parser
     */
    constructor(private parser: AntlrParser) {
        this.textChanged = false;

        this.parser.addExitRuleListener(null, (rule) => {
            this.ruleTable.addRule(rule);
        });

        this.parser.addTokenListener((token) => {
            this.tokenTable.addToken(token);
        });
    }

    doesRuleExist(rule: ParserRuleContext): boolean {
        return this.ruleTable.ruleMap.has(rule);
    }

    doesTokenExist(token: Token): boolean {
        return this.tokenTable.tokenMap.has(token);
    }

    hasTextChanged(): boolean {
        return this.textChanged;
    }

    reparse(): ParserRuleContext {
        return this.parse(this.getText());
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
        this.functionalRuleParser = new FunctionalRuleParser(this);
        this.textChanged = false;

        this.textBuffer = createBuffer(input);
        this.ruleTable = new RuleTable(this.textBuffer, this);
        this.tokenTable = new TokenTable(this.textBuffer, this);

        return this.parser.parse(input);
    }

    /**
     * Change the text of the token
     *
     * @param {Token} token
     * @param {string} text
     */
    setTokenText(token: Token, text: string) {
        const range = new MutableTextRange(this.getTokenRange(token), this.textBuffer);
        this.textChanged = true;
        const originalRange = [range.start, range.end];

        range.setText(text);

        this.tokenTable.updateToken(originalRange as any, token, text);
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
        const range = this.tokenTable.tokenMap.get(token);
        if (range === undefined) {
            return this.parser.getTokenRange(token);
        }
        return [range.start, range.end];
    }

    /**
     * Get the text of a given token
     *
     * @param {Token} token
     * @returns {string}
     */
    getTokenText(token: Token): string {
        const res = this.tokenTable.tokenMap.get(token);
        return res.getText();
    }

    /**
     * Get the text of the completely parsed rule
     *
     * @param {ParserRuleContext} rule
     * @returns {string}
     */
    getRuleText(rule: ParserRuleContext): string {
        return this.ruleTable.ruleMap.get(rule).getText();
    }

    /**
     * Change the text of the completely parsed rule
     *
     * @param {ParserRuleContext} rule
     * @param {string} text
     */
    setRuleText(rule: ParserRuleContext, text: string) {
        this.textChanged = true;
        const range = this.ruleTable.ruleMap.get(rule);

        const originalRange = [range.start, range.end];
        range.setText(text);

        this.ruleTable.updateRule(originalRange as AntlrRange, rule, text);
        return;
    }

    getRuleAt(column: number, line: number): AntlrRuleWrapper {
        const rule = this.ruleTable.getRuleAt(column, line);

        if (rule) {
            return new MutableAntlrRuleWrapper(rule, this);
        }

        return undefined;
    }

    getTokenPositionTable(): Token[][] {
        return this.tokenTable.tokenTable;
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

    addValidator(ruleName: string, validator: (rule: AntlrRuleWrapper) => AntlrRuleError | undefined): void {
        this.parser.addValidator(ruleName, (wrapper) => {
            return validator(new MutableAntlrRuleWrapper(wrapper.getRule(), this));
        });
    }

    addCustomRuleValidator<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, validator: (rule: T) => (AntlrRuleError | undefined)) {
        this.parser.addCustomRuleValidator(ruleClass, validator);
    }

    onRuleEnter(ruleName: string, callback: (ruleWrapper: AntlrRuleWrapper) => void): void {
        this.parser.onRuleEnter(ruleName, (ruleWrapper) => {
            callback(new MutableAntlrRuleWrapper(ruleWrapper.getRule(), this));
        });
    }

    onRuleExit(ruleName: string, callback: (ruleWrapper: AntlrRuleWrapper) => void): void {
        this.parser.onRuleExit(ruleName, (ruleWrapper) => {
            callback(new MutableAntlrRuleWrapper(ruleWrapper.getRule(), this));
        });
    }

    onParseComplete(callback: () => void): void {
        this.parser.onParseComplete(callback);
    }

    onParseStart(callback: () => void): void {
        this.parser.onParseStart(callback);
    }

    addParserStartListener(listener: () => void): void {
        this.parser.addParserStartListener(listener);
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
        if (this.textBuffer) {
            return this.textBuffer.getText();
        } else {
            return '';
        }
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
        const token = this.parser.getTokenAt(column, line);

        if (token) {
            return new MutableAntlrTokenWrapper(token.getToken(), this);
        }

        return undefined;
    }

    getRuleRange(rule: ParserRuleContext): AntlrRange {
        const range = this.ruleTable.ruleMap.get(rule);
        if (range) {
            return [range.start, range.end];
        } else {
            return this.parser.getRuleRange(rule);
        }
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

    getRulesInLine(line: number): Set<AntlrRuleWrapper> {
        const table = this.getRulePositionTable();

        if (table[line]) {
            const map = new Map<ParserRuleContext, AntlrRuleWrapper>();
            const set = table[line]
                .map((rule) => rule)
                .filter((rule) => rule !== undefined);
            const ruleSet = new Set(set);
            const wrapperSet = Array.from(ruleSet).map((rule) => new MutableAntlrRuleWrapper(rule, this));

            return new Set<AntlrRuleWrapper>(wrapperSet);
        }

        return new Set<AntlrRuleWrapper>([]);
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

    every(predicate: (rule: AntlrRuleWrapper, index: number) => boolean): boolean {
        const results = this.functionalRuleParser.every(predicate);
        this.functionalRuleParser = new FunctionalRuleParser(this);

        return results;
    }

    findLast(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper {
        const results = this.functionalRuleParser.findLast(filterFunction);
        this.functionalRuleParser = new FunctionalRuleParser(this);
        return results;
    }

    find(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper {
        const results = this.functionalRuleParser.find(filterFunction);
        this.functionalRuleParser = new FunctionalRuleParser(this);
        return results;
    }

    findAll(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper[] {
        const results = this.functionalRuleParser.findAll(filterFunction);
        this.functionalRuleParser = new FunctionalRuleParser(this);
        return results;
    }

    findRuleByName(ruleName: string): AntlrRuleWrapper {
        return this.find((rule) => rule.getName() === ruleName);
    }

    findRulesByName(ruleName: string): AntlrRuleWrapper[] {
        return this.findAll((rule) => rule.getName() === ruleName);
    }
}
