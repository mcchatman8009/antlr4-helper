const chai = require('chai');
const mocha = require('mocha');
const textModule = require('../dist');
const AntlrFactoryBuilder = require('../dist').AntlrFactoryBuilder;
const MutableTextAntlrParser = require('../dist').MutableTextAntlrParser;
const TinycLexer = require('./tinyc/tinycLexer').tinycLexer;
const TinycParser = require('./tinyc/tinycParser').tinycParser;
const tinycParser = require('./tinyc/tinycParser');

chai.should();

describe('Test Creating a Mutable Parser', function () {

    it('Change the variable from "a = 10;" to "var = 10;"', () => {
        const factory = new AntlrFactoryBuilder()
            .lexer((input) => new TinycLexer(input))
            .parser(tokenStream => new TinycParser(tokenStream))
            .rootRule((parser) => parser.program())
            .build();

        const parser = new MutableTextAntlrParser(factory);
        parser.addExitRuleListener(tinycParser.IdContext, (rule) => {
            parser.setRuleText(rule, 'var');

        });

        parser.parse('a = 10;');
        parser.getText().should.equal('var = 10;');
    });

});
