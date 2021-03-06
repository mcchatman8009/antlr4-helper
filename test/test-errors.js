const chai = require('chai');
const antlrHelper = require('../dist');
const AntlrFactoryBuilder = require('../dist').AntlrFactoryBuilder;
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
        const parser = antlrHelper.createParser(factory);
        parser.parse('var = 10; \n if \n(b) {a = b }');
        parser.getRuleName(parser.getRelevantError().rule).should.equal('statement');
        parser.getRelevantError().end.line.should.equal(2);
    });

    it('check for simple statement rule error', () => {
        const parser = antlrHelper.createParser(factory);
        parser.parse('var = 10');
        // const ruleTable = parser.getRulePositionTable();
        // const errorRuleTable = parser.getErrorRuleTable();

        // const errors = parser.getErrors();

        parser.getRuleName(parser.getRelevantError().rule).should.equal('statement');
    });

    it('create error using custom validator', () => {
        const parser = antlrHelper.createParser(factory);

        parser.addValidator('id', (id) => {
            const token = id.getToken('STRING');
            const str = token.getText();

            const error = id.createRuleError();
            error.message = `Please rename the variable ${str}`;

            // return null;
            return error;
        });

        parser.parse('var = 10;');

        parser.getRelevantError().ruleWrapper.getName().should.equal('id');
        parser.getRelevantError().message.should.equal("Please rename the variable var");
    });
});
