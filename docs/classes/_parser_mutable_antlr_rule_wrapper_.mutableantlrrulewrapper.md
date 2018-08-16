[antlr4-helper](../README.md) > ["parser/mutable-antlr-rule-wrapper"](../modules/_parser_mutable_antlr_rule_wrapper_.md) > [MutableAntlrRuleWrapper](../classes/_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md)

# Class: MutableAntlrRuleWrapper

## Hierarchy

**MutableAntlrRuleWrapper**

## Implements

* [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

## Index

### Constructors

* [constructor](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#constructor)

### Properties

* [fixedRange](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#fixedrange)
* [parser](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#parser)
* [rule](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#rule)

### Methods

* [createRuleError](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#createruleerror)
* [exists](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#exists)
* [getChildren](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#getchildren)
* [getName](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#getname)
* [getParent](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#getparent)
* [getRange](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#getrange)
* [getRule](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#getrule)
* [getSiblings](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#getsiblings)
* [getText](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#gettext)
* [getToken](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#gettoken)
* [getTokens](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#gettokens)
* [hasToken](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#hastoken)
* [inRange](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#inrange)
* [setText](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md#settext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MutableAntlrRuleWrapper**(rule: *`ParserRuleContext`*, parser: *[MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)*, fixedRange?: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): [MutableAntlrRuleWrapper](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| parser | [MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md) |
| `Optional` fixedRange | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** [MutableAntlrRuleWrapper](_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md)

___

## Properties

<a id="fixedrange"></a>

### `<Private>``<Optional>` fixedRange

**● fixedRange**: *[AntlrRange](../modules/_types_types_.md#antlrrange)*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *[MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)*

___
<a id="rule"></a>

###  rule

**● rule**: *`ParserRuleContext`*

___

## Methods

<a id="createruleerror"></a>

###  createRuleError

▸ **createRuleError**(): [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

**Returns:** [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

___
<a id="exists"></a>

###  exists

▸ **exists**(): `boolean`

**Returns:** `boolean`

___
<a id="getchildren"></a>

###  getChildren

▸ **getChildren**(): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

**Returns:** `string`

___
<a id="getparent"></a>

###  getParent

▸ **getParent**(): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="getrange"></a>

###  getRange

▸ **getRange**(): [AntlrRange](../modules/_types_types_.md#antlrrange)

**Returns:** [AntlrRange](../modules/_types_types_.md#antlrrange)

___
<a id="getrule"></a>

###  getRule

▸ **getRule**(): `ParserRuleContext`

**Returns:** `ParserRuleContext`

___
<a id="getsiblings"></a>

###  getSiblings

▸ **getSiblings**(): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

**Returns:** `string`

___
<a id="gettoken"></a>

###  getToken

▸ **getToken**(tokenRuleName?: *`string`*): [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` tokenRuleName | `string` |

**Returns:** [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md)

___
<a id="gettokens"></a>

###  getTokens

▸ **getTokens**(tokenRuleName?: *`string`*): [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` tokenRuleName | `string` |

**Returns:** [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md)[]

___
<a id="hastoken"></a>

###  hasToken

▸ **hasToken**(tokenRuleName: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| tokenRuleName | `string` |

**Returns:** `boolean`

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

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___

