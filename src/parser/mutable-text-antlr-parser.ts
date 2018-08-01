import {AntlrFactory} from '../factory/antlr-factory';
import {AntlrRule, CommonTokenStream, InputStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';
import {Subject} from 'rxjs/index';
import {filter} from 'rxjs/operators';
import {createBuffer, createTextRange, MutableTextRange, TextBuffer, TextRange} from 'text-manipulation';
import {AntlrParser} from './antlr-parser';
import {buffer} from 'rxjs/internal/operators';
import {TextPosition} from 'text-manipulation/dist/buffer/text-position';
import {AntlrRuleClass} from '../';

export class MutableTextAntlrParser {
    private parser: AntlrParser;
    private textModel: TextBuffer;

    constructor(factory: AntlrFactory) {
        this.parser = new AntlrParser(factory);
    }

    parse(input: string): AntlrRule {
        this.textModel = createBuffer(input);
        return this.parser.parse(input);
    }

    setTokenText(token: (Token | TerminalNode), text: string) {
        const range = this.getTokenRange(token);
        const mutableRange = new MutableTextRange([range.start, range.end], this.textModel);
        mutableRange.setText(text);
    }

    getTokenRange(token: (Token | TerminalNode)): TextRange {
        return this.parser.getTokenRange(token);
    }

    getTokenText(token: (Token | TerminalNode)): string {
        if (token instanceof TerminalNode) {
            return token.symbol.text;
        }

        return token.text;
    }

    getRuleText(rule: AntlrRule): string {
        return this.parser.getRuleText(rule);
    }

    setRuleText(rule: AntlrRule, text: string) {
        const range = this.parser.ruleToRange(rule);
        const mutableRange = new MutableTextRange([range.start, range.end], this.textModel);
        mutableRange.setText(text);
    }

    addEnterRuleListener<T extends AntlrRule>(ruleClass: AntlrRuleClass<AntlrRule>, listener: (rule: T) => void) {
        this.parser.addEnterRuleListener(ruleClass, listener);
    }

    addExitRuleListener<T extends AntlrRule>(ruleClass: AntlrRuleClass<AntlrRule>, listener: (rule: T) => void) {
        this.parser.addExitRuleListener(ruleClass, listener);
    }

    getText(): string {
        return this.textModel.getText();
    }
}
