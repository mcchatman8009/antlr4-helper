const chai = require('chai');
const textModule = require('../dist');
const AntlrFactoryBuilder = require('../dist').AntlrFactoryBuilder;
const MutableAntlrParser = require('../dist').MutableAntlrParser;
const TinycLexer = require('./tinyc/TinycLexer').TinycLexer;
const TinycParser = require('./tinyc/TinycParser').TinycParser;
const tinycParser = require('./tinyc/tinycParser');

chai.should();

describe('Test Creating a Mutable Parser', function () {

    it('Change the variable from "a = 10;" to "var = 10;"', () => {
        const factory = new AntlrFactoryBuilder()
            .lexer((input) => new TinycLexer(input))
            .parser(tokenStream => new TinycParser(tokenStream))
            .rootRule((parser) => parser.program())
            .build();

        const parser = new MutableAntlrParser(factory);
        let varName;

        parser.addExitRuleListener(tinycParser.IdContext, (rule) => {
            parser.setRuleText(rule, 'var');

            // The rule change now be changed
            varName = parser.getRuleText(rule);
        });

        parser.parse('a = 10;');
        parser.getText().should.equal('var = 10;');
        varName.should.equal('var');
    });

});
