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

### Changing Parsed Text
```javascript
//
// An example using the grammar  grammars/tinyc/Tinyc.g4
//
const factory = new AntlrFactoryBuilder()
    .lexer((input) => new TinycLexer(input))
    .parser(tokenStream => new TinycParser(tokenStream))
    .rootRule((parser) => parser.program())
    .build();

const parser = new MutableAntlrParser(factory);

let varName;

parser.addExitRuleListener(tinycParser.IdContext, (rule) => {
    parser.setRuleText(rule, 'var');

    // The rule has been change 
    varName = parser.getRuleText(rule);
});

parser.parse('a = 10;');
console.log(parser.getText()); //var = 10;
console.log(varName); //var;
```
