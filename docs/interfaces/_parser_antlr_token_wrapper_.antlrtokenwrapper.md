[antlr4-helper](../README.md) > ["parser/antlr-token-wrapper"](../modules/_parser_antlr_token_wrapper_.md) > [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md)

# Interface: AntlrTokenWrapper

## Hierarchy

**AntlrTokenWrapper**

## Implemented by

* [ImmutableAntlrTokenWrapper](../classes/_parser_immutable_antlr_token_wrapper_.immutableantlrtokenwrapper.md)
* [MutableAntlrTokenWrapper](../classes/_parser_mutable_antlr_token_wrapper_.mutableantlrtokenwrapper.md)

## Index

### Methods

* [exists](_parser_antlr_token_wrapper_.antlrtokenwrapper.md#exists)
* [getName](_parser_antlr_token_wrapper_.antlrtokenwrapper.md#getname)
* [getRange](_parser_antlr_token_wrapper_.antlrtokenwrapper.md#getrange)
* [getText](_parser_antlr_token_wrapper_.antlrtokenwrapper.md#gettext)
* [getToken](_parser_antlr_token_wrapper_.antlrtokenwrapper.md#gettoken)
* [inRange](_parser_antlr_token_wrapper_.antlrtokenwrapper.md#inrange)
* [setText](_parser_antlr_token_wrapper_.antlrtokenwrapper.md#settext)

---

## Methods

<a id="exists"></a>

###  exists

▸ **exists**(): `boolean`

**Returns:** `boolean`

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

The rule name, as you would see it in a Antlr Grammar

**Returns:** `string`

___
<a id="getrange"></a>

###  getRange

▸ **getRange**(): [AntlrRange](../modules/_types_types_.md#antlrrange)

The text range of the token

**Returns:** [AntlrRange](../modules/_types_types_.md#antlrrange)

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

The complete text of the Token

**Returns:** `string`

___
<a id="gettoken"></a>

###  getToken

▸ **getToken**(): `Token`

The raw Antlr Token Object

**Returns:** `Token`

___
<a id="inrange"></a>

###  inRange

▸ **inRange**(pos: *`object`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| pos | `object` |

**Returns:** `boolean`

___
<a id="settext"></a>

###  setText

▸ **setText**(text: *`string`*): `void`

Change the text of the token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string` |   |

**Returns:** `void`

___

