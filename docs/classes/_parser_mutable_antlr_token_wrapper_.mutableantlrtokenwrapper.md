[antlr4-helper](../README.md) > ["parser/mutable-antlr-token-wrapper"](../modules/_parser_mutable_antlr_token_wrapper_.md) > [MutableAntlrTokenWrapper](../classes/_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md)

# Class: MutableAntlrTokenWrapper

## Hierarchy

**MutableAntlrTokenWrapper**

## Implements

* [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md)

## Index

### Constructors

* [constructor](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#constructor)

### Properties

* [parser](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#parser)
* [token](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#token)

### Methods

* [exists](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#exists)
* [getName](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#getname)
* [getRange](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#getrange)
* [getText](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#gettext)
* [getToken](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#gettoken)
* [setText](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md#settext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MutableAntlrTokenWrapper**(token: *`Token`*, parser: *[MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)*): [MutableAntlrTokenWrapper](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `Token` |
| parser | [MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md) |

**Returns:** [MutableAntlrTokenWrapper](_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md)

___

## Properties

<a id="parser"></a>

### `<Private>` parser

**● parser**: *[MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)*

___
<a id="token"></a>

### `<Private>` token

**● token**: *`Token`*

___

## Methods

<a id="exists"></a>

###  exists

▸ **exists**(): `boolean`

**Returns:** `boolean`

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

**Returns:** `string`

___
<a id="getrange"></a>

###  getRange

▸ **getRange**(): [AntlrRange](../modules/_types_types_.md#antlrrange)

**Returns:** [AntlrRange](../modules/_types_types_.md#antlrrange)

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

**Returns:** `string`

___
<a id="gettoken"></a>

###  getToken

▸ **getToken**(): `Token`

**Returns:** `Token`

___
<a id="settext"></a>

###  setText

▸ **setText**(text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___

