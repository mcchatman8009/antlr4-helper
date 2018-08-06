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
parser.parse('a = 10;');
parser.checkForErrors();


// Find the first rule
const rule = parser.findRuleByName('id');

rule.setText('var');
console.log("The changed text:");
console.log(parser.getText()); //var = 10;

console.log("The replaced variable:");
const varName = rule.getText();
console.log(varName); //var;
