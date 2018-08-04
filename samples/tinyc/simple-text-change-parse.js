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

let varName;

parser
    .filter((rule) => rule.getName() === 'id')
    .forEach((rule) => {
        rule.setText('var');

        varName = rule.getText();
    });

console.log("The changed text:");
console.log(parser.getText()); //var = 10;

console.log("The replaced variable:");
console.log(varName); //var;
