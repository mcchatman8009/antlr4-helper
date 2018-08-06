import {ParserRuleContext} from 'antlr4';
import {sortRange} from 'text-manipulation/dist/buffer/utils';
import {createBuffer, MutableTextRange, TextBuffer} from 'text-manipulation';
import {AntlrRange} from '../';
import {RuleAndRange} from './rule-and-range';
import {AntlrParser} from './antlr-parser';
import * as _ from 'lodash';

export class RuleTable {
    ruleTable: ParserRuleContext[][];
    ruleMap: Map<ParserRuleContext, MutableTextRange>;

    constructor(private buffer: TextBuffer, private parser: AntlrParser) {
        this.ruleTable = [];
        this.ruleMap = new Map<ParserRuleContext, MutableTextRange>();
    }

    getRuleAt(column: number, line: number): ParserRuleContext | undefined {
        return this.ruleTable[line][column];
    }

    private recomputeRanges(): RuleAndRange[] {
        const ruleRanges = [];
        let startCol = 0;
        let startLine = 0;

        let currentRule: ParserRuleContext;
        const numOfLines = this.ruleTable.length;

        for (let line = 0; line < numOfLines; line++) {
            const numOfColumns = this.ruleTable[line].length;

            for (let col = 0; col <= numOfColumns; col++) {
                const rule = this.ruleTable[line][col];

                if (currentRule === undefined && rule) {
                    currentRule = rule;
                    startCol = col;
                    startLine = line;
                }

                if (currentRule !== rule) {
                    if (rule === undefined && col === numOfColumns) {
                        if (line !== (numOfLines - 1)) {
                            continue;
                        }
                    }

                    const range = new MutableTextRange([{column: startCol, line: startLine}, {
                        column: col,
                        line: line
                    }], this.buffer);

                    const ruleAndRange = new RuleAndRange(range, currentRule);
                    ruleRanges.push(ruleAndRange);
                    this.ruleMap.set(ruleAndRange.rule, ruleAndRange.range);

                    // Start new range
                    startCol = col;
                    startLine = line;
                    currentRule = rule;
                }
            }

        }

        return ruleRanges;
    }


    updateRule(originalRange: AntlrRange, rule: ParserRuleContext, ruleText: string) {
        const removedPosition = this.removeRange(originalRange);

        let lastChangedLine = removedPosition.line;
        const lastChangedCol = removedPosition.column;

        if (this.ruleTable[lastChangedLine] === undefined) {
            while (!this.ruleTable[lastChangedLine] === undefined && lastChangedLine > 0) {
                lastChangedLine--;
            }

            if (this.ruleTable[lastChangedLine] !== undefined) {
                this.ruleTable.push([]);
                lastChangedLine++;
            } else {
                // If text is empty
                this.ruleTable[lastChangedLine] = [];
            }
        }

        this.insertRule(lastChangedCol, lastChangedLine, ruleText, rule);
        this.recomputeRanges();
    }

    removeRange(range: AntlrRange): { column: number, line: number } {
        range = sortRange([range[0], range[1]]);

        const start = range[0];
        const end = range[1];
        const line = start.line;

        let startCol = start.column;
        let prefixRules: ParserRuleContext[] = [];

        for (let i = start.line; i <= end.line; i++) {
            const colEnd = (i === end.line) ? end.column : this.ruleTable[line].length;

            for (let col = startCol; col < colEnd; col++) {
                this.ruleTable[line].splice(startCol, 1);
            }

            if (this.ruleTable[line].length === 0) {
                const singleLine = i === end.line && i === 0;

                if (!singleLine) {
                    this.ruleTable.splice(line, 1);
                }
            } else {
                if (i !== end.line) {
                    prefixRules = this.ruleTable[line];
                    this.ruleTable.splice(line, 1);
                    startCol = 0;
                } else {
                    this.ruleTable[line] = prefixRules.concat(this.ruleTable[line]);
                }
            }
        }

        return {line: line, column: (prefixRules.length > 0) ? prefixRules.length : startCol};

    }


    addRule(rule: ParserRuleContext, range?: AntlrRange) {
        range = (range === undefined) ? sortRange(this.parser.getRuleRange(rule)) : range;
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
                    const oldVal = this.computeRulePriority(this.ruleTable[i][j]);
                    const newVal = this.computeRulePriority(rule);

                    if (newVal >= oldVal) {
                        this.ruleTable[i][j] = rule;
                        this.addToRuleMap(rule, range);
                    }
                } else {
                    this.ruleTable[i][j] = rule;
                    this.addToRuleMap(rule, range);
                }
            }
        }
    }

    private addToRuleMap(rule: ParserRuleContext, range: AntlrRange) {
        this.ruleMap.set(rule, new MutableTextRange(range, this.buffer));
    }

    computeRulePriority(rule: ParserRuleContext): number {
        return rule.depth() * rule.invokingState;
    }

    private insertRule(column: number, line: number, currentRuleText: string, rule: ParserRuleContext) {
        const buffer = createBuffer(currentRuleText);

        if (buffer.getLineCount() > 1) {
            //
            // Case 2: We're given a rule with multiple lines
            //
            const n = buffer.getLineCount();

            for (let i = 0; i < n; i++) {
                const numOfColumns = buffer.getColumnCount(i);
                const rules = _.times(numOfColumns).map(() => rule);

                //
                // Ensure that the line exists in the ruleTable
                //
                if (this.ruleTable[line] === undefined) {
                    this.ruleTable[line] = [];
                }

                if (i === (n - 1)) {
                    //
                    // Insert new rules up and before the endRange column.
                    // This is in case there are rules that must be merged
                    // onto an existing line.
                    //
                    for (let j = 0; j < numOfColumns; j++) {
                        this.ruleTable[line].splice(column + j, 0, rules[j]);
                    }
                } else {
                    if (i === 0) {
                        //
                        // If the rule's first line merges with an existing line,
                        // merge the new rules with the exising line.
                        //
                        const previousRulesOnLine = [];

                        for (let j = 0; j < column; j++) {
                            previousRulesOnLine.push(this.ruleTable[i][j]);
                            this.ruleTable[line].splice(0, 1);
                        }

                        this.ruleTable.splice(line++, 0, previousRulesOnLine.concat(rules));
                    } else {
                        // Insert new line of rules
                        this.ruleTable.splice(line++, 0, rules);
                    }
                }
            }
        } else {
            //
            // Case 1: This rule only ranges on a single line
            //
            if (!this.ruleTable[0]) {
                this.ruleTable = [];
            }

            for (let i = 0; i < buffer.getColumnCount(0); i++) {
                // Insert at starting range column
                this.ruleTable[0].splice(column + i, 0, rule);
            }
        }

    }
}
