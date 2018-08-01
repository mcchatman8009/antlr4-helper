import {AntlrFactory} from '../factory/antlr-factory';
import {ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';
import {createBuffer, MutableTextRange, TextBuffer, TextRange} from 'text-manipulation';
import {AntlrParser} from './antlr-parser';
import {AntlrRuleClass} from '../';

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
 * const parser = new MutableAntlrParser(factory);
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
export class MutableAntlrParser {
    private parser: AntlrParser;
    private textModel: TextBuffer;
    private changedRuleMap: Map<ParserRuleContext, MutableTextRange>;
    private changedTokenMap: Map<Token, MutableTextRange>;

    /**
     * Provide an AntlrFactory to construct
     * @param {AntlrFactory} factory
     */
    constructor(factory: AntlrFactory) {
        this.parser = new AntlrParser(factory);
        this.changedRuleMap = new Map<ParserRuleContext, MutableTextRange>();
        this.changedTokenMap = new Map<Token, MutableTextRange>();
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

        this.textModel = createBuffer(input);

        return this.parser.parse(input);
    }

    /**
     * Change the text of the token
     *
     * @param {Token | TerminalNode} token
     * @param {string} text
     */
    setTokenText(token: Token, text: string) {
        let range = new MutableTextRange(this.getTokenRange(token), this.textModel);

        if (this.changedTokenMap.has(token)) {
            range = this.changedTokenMap.get(token);
        }

        range.setText(text);

        this.changedTokenMap.set(token, range);
    }

    /**
     * Get the range of a given token, where the first object
     * is the start position and the last is the end position
     *
     * @param {Token} token
     *
     * @returns {[{column: number; line: number} , {column: number; line: number}]}
     */
    getTokenRange(token: Token): [{ column: number, line: number }, { column: number, line: number }] {
        return this.parser.getTokenRange(token);
    }

    /**
     * Get the text of a given token
     *
     * @param {Token} token
     * @returns {string}
     */
    getTokenText(token: Token): string {
        let range = new MutableTextRange(this.getTokenRange(token), this.textModel);

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
        let range = new MutableTextRange(this.parser.getRuleRange(rule), this.textModel);

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
        let range = new MutableTextRange(this.parser.getRuleRange(rule), this.textModel);

        if (this.changedRuleMap.has(rule)) {
            range = this.changedRuleMap.get(rule);
        }

        range.setText(text);

        this.changedRuleMap.set(rule, range);
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

    /**
     * Get the complete parsed and transformed text
     *
     * @returns {string}
     */
    getText(): string {
        return this.textModel.getText();
    }
}
