const chai = require('chai');
const textModule = require('../dist');
const antlrHelper = require('../dist');
const TinycLexer = require('./tinyc/TinycLexer').TinycLexer;
const TinycParser = require('./tinyc/TinycParser').TinycParser;
const tinycParser = require('./tinyc/tinycParser');

chai.should();

function parse(dsl) {
    const factory = antlrHelper.createFactoryBuilder()
        .lexer((input) => new TinycLexer(input))
        .parser(tokenStream => new TinycParser(tokenStream))
        .rootRule((parser) => parser.program())
        .build();

    const parser = antlrHelper.createParser(factory);

    parser.onRuleExit('id', (rule) => {
        console.log(rule.getName());
    });

    parser.parse(dsl);
    parser.checkForErrors();

    return parser;
}

describe('Test Creating a Mutable Parser', function () {
    it('DEBUG', () => {
        const parser = parse('id = 999;');


        let table = parser.getRulePositionTable();

        const rule = parser.getRuleAt(0, 0);
        table = parser.getRulePositionTable();
        rule.setText('apples = 100; \n id;\n');
        const txt = rule.getText();
        const rules = Array.from(parser.getRulesInLine(0)).forEach((ruleWrapper) => {
            const range = ruleWrapper.getRange();
            return;
        });

        parser.filter((rule) => rule.getName() === 'expr')
            .forEach((rule) => {
                console.log(rule.getName());
            });

        const idRule = parser.find((rule)=> rule.getName() === 'id');


        return;
    });
    it('DEBUG 2', () => {
        const parser = parse('id=999;');

        let table = parser.getTokenPositionTable();

        const token = parser.getTokenAt(0, 0);
        table = parser.getRulePositionTable();
        token.setText('apples = 100; \n id;\n');
        const txt = token.getText();

        return;
    });
});
