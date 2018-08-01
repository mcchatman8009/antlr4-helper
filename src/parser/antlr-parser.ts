import {AntlrFactory} from '../factory/antlr-factory';
import {AntlrRule, CommonTokenStream, InputStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';
import {Subject} from 'rxjs/index';
import {filter} from 'rxjs/operators';
import {AntlrRuleClass} from '../types/types';
import {createTextRange, TextRange} from 'text-manipulation';
import {TextPosition} from 'text-manipulation/dist/buffer/text-position';

export class AntlrParser implements ParseTreeListener {
    private inputStream: InputStream;
    private enterRuleSubject: Subject<AntlrRule>;
    private exitRuleSubject: Subject<AntlrRule>;

    constructor(private factory: AntlrFactory) {
        this.enterRuleSubject = new Subject<AntlrRule>();
        this.exitRuleSubject = new Subject<AntlrRule>();
    }

    parse(input: string): AntlrRule {
        this.inputStream = new InputStream(input);

        const lexer = this.factory.createLexer(this.inputStream);

        const tokenStream = new CommonTokenStream(lexer);

        const parser = this.factory.createParser(tokenStream);
        parser.addParseListener(this);

        const rootRule = this.factory.createAndInvokeRootRule(parser);

        return rootRule;
    }

    getTokenRange(token: (Token | TerminalNode)): TextRange {
        let start: TextPosition;
        let stop: TextPosition;

        if (token instanceof TerminalNode) {
            start = {column: token.symbol.column, line: token.symbol.line - 1};
            stop = {column: token.symbol.column + token.symbol.text.length, line: token.symbol.line - 1};

            return createTextRange(start, stop);
        }

        start = {column: token.column, line: token.line - 1};
        stop = {column: token.column + token.text.length, line: token.line - 1};

        return createTextRange(start, stop);
    }

    getTokenText(token: (Token | TerminalNode)): string {
        if (token instanceof TerminalNode) {
            return token.symbol.text;
        }

        return token.text;
    }

    getRuleText(rule: AntlrRule): string {
        const start = rule.start.start;
        const stop = rule.stop.stop;

        return this.inputStream.getText(start, stop);
    }

    visitTerminal(node: TerminalNode): void {
    }

    visitErrorNode(node: ErrorNode): void {

    }

    enterEveryRule(ctx: ParserRuleContext): void {
        this.enterRuleSubject.next(ctx);
    }

    exitEveryRule(ctx: ParserRuleContext): void {
        this.exitRuleSubject.next(ctx);
    }

    ruleToRange(rule: AntlrRule): TextRange {
        const start = {column: rule.start.column, line: rule.start.line - 1};
        const end = {column: rule.stop.column + rule.stop.text.length, line: rule.stop.line - 1};

        return createTextRange(start, end);
    }

    ruleMatch(rule: AntlrRule, clazz: AntlrRuleClass<any>): boolean {
        return clazz && rule && rule instanceof ParserRuleContext &&
            rule.constructor.name === clazz.name;
    }

    addEnterRuleListener<T extends AntlrRule>(ruleClass: AntlrRuleClass<AntlrRule>, listener: (rule: T) => void) {
        this.enterRuleSubject.asObservable()
            .pipe(filter(rule => this.ruleMatch(rule, ruleClass)))
            .subscribe(listener);
    }

    addExitRuleListener<T extends AntlrRule>(ruleClass: AntlrRuleClass<AntlrRule>, listener: (rule: T) => void) {
        this.exitRuleSubject.asObservable()
            .pipe(filter(rule => this.ruleMatch(rule, ruleClass)))
            .subscribe(listener);
    }
}
