const chai = require('chai');
const antlrHelper = require('../dist');
const AntlrFactoryBuilder = require('../dist').AntlrFactoryBuilder;
const AntlrParser = require('../dist').AntlrParser;
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

describe('Test Parser Rule Positioning', function () {
    it('Check various rule positions for rules', () => {
        const parser = antlrHelper.createParser(factory);
        parser.parse('var = 10; \n if (b) { a = b; }');


        parser.getRuleAt(2, 0).getName().should.equal('id');
        parser.getRuleAt(3, 0).getName().should.equal('expr');
        parser.getRuleAt(4, 0).getName().should.equal('expr');
        parser.getRuleAt(8, 0).getName().should.equal('statement');

        parser.getRuleAt(1, 1).getName().should.equal('statement');
        parser.getRuleAt(4, 1).getName().should.equal('paren_expr');
    });

});
