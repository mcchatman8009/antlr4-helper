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
parser.parse('variable = a; if (a) { a = b; }');
//https://www.w3schools.com/xml/xpath_syntax.asp
parser.checkForErrors();


const exprs = parser.findRulesByPath('/statement/*//id');

exprs.forEach((expr) => {
    console.log(expr.getName());
    console.log(expr.getText());
});


// console.log(orExpr.findRuleByName('unionExprNoRoot').getText());

// console.log(unionExprNoRoot.getChildren().length);


