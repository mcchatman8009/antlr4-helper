import {InputStream, CommonTokenStream, Lexer, Parser, ParserRuleContext} from 'antlr4';

export interface AntlrFactory {
    readonly createLexer: (stream: InputStream) => Lexer;
    readonly createParser: (tokenStream: CommonTokenStream) => Parser;
    readonly createAndInvokeRootRule: (parser: Parser) => ParserRuleContext;
}

export class AntlrFactoryBuilder {
    private createLexer?: (stream: InputStream) => Lexer;
    private createParser?: (tokenStream: CommonTokenStream) => Parser;
    private createRootRule?: (parser: Parser) => ParserRuleContext;

    constructor() {
        this.createLexer = () => null;
        this.createParser = () => null;
        this.createRootRule = () => null;
    }

    lexer(lexer?: (stream: InputStream) => Lexer): AntlrFactoryBuilder {
        this.createLexer = lexer;
        return this;
    }

    parser(parser?: (tokenStream: CommonTokenStream) => Parser): AntlrFactoryBuilder {
        this.createParser = parser;
        return this;
    }

    rootRule(rootRule?: (parser: Parser) => ParserRuleContext): AntlrFactoryBuilder {
        this.createRootRule = rootRule;
        return this;
    }

    build(): AntlrFactory {
        return {
            createLexer: this.createLexer,
            createParser: this.createParser,
            createAndInvokeRootRule: this.createRootRule
        };
    }
}
