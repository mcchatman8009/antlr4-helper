import {ParserRuleContext, Recognizer, Token} from 'antlr4';
import {sortRange} from 'text-manipulation/dist/buffer/utils';
import * as _ from 'lodash';
import {ErrorListener, RecognitionException} from 'antlr4/error';
import {TextBuffer} from 'text-manipulation';
import {AntlrRuleError} from './antlr-rule-error';
import {RuleTable} from './rule-table';
import {AntlrRange} from '../';
import {AntlrParser} from './antlr-parser';
import {ImmutableAntlrRuleWrapper} from './immutable-antlr-rule-wrapper';

const max = Math.max;

export class ErrorRuleHandler extends ErrorListener {
    private errors: Map<ParserRuleContext, AntlrRuleError>;
    private ruleTable: RuleTable;

    constructor(private parser: AntlrParser, private buffer: TextBuffer) {
        super();
        this.ruleTable = new RuleTable(buffer, this.parser);
        this.errors = new Map<ParserRuleContext, AntlrRuleError>();
    }

    getErrors(): AntlrRuleError[] {
        return Array.from(this.errors.values());
    }

    getErrorRuleTable(): ParserRuleContext[][] {
        return this.ruleTable.ruleTable;
    }

    processRuleWithError(rule: ParserRuleContext) {
        const range = this.getRuleRangeSafely(rule);
        if (this.cmp(range[0], range[1]) === 0) {
            range[1] = this.nextColumn(range[1]);
        }

        const width = this.buffer.getColumnCount(range[0].line);

        if (range[1].column > width) {
            range[0] = this.previousColumn(range[0]);
        }

        const error = this.buildError(rule, range);

        this.addError(error);
    }

    getErrorRuleAt(column: number, line: number): ParserRuleContext {
        return this.ruleTable.getRuleAt(column, line);
    }

    addError(error: AntlrRuleError) {
        this.errors.set(error.rule, error);
        this.ruleTable.addRule(error.rule, this.getRuleRangeSafely(error.rule));
    }

    /**
     * (Internal use only)
     *
     * @param {Recognizer} recognizer
     * @param {Token} offendingSymbol
     * @param {number} line
     * @param {number} column
     * @param {string} msg
     * @param e
     */
    syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any): void {
        if (e instanceof RecognitionException) {
            //
            // If we have a known exception let's process it
            //
            this.processRecognitionException(e);
        } else {
            //
            // If we don't have a clear syntax exception then we
            // should build a basic error, using only the recognizer.
            //
            const rule = (<any>recognizer)._ctx;
            const error = this.buildError(rule, this.getRuleRangeSafely(rule));

            error.message = msg;
            error.exception = e;

            this.addError(error);
        }
    }


    private processRecognitionException(e: RecognitionException): void {
        if (!_.isNil(e) && !_.isNil(e.ctx)) {
            //
            // Process the exception as long as it has a rule context
            //
            const rule = e.ctx;
            this.processRuleWithFailures(rule);
        }
    }

    /**
     * Process all the rule along with all it's children.
     * This method's goal is primarily to add the rule into the ruleTable
     * @param {ParserRuleContext} rule
     */
    private processRuleWithFailures(rule: ParserRuleContext) {
        this.processRuleWithError(rule);

        const n = rule.getChildCount();

        for (let i = 0; i < n; i++) {
            const child = rule.getChild(i);
            // Recurse on child
            if (child instanceof ParserRuleContext) {
                this.processRuleWithFailures(child);
            }
        }
    }

    private buildError(rule: ParserRuleContext, range: AntlrRange): AntlrRuleError {
        const error = new AntlrRuleError();

        error.start = range[0];
        error.end = range[1];
        error.rule = rule;
        error.ruleWrapper = new ImmutableAntlrRuleWrapper(rule, this.parser);
        error.exception = rule.exception;
        error.message = `Error matching the ${this.parser.getRuleName(rule)} rule`;


        return error;
    }

    private nextColumn(position: { column: number; line: number }): { column: number; line: number } {
        return {column: position.column + 1, line: position.line};
    }

    private previousColumn(position: { column: number; line: number }): { column: number; line: number } {
        return {column: Math.max(position.column - 1, 0), line: position.line};
    }

    private getRuleRangeSafely(rule: ParserRuleContext): [{ column: number; line: number }, { column: number; line: number }] {
        if (rule && rule.start && rule.stop) {
            // Return a correct rule
            const from = {column: rule.start.column, line: rule.start.line - 1};
            const len = max((rule.stop.text.length), 0);
            const to = {column: rule.stop.column + len, line: rule.stop.line - 1};

            return sortRange([from, to]);
        } else if (rule.start) {
            let from, to;
            const token = rule.start;

            const sibling = this.parser.getRuleBefore(rule);

            if (sibling) {
                const start = (sibling.stop) ? sibling.stop : sibling.start;
                from = {column: start.column + start.text.length, line: start.line - 1};
                to = {column: token.column, line: token.line - 1};

            } else if (rule.exception) {
                const offendingToken = rule.exception.offendingToken;
                from = {column: max(token.column - 1, 0), line: token.line - 1};
                to = {column: offendingToken.column + offendingToken.text.length, line: offendingToken.line - 1};
            } else {
                from = {column: max(token.column - 1, 0), line: token.line - 1};
                to = {column: token.column + token.text.length, line: token.line - 1};
            }

            return sortRange([from, to]);
        } else {
            const pos = {column: 0, line: 0};
            return [pos, pos];
        }
    }

    private cmp(a: { column: number; line: number }, b: { column: number; line: number }): number {
        return (a.line - b.line) || (a.column - b.column);
    }
}

