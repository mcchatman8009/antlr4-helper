[antlr4-helper](../README.md) > ["parser/mutable-text-antlr-parser"](../modules/_parser_mutable_text_antlr_parser_.md) > [MutableTextAntlrParser](../classes/_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md)

# Class: MutableTextAntlrParser

## Hierarchy

**MutableTextAntlrParser**

## Index

### Constructors

* [constructor](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#constructor)

### Properties

* [parser](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#parser)
* [textModel](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#textmodel)

### Methods

* [addEnterRuleListener](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#addenterrulelistener)
* [addExitRuleListener](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#addexitrulelistener)
* [getRuleText](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#getruletext)
* [getText](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#gettext)
* [getTokenRange](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#gettokenrange)
* [getTokenText](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#gettokentext)
* [parse](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#parse)
* [setRuleText](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#setruletext)
* [setTokenText](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md#settokentext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MutableTextAntlrParser**(factory: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*): [MutableTextAntlrParser](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| factory | [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md) |

**Returns:** [MutableTextAntlrParser](_parser_mutable_text_antlr_parser_.mutabletextantlrparser.md)

___

## Properties

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
<a id="getruletext"></a>

###  getRuleText

▸ **getRuleText**(rule: *`AntlrRule`*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRule` |

**Returns:** `string`

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

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
<a id="setruletext"></a>

###  setRuleText

▸ **setRuleText**(rule: *`AntlrRule`*, text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRule` |
| text | `string` |

**Returns:** `void`

___
<a id="settokentext"></a>

###  setTokenText

▸ **setTokenText**(token: * `Token` &#124; `TerminalNode`*, text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token |  `Token` &#124; `TerminalNode`|
| text | `string` |

**Returns:** `void`

___

