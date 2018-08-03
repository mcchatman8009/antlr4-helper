const chai = require('chai');
const helper = require('../dist');
const AntlrFactoryBuilder = require('../dist').AntlrFactoryBuilder;
const BasicAntlrParser = require('../dist').BasicAntlrParser;
const MutableAntlrParser = require('../dist').MutableAntlrParser;
const TinycLexer = require('./tinyc/TinycLexer').TinycLexer;
const TinycParser = require('./tinyc/TinycParser').TinycParser;
const tinycParser = require('./tinyc/tinycParser');

chai.should();
const factory = new AntlrFactoryBuilder()
    .lexer((input) => new TinycLexer(input))
    .parser(tokenStream => new TinycParser(tokenStream))
    .rootRule((parser) => parser.program())
    .build();

describe('Test Parser Rule errors', function () {
    it('check for the statement error on line 2', () => {
        const parser = new BasicAntlrParser(factory);
        parser.parse('var = 10; \n if \n(b) {a = b }');
        // const ruleTable = parser.getRulePositionTable();
        // const errorRuleTable = parser.getErrorRuleTable();

        parser.getRuleName(parser.getRelevantError().rule).should.equal('statement');
        parser.getRelevantError().end.line.should.equal(2);
    });

    it('check for simple statement rule error', () => {
        const parser = new BasicAntlrParser(factory);
        parser.parse('var = 10');
        // const ruleTable = parser.getRulePositionTable();
        // const errorRuleTable = parser.getErrorRuleTable();

        // const errors = parser.getErrors();

        parser.getRuleName(parser.getRelevantError().rule).should.equal('statement');
    });

    it('create error using custom validator', () => {
        const parser = new BasicAntlrParser(factory);

        parser.addCustomRuleValidator(tinycParser.IdContext, (id) => {
            const str = parser.getTokenText(id.STRING());

            const error = parser.createRuleError(id);
            error.message = `Please rename the variable ${str}`;

            return error;
        });

        parser.parse('var = 10;');

        parser.getRuleName(parser.getRelevantError().rule).should.equal('id');
        parser.getRelevantError().message.should.equal("Please rename the variable var")
    });
});
