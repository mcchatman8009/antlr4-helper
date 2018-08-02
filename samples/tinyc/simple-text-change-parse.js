//
// Be sure to build the dist, before running:
//
// npm run build
//

const AntlrFactoryBuilder = require('../../dist').AntlrFactoryBuilder;
const AntlrParser = require('../../dist').AntlrParser;
const MutableAntlrParser = require('../../dist').MutableAntlrParser;

const TinycLexer = require('./parser/TinycLexer').TinycLexer;
const TinycParser = require('./parser/TinycParser').TinycParser;
const tinycParser = require('./parser/tinycParser');

const factory = new AntlrFactoryBuilder()
    .lexer((input) => new TinycLexer(input))
    .parser(tokenStream => new TinycParser(tokenStream))
    .rootRule((parser) => parser.program())
    .build();

// Create a mutable parser
const parser = new MutableAntlrParser(new AntlrParser(factory));

let varName;

parser.addExitRuleListener(tinycParser.IdContext, (rule) => {
    parser.setRuleText(rule, 'var');

    // The rule has been change
    varName = parser.getRuleText(rule);
});


parser.parse('a = 10;');

console.log("The changed text:");
console.log(parser.getText()); //var = 10;

console.log("The replaced variable:");
console.log(varName); //var;
