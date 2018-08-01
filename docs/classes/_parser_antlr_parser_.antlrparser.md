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
* [enterEveryRule](_parser_antlr_parser_.antlrparser.md#entereveryrule)
* [exitEveryRule](_parser_antlr_parser_.antlrparser.md#exiteveryrule)
* [getRuleText](_parser_antlr_parser_.antlrparser.md#getruletext)
* [getTokenRange](_parser_antlr_parser_.antlrparser.md#gettokenrange)
* [getTokenText](_parser_antlr_parser_.antlrparser.md#gettokentext)
* [parse](_parser_antlr_parser_.antlrparser.md#parse)
* [ruleMatch](_parser_antlr_parser_.antlrparser.md#rulematch)
* [ruleToRange](_parser_antlr_parser_.antlrparser.md#ruletorange)
* [visitErrorNode](_parser_antlr_parser_.antlrparser.md#visiterrornode)
* [visitTerminal](_parser_antlr_parser_.antlrparser.md#visitterminal)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AntlrParser**(factory: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*): [AntlrParser](_parser_antlr_parser_.antlrparser.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| factory | [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md) |

**Returns:** [AntlrParser](_parser_antlr_parser_.antlrparser.md)

___

## Properties

<a id="enterrulesubject"></a>

### `<Private>` enterRuleSubject

**● enterRuleSubject**: *`Subject`<`AntlrRule`>*

___
<a id="exitrulesubject"></a>

### `<Private>` exitRuleSubject

**● exitRuleSubject**: *`Subject`<`AntlrRule`>*

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

▸ **addEnterRuleListener**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`AntlrRule`>*, listener: *`function`*): `void`

**Type parameters:**

#### T :  `AntlrRule`
**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`AntlrRule`> |
| listener | `function` |

**Returns:** `void`

___
<a id="addexitrulelistener"></a>

###  addExitRuleListener

▸ **addExitRuleListener**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`AntlrRule`>*, listener: *`function`*): `void`

**Type parameters:**

#### T :  `AntlrRule`
**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`AntlrRule`> |
| listener | `function` |

**Returns:** `void`

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
<a id="getruletext"></a>

###  getRuleText

▸ **getRuleText**(rule: *`AntlrRule`*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRule` |

**Returns:** `string`

___
<a id="gettokenrange"></a>

###  getTokenRange

▸ **getTokenRange**(token: * `Token` &#124; `TerminalNode`*): `TextRange`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token |  `Token` &#124; `TerminalNode`|

**Returns:** `TextRange`

___
<a id="gettokentext"></a>

###  getTokenText

▸ **getTokenText**(token: * `Token` &#124; `TerminalNode`*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token |  `Token` &#124; `TerminalNode`|

**Returns:** `string`

___
<a id="parse"></a>

###  parse

▸ **parse**(input: *`string`*): `AntlrRule`

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `string` |

**Returns:** `AntlrRule`

___
<a id="rulematch"></a>

###  ruleMatch

▸ **ruleMatch**(rule: *`AntlrRule`*, clazz: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`any`>*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRule` |
| clazz | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`any`> |

**Returns:** `boolean`

___
<a id="ruletorange"></a>

###  ruleToRange

▸ **ruleToRange**(rule: *`AntlrRule`*): `TextRange`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRule` |

**Returns:** `TextRange`

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

