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

* [parser](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#parser)
* [rule](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#rule)

### Methods

* [getName](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getname)
* [getParent](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getparent)
* [getRange](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getrange)
* [getRule](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getrule)
* [getSiblings](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#getsiblings)
* [getText](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#gettext)
* [setText](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md#settext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ImmutableAntlrRuleWrapper**(rule: *`ParserRuleContext`*, parser: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*): [ImmutableAntlrRuleWrapper](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| parser | [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md) |

**Returns:** [ImmutableAntlrRuleWrapper](_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md)

___

## Properties

<a id="parser"></a>

### `<Private>` parser

**● parser**: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*

___
<a id="rule"></a>

### `<Private>` rule

**● rule**: *`ParserRuleContext`*

___

## Methods

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
<a id="settext"></a>

###  setText

▸ **setText**(text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___

