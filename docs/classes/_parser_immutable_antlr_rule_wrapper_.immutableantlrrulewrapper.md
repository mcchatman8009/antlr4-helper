[antlr4-helper](../README.md) > ["parser/immutable-antlr-rule-wrapper"](../modules/_parser_immutable_antlr_rule_wrapper_.md) > [ImmutableAntlrRuleWrapper](../classes/_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md)

# Class: ImmutableAntlrRuleWrapper

## Hierarchy

**ImmutableAntlrRuleWrapper**

## Implements

* [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

## Index

### Constructors

* [constructor](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#constructor)

### Properties

* [fixedRange](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#fixedrange)
* [parser](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#parser)
* [rule](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#rule)

### Methods

* [createRuleError](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#createruleerror)
* [exists](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#exists)
* [getChildren](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getchildren)
* [getName](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getname)
* [getParent](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getparent)
* [getRange](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getrange)
* [getRule](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getrule)
* [getSiblings](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getsiblings)
* [getText](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#gettext)
* [getToken](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#gettoken)
* [getTokens](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#gettokens)
* [hasToken](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#hastoken)
* [inRange](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#inrange)
* [setText](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#settext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ImmutableAntlrRuleWrapper**(rule: *`ParserRuleContext`*, parser: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*, fixedRange?: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): [ImmutableAntlrRuleWrapper](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| parser | [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md) |
| `Optional` fixedRange | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** [ImmutableAntlrRuleWrapper](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md)

___

## Properties

<a id="fixedrange"></a>

### `<Private>``<Optional>` fixedRange

**● fixedRange**: *[AntlrRange](../modules/_types_types_.md#antlrrange)*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*

___
<a id="rule"></a>

### `<Private>` rule

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

