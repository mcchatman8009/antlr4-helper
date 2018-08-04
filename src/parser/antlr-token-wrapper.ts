import {Token} from 'antlr4';
import {AntlrRange} from '../';

export interface AntlrTokenWrapper {
    /**
     * The raw Antlr Token Object
     * @returns {Token}
     */
    getToken(): Token;

    /**
     * The rule name, as you would see it in a Antlr Grammar
     * @returns {string}
     */
    getName(): string;

    /**
     * The complete text of the Token
     * @returns {string}
     */
    getText(): string;

    /**
     * Change the text of the token
     *
     * @param {string} text
     */
    setText(text: string): void;

    /**
     * The text range of the token
     * @returns {AntlrRange}
     */
    getRange(): AntlrRange;
}
