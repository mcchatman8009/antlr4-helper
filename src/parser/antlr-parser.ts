import {ParserRuleContext, Token} from 'antlr4';
import {AntlrRange, AntlrRuleClass} from '../';
import {TerminalNode} from 'antlr4/tree/Tree';
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

    getRuleStack(): ReadonlyArray<ParserRuleContext>;

    /**
     * throws Error if errors found
     */
    checkForErrors(): void;

    /**
     * Get the range of a given token, where the first object
     * is the start position and the last is the end position
     *
     * @param {Token | TerminalNode} token
     * @returns {AntlrRange}
     */
    getTokenRange(token: (Token | TerminalNode)): AntlrRange;

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
     * @param {Token | TerminalNode} token
     * @returns {string}
     */
    getTokenText(token: (Token | TerminalNode)): string;

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
    getErrorRuleAt(column: number, line: number): ParserRuleContext;

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
    getRulesInLine(line: number): Set<ParserRuleContext>;

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
}
