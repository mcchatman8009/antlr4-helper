const chai = require('chai');
const textModule = require('../dist');
const antlrHelper = require('../dist');
const TinycLexer = require('./tinyc/TinycLexer').TinycLexer;
const TinycParser = require('./tinyc/TinycParser').TinycParser;
const tinycParser = require('./tinyc/tinycParser');

chai.should();

describe('Test Creating a Mutable Parser', function () {
    it('DEBUG', () => {
        const factory = antlrHelper.createFactoryBuilder()
            .lexer((input) => new TinycLexer(input))
            .parser(tokenStream => new TinycParser(tokenStream))
            .rootRule((parser) => parser.program())
            .build();

        const parser = antlrHelper.createMutableParser(factory);


        // parser.parse('variable = 10;\n = 111;');
        parser.parse('variable = 10;');
        let table = parser.getRulePositionTable();

        const rule = parser.getRuleAt(0, 0);
        rule.setText('apples');
        table = parser.getRulePositionTable();
        const txt = rule.getText();

        const functionalParser = antlrHelper.functionalParser(parser);

        functionalParser
            .filter((rule) => rule.getName() === 'expr')
            .forEach((rule) => {
                console.log(rule.getRuleName());
            });


        return;
    });
});
