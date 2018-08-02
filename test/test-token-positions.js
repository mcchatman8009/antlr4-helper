const chai = require('chai');
const textModule = require('../dist');
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

describe('Test Parser Token Positioning', function () {
    it('check at various positions for tokens', () => {
        const parser = new AntlrParser(factory);
        parser.parse('var = 10; \n if \n(b) { a = b; }');

        parser.getTokenAt(2, 0).getName().should.equal('STRING');
        parser.getTokenAt(7, 0).getName().should.equal('INT');
        parser.getTokenAt(8, 0).getText().should.equal(';');

        parser.getTokenAt(1, 1).getText().should.equal('if');
        parser.getTokenAt(0, 2).getText().should.equal('(');
    });

});
