import {ParserRuleContext, Token} from 'antlr4';
import {sortRange} from 'text-manipulation/dist/buffer/utils';
import {createBuffer, MutableTextRange, TextBuffer} from 'text-manipulation';
import {AntlrRange} from '../';
import {AntlrParser} from './antlr-parser';
import * as _ from 'lodash';
import {RuleAndRange} from './rule-and-range';

export class TokenTable {
    tokenTable: Token[][];
    tokenMap: Map<Token, MutableTextRange>;

    constructor(private buffer: TextBuffer, private parser: AntlrParser) {
        this.tokenTable = [];
        this.tokenMap = new Map<Token, MutableTextRange>();
    }

    getTokenAt(column: number, line: number): Token | undefined {
        if (this.tokenTable[line]) {
            return this.tokenTable[line][column];
        }

        return undefined;
    }

    addToken(token: Token) {
        const range = sortRange(this.parser.getTokenRange(token));
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

            if (this.tokenTable[i] === undefined) {
                this.tokenTable[i] = [];
            }

            for (let j = startCol; j < endCol; j++) {
                this.tokenTable[i][j] = token;
                this.tokenMap.set(token, new MutableTextRange(this.parser.getTokenRange(token), this.buffer));
            }
        }
    }

    updateToken(originalRange: AntlrRange, token: Token, ruleText: string) {
        const removedPosition = this.clearRange(originalRange);

        let lastChangedLine = removedPosition.line;
        const lastChangedCol = removedPosition.column;

        if (this.tokenTable[lastChangedLine] === undefined) {
            while (!this.tokenTable[lastChangedLine] === undefined && lastChangedLine > 0) {
                lastChangedLine--;
            }

            if (this.tokenTable[lastChangedLine] !== undefined) {
                this.tokenTable.push([]);
                lastChangedLine++;
            } else {
                // If text is empty
                this.tokenTable[lastChangedLine] = [];
            }
        }

        this.insertToken(lastChangedCol, lastChangedLine, ruleText, token);
        this.recomputeRanges();
    }

    private clearRange(range: AntlrRange) {
        range = sortRange([range[0], range[1]]);

        const start = range[0];
        const end = range[1];
        const line = start.line;

        let startCol = start.column;
        let prefixTokens: Token[] = [];

        for (let i = start.line; i <= end.line; i++) {

            if (i > start.line) {
                //
                // Remove the previous line if empty, as we continue further in the range
                //
                if (this.tokenTable[line].length === 0) {
                    this.tokenTable.splice(line, 1);
                }
            }

            const colEnd = (i === end.line) ? end.column : this.tokenTable[line].length;

            for (let col = startCol; col < colEnd; col++) {
                this.tokenTable[line].splice(startCol, 1);
            }

            if (this.tokenTable[line].length !== 0) {
                if (i !== end.line) {
                    prefixTokens = this.tokenTable[line];
                    this.tokenTable.splice(line, 1);
                    startCol = 0;
                } else {
                    this.tokenTable[line] = prefixTokens.concat(this.tokenTable[line]);
                }
            }
        }

        return {line: line, column: (prefixTokens.length > 0) ? prefixTokens.length : startCol};
    }

    private insertToken(column: number, line: number, currentRuleText: string, token: Token) {
        const buffer = createBuffer(currentRuleText);

        if (buffer.getLineCount() > 1) {
            //
            // Case 2: We're given a rule with multiple lines
            //
            const n = buffer.getLineCount();

            for (let i = 0; i < n; i++) {
                const numOfColumns = buffer.getColumnCount(i);
                const tokens = _.times(numOfColumns).map(() => token);

                if (this.tokenTable[line] === undefined) {
                    this.tokenTable[line] = [];
                }

                if (i === (n - 1)) {
                    //
                    // Insert new rules up and before the endRange column.
                    // This is in case there are rules that must be merged
                    // onto an existing line.
                    //
                    for (let j = 0; j < numOfColumns; j++) {
                        this.tokenTable[line].splice(column + j, 0, tokens[j]);
                    }
                } else {
                    if (i === 0) {
                        //
                        // If the rule's first line merges with an existing line,
                        // merge the new rules with the exising line.
                        //
                        const previousTokensOnLine = [];

                        for (let j = 0; j < column; j++) {
                            previousTokensOnLine.push(this.tokenTable[i][j]);
                            this.tokenTable[line].splice(0, 1);
                        }

                        this.tokenTable.splice(line++, 0, previousTokensOnLine.concat(tokens));
                    } else {
                        // Insert new line of rules
                        this.tokenTable.splice(line++, 0, tokens);
                    }
                }
            }
        } else {
            //
            // Case 1: This rule only ranges on a single line
            //
            if (!this.tokenTable[line]) {
                this.tokenTable = [];
            }

            for (let i = 0; i < buffer.getColumnCount(0); i++) {
                // Insert at starting range column
                this.tokenTable[line].splice(column + i, 0, token);
            }
        }

    }

    private recomputeRanges() {
        let startCol = 0;
        let startLine = 0;

        let currentToken: Token;
        const numOfLines = this.tokenTable.length;

        for (let line = 0; line < numOfLines; line++) {
            const numOfColumns = this.tokenTable[line].length;

            for (let col = 0; col <= numOfColumns; col++) {
                const token = this.tokenTable[line][col];

                if (currentToken === undefined && token) {
                    currentToken = token;
                    startCol = col;
                    startLine = line;
                }
                if (currentToken !== token) {
                    if (token === undefined && col === numOfColumns) {
                        if (line !== (numOfLines - 1)) {
                            continue;
                        }
                    }

                    const range = new MutableTextRange([{column: startCol, line: startLine}, {
                        column: col,
                        line: line
                    }], this.buffer);

                    this.tokenMap.set(currentToken, range);

                    // Start new range
                    startCol = col;
                    startLine = line;
                    currentToken = token;
                }
            }
        }
    }
}
