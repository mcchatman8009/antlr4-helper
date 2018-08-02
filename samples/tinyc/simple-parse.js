//
// Be sure to build the dist, before running:
//
// npm run build
//
const AntlrFactoryBuilder = require('../../dist').AntlrFactoryBuilder;
const AntlrParser = require('../../dist').AntlrParser;

const TinycLexer = require('./parser/TinycLexer').TinycLexer;
const TinycParser = require('./parser/TinycParser').TinycParser;
const tinycParser = require('./parser/tinycParser');


const factory = new AntlrFactoryBuilder()
    .lexer((input) => new TinycLexer(input))
    .parser(tokenStream => new TinycParser(tokenStream))
    .rootRule((parser) => parser.program())
    .build();

const parser = new AntlrParser(factory);


parser.addExitRuleListener(tinycParser.IdContext, (rule) => {
    // Log each visit to a rule
    const ruleName = parser.getRuleName(rule);
    console.log(ruleName); // id

    // Always view the rule contents on the exit parse of the rule
    console.log(parser.getRuleText(rule)); // variable
});

parser.parse('variable = 100;');
parser.checkForErrors();
