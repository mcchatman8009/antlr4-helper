const chai = require('chai');
const antlrHelper = require('../dist');
const AntlrFactoryBuilder = require('../dist').AntlrFactoryBuilder;
const TinycLexer = require('./tinyc/TinycLexer').TinycLexer;
const TinycParser = require('./tinyc/TinycParser').TinycParser;

chai.should();

describe('Test Creating a Mutable Parser', function () {
    it('DEBUG', () => {
        const factory = new AntlrFactoryBuilder()
            .lexer((input) => new TinycLexer(input))
            .parser(tokenStream => new TinycParser(tokenStream))
            .rootRule((parser) => parser.program())
            .build();

        const parser = antlrHelper.createParser(factory);

        // parser.parse('variable = 10;\n = 111;');
        parser.parse('variable = 10;');

        const rule = parser.getRuleAt(0, 0);
        rule.setText('apples');
        table = parser.getRulePositionTable();
        const txt = rule.getText();

        return;
    });

    it('Change the variable from "a = 10;" to "var = 10;"', () => {
        const factory = new AntlrFactoryBuilder()
            .lexer((input) => new TinycLexer(input))
            .parser(tokenStream => new TinycParser(tokenStream))
            .rootRule((parser) => parser.program())
            .build();

        let varName;
        const parser = antlrHelper.createParser(factory);
        parser.parse('a = 10;');

        parser.filter((rule) => rule.getName() === 'id')
            .forEach((rule) => {
                rule.setText('var');
                // The rule change now be changed
                varName = rule.getText();
            });

        parser.getText().should.equal('var = 10;');
        varName.should.equal('var');
    });

});
