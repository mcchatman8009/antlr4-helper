import {ParserRuleContext} from 'antlr4';
import {sortRange} from 'text-manipulation/dist/buffer/utils';
import {MutableTextRange, TextBuffer} from 'text-manipulation';
import {AntlrRange} from '../';
import {AntlrRuleWrapper} from './antlr-rule-wrapper';
import {MutableAntlrRuleWrapper} from './mutable-antlr-rule-wrapper';
import {MutableAntlrParser} from './mutable-antlr-parser';
import {RuleAndRange} from './rule-and-range';

export class RuleTable {
    ruleTable: ParserRuleContext[][];

    constructor(private buffer: TextBuffer) {
        this.ruleTable = [];
    }

    getRuleAt(column: number, line: number): ParserRuleContext | undefined {
        return this.ruleTable[line][column];
    }

    recomputeRanges(): RuleAndRange[] {
        const ruleRanges = [];
        let startCol = 0;
        let startLine = 0;

        let endCol = 0;
        let endLine = 0;
        let currentRule: ParserRuleContext;
        const numOfLines = this.ruleTable.length;

        for (let line = 0; line < numOfLines; line++) {
            const numOfColumns = this.ruleTable[line].length;

            for (let col = 0; col <= numOfColumns; col++) {
                const rule = this.ruleTable[line][col];

                if (currentRule === undefined && rule) {
                    currentRule = rule;
                    startCol = endCol = col;
                    startLine = endLine = line;
                }

                if (currentRule !== rule) {
                    const range = new MutableTextRange([{column: startCol, line: startLine}, {
                        column: endCol + 1,
                        line: endLine
                    }], this.buffer);

                    const ruleAndRange = new RuleAndRange(range, currentRule);
                    ruleRanges.push(ruleAndRange);

                    // Start new range
                    startCol = endCol = col;
                    startLine = endLine = line;
                    currentRule = rule;
                } else {
                    endCol = col;
                    endLine = line;
                }
            }

        }

        return ruleRanges;
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
