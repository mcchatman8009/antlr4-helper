import {ParserRuleContext, Token} from 'antlr4';
import {AntlrRange, AntlrRuleClass} from '../';
import {AntlrTokenWrapper} from './antlr-token-wrapper';
import {AntlrRuleError} from './antlr-rule-error';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';

export interface AntlrParser {

    /**
     * Parse the input string
     *
     * @param {string} input
     * @returns {ParserRuleContext} - the invoked root rule
     */
    parse(input: string): ParserRuleContext;

    /**
     * Parse using the existing Parser's text.
     * (This is very useful if you've mutated or change
     * the parser's rule or token text)
     *
     * @returns {ParserRuleContext}
     */
    reparse(): ParserRuleContext;

    doesRuleExist(rule: ParserRuleContext): boolean;

    doesTokenExist(token: Token): boolean;

    getRuleStack(): ReadonlyArray<ParserRuleContext>;

    /**
     * throws Error if errors found
     */
    checkForErrors(): void;

    /**
     * Get the range of a given token, where the first object
     * is the start position and the last is the end position
     *
     * @param {Token} token
     * @returns {AntlrRange}
     */
    getTokenRange(token: Token): AntlrRange;

    /**
     * Retrieve a token a the specified position
     *
     * @param {number} column
     * @param {number} line
     * @returns {Token}
     */
    getTokenAt(column: number, line: number): AntlrTokenWrapper | undefined;

    /**
     * Get the text of a given token
     *
     * @param {Token} token
     * @returns {string}
     */
    getTokenText(token: Token): string;

    /**
     * Get the complete text of a completely parsed rule
     *
     * @param {ParserRuleContext} rule
     * @returns {string}
     */
    getRuleText(rule: ParserRuleContext): string;

