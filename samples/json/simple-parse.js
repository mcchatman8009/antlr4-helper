//
// Be sure to build the dist, before running:
//
// npm run build
//
const antlrHelper = require('../../dist');

const JSONLexer = require('./parser/JSONLexer').JSONLexer;
const JSONParser = require('./parser/JSONParser').JSONParser;


const factory = antlrHelper.createFactoryBuilder()
    .lexer((input) => new JSONLexer(input))
    .parser(tokenStream => new JSONParser(tokenStream))
    .rootRule((parser) => parser.json())
    .build();

const parser = antlrHelper.createParser(factory);
parser.parse(`
{  
    "a" : 100,
    "objs": {
        "key": "String"
    }
}
`);
parser.checkForErrors();

parser
    .filter((rule) => rule.getName() === 'pair')
    .forEach((rule) => {
        const ruleName = rule.getName();
        console.log(ruleName);
        console.log(rule.getText());
    });

parser
    .filter((rule) => rule.getName() === 'obj')
    .forEach((rule) => {
        const ruleData = rule.getRule();
        const children = rule.getChildren();
        const tokens = rule.getTokens();
        return;
    });

console.log();
console.log("TEXT:");
console.log(parser.getText());
