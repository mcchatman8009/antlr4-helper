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
const antlrHelper = require('antlr4-helper');
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

//
// Find only variables
//
parser.filter((rule) => rule.getName() === 'id')
    .forEach((rule) => {
        const ruleName = rule.getName();
        console.log(ruleName); // id
        console.log(rule.getText()); // variable
    });
```

### Changing Parsed Text
```javascript
const antlrHelper = require('antlr4-helper');
const TinycLexer = require('./parser/TinycLexer').TinycLexer;
const TinycParser = require('./parser/TinycParser').TinycParser;

const factory = antlrHelper.createFactoryBuilder()
    .lexer((input) => new TinycLexer(input))
    .parser(tokenStream => new TinycParser(tokenStream))
    .rootRule((parser) => parser.program())
    .build();

const parser = antlrHelper.createParser(factory);
parser.parse('a = 10;');
parser.checkForErrors(); // No parse errors

//
// Find the first rule
//
const rule = parser.findRuleByName('id');

rule.setText('var');
console.log("The changed text:");
console.log(parser.getText()); //var = 10;

console.log("The replaced variable:");
const varName = rule.getText();
console.log(varName); //var;
```
