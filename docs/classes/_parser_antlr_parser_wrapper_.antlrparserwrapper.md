[antlr4-helper](../README.md) > ["parser/antlr-parser-wrapper"](../modules/_parser_antlr_parser_wrapper_.md) > [AntlrParserWrapper](../classes/_parser_antlr_parser_wrapper_.antlrparserwrapper.md)

# Class: AntlrParserWrapper

## Hierarchy

**AntlrParserWrapper**

## Index

### Constructors

* [constructor](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#constructor)

### Properties

* [parser](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#parser)

### Accessors

* [literalNames](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#literalnames)
* [ruleNames](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#rulenames)
* [symbolicNames](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#symbolicnames)

### Methods

* [getRuleIndexToNameMap](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#getruleindextonamemap)
* [getRuleNameToIndexMap](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#getrulenametoindexmap)
* [getSymbolToTypeMap](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#getsymboltotypemap)
* [getTokenTypeToSymoblMap](_parser_antlr_parser_wrapper_.antlrparserwrapper.md#gettokentypetosymoblmap)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AntlrParserWrapper**(parser: *`Parser`*): [AntlrParserWrapper](_parser_antlr_parser_wrapper_.antlrparserwrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | `Parser` |

**Returns:** [AntlrParserWrapper](_parser_antlr_parser_wrapper_.antlrparserwrapper.md)

___

## Properties

<a id="parser"></a>

### `<Private>` parser

**● parser**: *`Parser`*

___

## Accessors

<a id="literalnames"></a>

###  literalNames

getliteralNames(): `string`[]

**Returns:** `string`[]

___
<a id="rulenames"></a>

###  ruleNames

getruleNames(): `string`[]

**Returns:** `string`[]

___
<a id="symbolicnames"></a>

###  symbolicNames

getsymbolicNames(): `string`[]

**Returns:** `string`[]

___

## Methods

<a id="getruleindextonamemap"></a>

###  getRuleIndexToNameMap

▸ **getRuleIndexToNameMap**(): `ReadonlyMap`<`number`, `string`>

**Returns:** `ReadonlyMap`<`number`, `string`>

___
<a id="getrulenametoindexmap"></a>

###  getRuleNameToIndexMap

▸ **getRuleNameToIndexMap**(): `ReadonlyMap`<`string`, `number`>

**Returns:** `ReadonlyMap`<`string`, `number`>

___
<a id="getsymboltotypemap"></a>

###  getSymbolToTypeMap

▸ **getSymbolToTypeMap**(): `ReadonlyMap`<`string`, `number`>

**Returns:** `ReadonlyMap`<`string`, `number`>

___
<a id="gettokentypetosymoblmap"></a>

###  getTokenTypeToSymoblMap

▸ **getTokenTypeToSymoblMap**(): `ReadonlyMap`<`number`, `string`>

**Returns:** `ReadonlyMap`<`number`, `string`>

___

