//
// Be sure to build the dist, before running:
//
// npm run build
//
const antlrHelper = require('../../dist');

const TinycLexer = require('./parser/TinycLexer').TinycLexer;
const TinycParser = require('./parser/TinycParser').TinycParser;


const factory = antlrHelper.createFactoryBuilder()
    .lexer((input) => new TinycLexer(input))
    .parser(tokenStream => new TinycParser(tokenStream))
    .rootRule((parser) => parser.program())
    .build();

const parser = antlrHelper.createParser(factory);
parser.parse('variable = 100;');
parser.checkForErrors();

parser
    .filter((rule) => rule.getName() === 'id')
    .forEach((rule) => {
        const ruleName = rule.getName();
        console.log(ruleName); // id
        console.log(rule.getText()); // variable
    });
