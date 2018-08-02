import {Token} from 'antlr4';
import {sortRange} from 'text-manipulation/dist/buffer/utils';
import {TextBuffer} from 'text-manipulation';
import {AntlrRange} from '../';

export class TokenTable {
    tokenTable: Token[][];

    constructor(private buffer: TextBuffer) {
        this.tokenTable = [];
    }

    getTokenAt(column: number, line: number): Token | undefined {
        return this.tokenTable[line][column];
    }

    addToken(token: Token, range: AntlrRange) {
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

            if (this.tokenTable[i] === undefined) {
                this.tokenTable[i] = [];
            }

            for (let j = startCol; j < endCol; j++) {
                this.tokenTable[i][j] = token;
            }
        }
    }
}
