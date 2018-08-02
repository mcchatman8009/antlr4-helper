# Antlr4 Helper

## Overview
The goal of this project is to provided classes and interfaces that 
assist with the interaction of Antlr parsers. Making things like
language manipulation and analysis much easier.

## Getting Started
```bash
npm install -S antlr4-helper
```

## Antlr4 Helper Documentation

 [Documentation (Click Here)](./docs/README.md)


## JavaScript Examples
### Parsing Text
```javascript
const AntlrFactoryBuilder = require('antlr4-helper').AntlrFactoryBuilder;
const AntlrParser = require('antlr4-helper').AntlrParser;

const TinycLexer = require('./samples/tinyc/parser/TinycLexer').TinycLexer;
const TinycParser = require('./samples/tinyc/parser/TinycParser').TinycParser;
const tinycParser = require('./samples/tinyc/parser/tinycParser');

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
```

### Changing Parsed Text
```javascript
const AntlrFactoryBuilder = require('antlr4-helper').AntlrFactoryBuilder;
const AntlrParser = require('antlr4-helper').AntlrParser;
const MutableAntlrParser = require('antlr4-helper').MutableAntlrParser;

const TinycLexer = require('./samples/tinyc/parser/TinycLexer').TinycLexer;
const TinycParser = require('./samples/tinyc/parser/TinycParser').TinycParser;
const tinycParser = require('./samples/tinyc/parser/tinycParser');

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
```
