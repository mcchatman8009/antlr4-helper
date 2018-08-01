[antlr4-helper](../README.md) > ["parser/antlr-parser"](../modules/_parser_antlr_parser_.md) > [AntlrParser](../classes/_parser_antlr_parser_.antlrparser.md)

# Class: AntlrParser

## Hierarchy

**AntlrParser**

## Implements

* `ParseTreeListener`

## Index

### Constructors

* [constructor](_parser_antlr_parser_.antlrparser.md#constructor)

### Properties

* [enterRuleSubject](_parser_antlr_parser_.antlrparser.md#enterrulesubject)
* [exitRuleSubject](_parser_antlr_parser_.antlrparser.md#exitrulesubject)
* [factory](_parser_antlr_parser_.antlrparser.md#factory)
* [inputStream](_parser_antlr_parser_.antlrparser.md#inputstream)

### Methods

* [addEnterRuleListener](_parser_antlr_parser_.antlrparser.md#addenterrulelistener)
* [addExitRuleListener](_parser_antlr_parser_.antlrparser.md#addexitrulelistener)
* [doesRuleMatchClass](_parser_antlr_parser_.antlrparser.md#doesrulematchclass)
* [enterEveryRule](_parser_antlr_parser_.antlrparser.md#entereveryrule)
* [exitEveryRule](_parser_antlr_parser_.antlrparser.md#exiteveryrule)
* [getRuleRange](_parser_antlr_parser_.antlrparser.md#getrulerange)
* [getRuleText](_parser_antlr_parser_.antlrparser.md#getruletext)
* [getTokenRange](_parser_antlr_parser_.antlrparser.md#gettokenrange)
* [getTokenText](_parser_antlr_parser_.antlrparser.md#gettokentext)
* [parse](_parser_antlr_parser_.antlrparser.md#parse)
* [visitErrorNode](_parser_antlr_parser_.antlrparser.md#visiterrornode)
* [visitTerminal](_parser_antlr_parser_.antlrparser.md#visitterminal)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AntlrParser**(factory: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*): [AntlrParser](_parser_antlr_parser_.antlrparser.md)

Provide an AntlrFactory to construct

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| factory | [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md) |   |

**Returns:** [AntlrParser](_parser_antlr_parser_.antlrparser.md)

___

## Properties

<a id="enterrulesubject"></a>

### `<Private>` enterRuleSubject

**● enterRuleSubject**: *`Subject`<`ParserRuleContext`>*

___
<a id="exitrulesubject"></a>

### `<Private>` exitRuleSubject

**● exitRuleSubject**: *`Subject`<`ParserRuleContext`>*

___
<a id="factory"></a>

### `<Private>` factory

**● factory**: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*

___
<a id="inputstream"></a>

### `<Private>` inputStream

**● inputStream**: *`InputStream`*

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
})
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

Add a listener for when the parser exits a given rule. See example below

*__example__*:   

```
parser.addExitRuleListener(ExpressionContext, (rule)=>{
    console.log(parser.getRuleText(rule));
})
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
<a id="doesrulematchclass"></a>

###  doesRuleMatchClass

▸ **doesRuleMatchClass**(rule: *`ParserRuleContext`*, ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`any`>*): `boolean`

Checks if a rule matches the ruleClass given

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`any`> |  - |

**Returns:** `boolean`

___
<a id="entereveryrule"></a>

###  enterEveryRule

▸ **enterEveryRule**(ctx: *`ParserRuleContext`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ctx | `ParserRuleContext` |

**Returns:** `void`

___
<a id="exiteveryrule"></a>

###  exitEveryRule

▸ **exitEveryRule**(ctx: *`ParserRuleContext`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ctx | `ParserRuleContext` |

**Returns:** `void`

___
<a id="getrulerange"></a>

###  getRuleRange

▸ **getRuleRange**(rule: *`ParserRuleContext`*): [`object`, `object`]

Get the range of a given rule, where the first object is the start position and the last is the end position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |

**Returns:** [`object`, `object`]
, {column: number; line: number}]}

___
<a id="getruletext"></a>

###  getRuleText

▸ **getRuleText**(rule: *`ParserRuleContext`*): `string`

Get the complete text of a completely parsed rule

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |

**Returns:** `string`

___
<a id="gettokenrange"></a>

###  getTokenRange

▸ **getTokenRange**(token: * `Token` &#124; `TerminalNode`*): [`object`, `object`]

Get the range of a given token, where the first object is the start position and the last is the end position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token |  `Token` &#124; `TerminalNode`|  - |

**Returns:** [`object`, `object`]
, {column: number; line: number}]}

___
<a id="gettokentext"></a>

###  getTokenText

▸ **getTokenText**(token: * `Token` &#124; `TerminalNode`*): `string`

Get the text of a given token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token |  `Token` &#124; `TerminalNode`|  - |

**Returns:** `string`

___
<a id="parse"></a>

###  parse

▸ **parse**(input: *`string`*): `ParserRuleContext`

Parse the input string

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string` |  - |

**Returns:** `ParserRuleContext`
- the invoked root rule

___
<a id="visiterrornode"></a>

###  visitErrorNode

▸ **visitErrorNode**(node: *`ErrorNode`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| node | `ErrorNode` |

**Returns:** `void`

___
<a id="visitterminal"></a>

###  visitTerminal

▸ **visitTerminal**(node: *`TerminalNode`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| node | `TerminalNode` |

**Returns:** `void`

___

