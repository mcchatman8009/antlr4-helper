[antlr4-helper](../README.md) > ["parser/mutable-antlr-parser"](../modules/_parser_mutable_antlr_parser_.md) > [MutableAntlrParser](../classes/_parser_mutable_antlr_parser_.mutableantlrparser.md)

# Class: MutableAntlrParser

The MutableAntlrParser allows for text manipulation at the rule and token level. Once the parse is complete the [getText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettext) method enables one to see the complete text of all the changes.

*__example__*:   

```
...
const parser = new MutableAntlrParser(factory);
...
parser.addExitRuleListener(ExpressionContext, (rule)=>{
    parser.setRuleText(rule, 'replaced expression');
    console.log(parser.getRuleText(rule));
});
parser.parse(text);
console.log(parser.getText());
```

*__class__*: MutableAntlrParser

## Hierarchy

**MutableAntlrParser**

## Index

### Constructors

* [constructor](_parser_mutable_antlr_parser_.mutableantlrparser.md#constructor)

### Properties

* [changedRuleMap](_parser_mutable_antlr_parser_.mutableantlrparser.md#changedrulemap)
* [changedTokenMap](_parser_mutable_antlr_parser_.mutableantlrparser.md#changedtokenmap)
* [parser](_parser_mutable_antlr_parser_.mutableantlrparser.md#parser)
* [textModel](_parser_mutable_antlr_parser_.mutableantlrparser.md#textmodel)

### Methods

* [addEnterRuleListener](_parser_mutable_antlr_parser_.mutableantlrparser.md#addenterrulelistener)
* [addExitRuleListener](_parser_mutable_antlr_parser_.mutableantlrparser.md#addexitrulelistener)
* [getRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#getruletext)
* [getText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettext)
* [getTokenRange](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokenrange)
* [getTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokentext)
* [parse](_parser_mutable_antlr_parser_.mutableantlrparser.md#parse)
* [setRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#setruletext)
* [setTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#settokentext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MutableAntlrParser**(factory: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*): [MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)

Provide an AntlrFactory to construct

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| factory | [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md) |   |

**Returns:** [MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)

___

## Properties

<a id="changedrulemap"></a>

### `<Private>` changedRuleMap

**● changedRuleMap**: *`Map`<`ParserRuleContext`, `MutableTextRange`>*

___
<a id="changedtokenmap"></a>

### `<Private>` changedTokenMap

**● changedTokenMap**: *`Map`<`Token`, `MutableTextRange`>*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *[AntlrParser](_parser_antlr_parser_.antlrparser.md)*

___
<a id="textmodel"></a>

### `<Private>` textModel

**● textModel**: *`TextBuffer`*

___

## Methods

<a id="addenterrulelistener"></a>

###  addEnterRuleListener

▸ **addEnterRuleListener**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`>*, listener: *`function`*): `void`

Add a listener for when the parser enters a given rule. See example below

*__example__*:   

```
parser.addEnterRuleListener(ExpressionContext, (rule)=>{
    console.log("entering an expression rule");
});
```

**Type parameters:**

#### T :  `ParserRuleContext`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`> |  - |
| listener | `function` |   |

**Returns:** `void`

___
<a id="addexitrulelistener"></a>

###  addExitRuleListener

▸ **addExitRuleListener**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`>*, listener: *`function`*): `void`

Add a listener for when the parser exits a given rule. Within this listener is where you would typically call methods such as [setRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#setruletext), [getRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#getruletext) ,[setTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#settokentext) and [getTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokentext)

See example below:
*__example__*:   

```
parser.addExitRuleListener(ExpressionContext, (rule)=>{
    console.log(parser.getRuleText(rule));
});
```

**Type parameters:**

#### T :  `ParserRuleContext`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`> |  - |
| listener | `function` |   |

**Returns:** `void`

___
<a id="getruletext"></a>

###  getRuleText

▸ **getRuleText**(rule: *`ParserRuleContext`*): `string`

Get the text of the completely parsed rule

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |

**Returns:** `string`

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

Get the complete parsed and transformed text

**Returns:** `string`

___
<a id="gettokenrange"></a>

###  getTokenRange

▸ **getTokenRange**(token: *`Token`*): [`object`, `object`]

Get the range of a given token, where the first object is the start position and the last is the end position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `Token` |   |

**Returns:** [`object`, `object`]
, {column: number; line: number}]}

___
<a id="gettokentext"></a>

###  getTokenText

▸ **getTokenText**(token: *`Token`*): `string`

Get the text of a given token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `Token` |  - |

**Returns:** `string`

___
<a id="parse"></a>

###  parse

▸ **parse**(input: *`string`*): `ParserRuleContext`

Parse the input string (The internal text model is changed on each parse)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string` |  - |

**Returns:** `ParserRuleContext`
- the invoked root rule

___
<a id="setruletext"></a>

###  setRuleText

▸ **setRuleText**(rule: *`ParserRuleContext`*, text: *`string`*): `void`

Change the text of the completely parsed rule

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |
| text | `string` |   |

**Returns:** `void`

___
<a id="settokentext"></a>

###  setTokenText

▸ **setTokenText**(token: *`Token`*, text: *`string`*): `void`

Change the text of the token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `Token` |  - |
| text | `string` |   |

**Returns:** `void`

___