    /**
     * Get the range of a given rule, where the first object
     * is the start position and the last is the end position
     *
     * @param {ParserRuleContext} rule
     * @returns {AntlrRange}
     */
    getRuleRange(rule: ParserRuleContext): AntlrRange;

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
    addEnterRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext> | null | undefined, listener: (rule: T) => void): void;

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
    addExitRuleListener<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext> | null | undefined, listener: (rule: T) => void): void;

    addParserCompleteListener<T extends ParserRuleContext>(listener: () => void): void;

    /**
     * Adds a custom rule validator. If the validator returns a {@link AntlrRuleError} then it's reported
     * to the parser. If nothing is reported than the validation was a success.
     *
     * @param {AntlrRuleClass<ParserRuleContext>} ruleClass
     * @param {(rule: T) => (AntlrRuleError | undefined)} validator
     */
    addCustomRuleValidator<T extends ParserRuleContext>(ruleClass: AntlrRuleClass<ParserRuleContext>, validator: (rule: T) => AntlrRuleError | undefined): void;

    addValidator(ruleName: string, validator: (rule: AntlrRuleWrapper) => AntlrRuleError | undefined): void;

    onRuleEnter(ruleName: string, callback: (ruleWrapper: AntlrRuleWrapper) => void): void;

    onRuleExit(ruleName: string, callback: (ruleWrapper: AntlrRuleWrapper) => void): void;

    onParseComplete(callback: () => void): void;

    onParseStart(callback: () => void): void;

    addParserStartListener(listener: () => void): void;

    /**
     * Listen and watch for all visited tokens
     *
     * @param {(token: Token) => void} listener
     */
    addTokenListener(listener: (token: Token) => void): void;

    /**
     * All the reported errors found after the a parse occurred
     *
     * @returns {AntlrRuleError[]}
     */
    getErrors(): AntlrRuleError[];

    /**
     * All the reported warnings generated
     *
     * @returns {AntlrRuleError[]}
     */
    getWarnings(): AntlrRuleError[];

    /**
     * Checks if any errors exist
     *
     * @returns {boolean}
     */
    hasErrors(): boolean;

    /**
     * Check if any warnings exist
     *
     * @returns {boolean}
     */
    hasWarnings(): boolean;

    /**
     * Retrieves the most relevant error found in parsing.
     *
     * @returns {AntlrRuleError}
     */
    getRelevantError(): AntlrRuleError;

    /**
     * Get a Rule at a specified position
     *
     * @param {number} column
     * @param {number} line
     * @returns {AntlrRuleWrapper | undefined}
     */
    getRuleAt(column: number, line: number): AntlrRuleWrapper | undefined;

    /**
     * The grammar's name of the rule
     *
     * @param {ParserRuleContext} rule
     * @returns {string}
     */
    getRuleName(rule: ParserRuleContext): string;

    /**
     * The grammar's name of the token
     *
     * @param {Token} token
     * @returns {string}
     */
    getTokenName(token: Token): string;

    /**
     * Gets the parent of a specified rule
     *
     * @param {ParserRuleContext} rule
     * @returns {ParserRuleContext | undefined}
     */
    getRuleParent(rule: ParserRuleContext): ParserRuleContext | undefined;

    /**
     * Create a basic {@link AntlrRuleError}
     *
     * @param {ParserRuleContext} rule
     * @returns {AntlrRuleError}
     */
    createRuleError(rule: ParserRuleContext): AntlrRuleError;

    /**
     * Check if the rule contains any error nodes
     *
     * @param {ParserRuleContext} ctx
     * @returns {boolean}
     */
    hasErrorNode(ctx: ParserRuleContext): boolean;

    /**
     * Get the erroneous rule at the column and line position
     *
     * @param {number} column
     * @param {number} line
     * @returns {ParserRuleContext}
     */
    getErrorRuleAt(column: number, line: number): AntlrRuleWrapper;

    /**
     * Get the siblings for the rule
     *
     * @param {ParserRuleContext} rule
     * @returns {ParserRuleContext[]}
     */
    getSiblings(rule: ParserRuleContext): ParserRuleContext[];

    siblingsHaveNoErrors(rule: ParserRuleContext): boolean;

    /**
     * Get the sibling of the rule before the specified rule, if one exists
     *
     * @param {ParserRuleContext} rule
     * @returns {ParserRuleContext}
     */
    getRuleBefore(rule: ParserRuleContext): ParserRuleContext;


    /**
     * Get the number of lines of the parsed input
     *
     * @returns {number}
     */
    getLineCount(): number;

    /**
     * Get a specific line of the parsed input
     * @param {number} line
     * @returns {string}
     */
    getLine(line: number): string;

    /**
     * Get all the rules in a line
     *
     * @param {number} line
     * @returns {Set<ParserRuleContext>}
     */
    getRulesInLine(line: number): Set<AntlrRuleWrapper>;

    /**
     * Get all the tokens in the line.
     *
     * @param {number} line
     * @returns {Set<Token>}
     */
    getTokensInLine(line: number): Set<Token>;

    /**
     * The number of columns of the parsed input's line
     *
     * @param {number} line
     * @returns {number}
     */
    getColumnCount(line: number): number;

    /**
     * The complete parsed text
     *
     * @returns {string}
     */
    getText(): string;

    /**
     * Determines if a rule or token has been changed, since that last parse.
     *
     * (Useful for the {@link MutableAntlrParser})
     * @returns {boolean}
     */
    hasTextChanged(): boolean;

    /**
     *
     * @param {Token} token
     * @param {string} text
     */
    setTokenText(token: Token, text: string): void;

    /**
     * Set the text of rule
     *
     * @param {ParserRuleContext} rule
     * @param {string} text
     */
    setRuleText(rule: ParserRuleContext, text: string): void;

    /**
     * Filter out rules before calling forEach, map, reduce, or another filter.
     *
     * @param {(rule: AntlrRuleWrapper, index: number) => boolean} filterFunction
     * @returns {AntlrParser}
     */
    filter(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrParser;

    /**
     * Iterate over each rule parsed
     *
     * @param {(rule: AntlrRuleWrapper, index: number) => void} eachFunction
     */
    forEach<T>(eachFunction: (rule: AntlrRuleWrapper, index: number) => void): void;

    /**
     * Transform each rule to a value
     *
     * @param {(rule: AntlrRuleWrapper, index: number) => T} mapFunction
     * @returns {T[]}
     */
    map<T>(mapFunction: (rule: AntlrRuleWrapper, index: number) => T): T[];

    /**
     * Reduces rules to a value which is the accumulated result of running each element
     *
     * @param {(acc: T, rule: AntlrRuleWrapper, index: number) => T} reduceFunction
     * @param {T} accumulator
     * @returns {T}
     */
    reduce<T>(reduceFunction: (acc: T, rule: AntlrRuleWrapper, index: number) => T, accumulator: T): T;

    find(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper;

    findLast(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper;

    findAll(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper[];

    every(predicate: (rule: AntlrRuleWrapper, index: number) => boolean): boolean;

    findRuleByName(ruleName: string): AntlrRuleWrapper;

    findRulesByName(ruleName: string): AntlrRuleWrapper[];

    getAllRules(): AntlrRuleWrapper[];

    getAllTokens(): AntlrTokenWrapper[];

    /**
     * Compare two positions, return 0 if they are the same, a negative
     * number when a is less, and a positive number otherwise.
     *
     * @param {{column: number; line: number}} a
     * @param {{column: number; line: number}} b
     * @returns {number}
     */
    comparePositions(a: { column: number, line: number }, b: { column: number, line: number }): number;

    replaceRange(range: AntlrRange, text: string): AntlrRange;

    getTextRange(range: AntlrRange): string;
}
