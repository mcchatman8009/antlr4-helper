import {ParserRuleContext} from 'antlr4';
import {sortRange} from 'text-manipulation/dist/buffer/utils';
import {TextBuffer} from 'text-manipulation';
import {AntlrRange} from '../';

export class RuleTable {
    ruleTable: ParserRuleContext[][];

    constructor(private buffer: TextBuffer) {
        this.ruleTable = [];
    }

    getRuleAt(column: number, line: number): ParserRuleContext | undefined {
        return this.ruleTable[line][column];
    }

    updateRule(originalRange: AntlrRange, newRange: AntlrRange, rule: ParserRuleContext) {
        this.clearRange(originalRange);

        const range = sortRange(newRange);
        const [start, end] = range;

        const startLine = start.line;
        const endLine = end.line;

        let startCol = start.line;
        let endCol = end.column;

        for (let i = startLine; i <= endLine; i++) {
            if (i === startLine) {
                startCol = start.column;
            } else {
                startCol = 0;
            }

            if (i === endLine) {
                endCol = end.column;
            } else {
                endCol = this.buffer.getColumnCount(i);
            }

            if (this.ruleTable[i] === undefined) {
                this.ruleTable[i] = [];
            }

            for (let j = startCol; j < endCol; j++) {
                if (this.ruleTable[i][j] !== undefined) {
                    this.ruleTable[i].splice(j, 0, rule);
                } else {
                    this.ruleTable[i][j] = rule;
                }
            }
        }

    }

    private clearRange(range: AntlrRange) {
        range = sortRange(range);
        const [start, end] = range;

        const startLine = start.line;
        const endLine = end.line;

        let startCol = start.line;
        let endCol = end.column;

        for (let i = startLine; i <= endLine; i++) {
            if (i === startLine) {
                startCol = start.column;
            } else {
                startCol = 0;
            }

            if (i === endLine) {
                endCol = end.column;
            } else {
                endCol = this.buffer.getColumnCount(i);
            }

            if (this.ruleTable[i] === undefined) {
                this.ruleTable[i] = [];
            }

            for (let j = startCol; j < endCol; j++) {
                this.ruleTable[i].splice(startCol, 1);
            }
        }
    }

    addRule(rule: ParserRuleContext, range: AntlrRange) {
        range = sortRange(range);
        const [start, end] = range;

        const startLine = start.line;
        const endLine = end.line;

        let startCol = start.line;
        let endCol = end.column;

        for (let i = startLine; i <= endLine; i++) {
            if (i === startLine) {
                startCol = start.column;
            } else {
                startCol = 0;
            }

            if (i === endLine) {
                endCol = end.column;
            } else {
                endCol = this.buffer.getColumnCount(i);
            }

            if (this.ruleTable[i] === undefined) {
                this.ruleTable[i] = [];
            }

            for (let j = startCol; j < endCol; j++) {
                if (this.ruleTable[i][j] !== undefined) {
                    const oldVal = this.ruleTable[i][j].depth() * this.ruleTable[i][j].invokingState;
                    const newVal = rule.depth() * rule.invokingState;

                    if (newVal >= oldVal) {
                        this.ruleTable[i][j] = rule;
                    }
                } else {
                    this.ruleTable[i][j] = rule;
                }
            }
        }
    }
}
