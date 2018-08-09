[antlr4-helper](../README.md) > ["parser/rule-table"](../modules/_parser_rule_table_.md) > [RuleTable](../classes/_parser_rule_table_.ruletable.md)

# Class: RuleTable

## Hierarchy

**RuleTable**

## Index

### Constructors

* [constructor](_parser_rule_table_.ruletable.md#constructor)

### Properties

* [buffer](_parser_rule_table_.ruletable.md#buffer)
* [parser](_parser_rule_table_.ruletable.md#parser)
* [ruleMap](_parser_rule_table_.ruletable.md#rulemap)
* [ruleTable](_parser_rule_table_.ruletable.md#ruletable)

### Methods

* [addRule](_parser_rule_table_.ruletable.md#addrule)
* [addToRuleMap](_parser_rule_table_.ruletable.md#addtorulemap)
* [computeRulePriority](_parser_rule_table_.ruletable.md#computerulepriority)
* [getRuleAt](_parser_rule_table_.ruletable.md#getruleat)
* [insertRule](_parser_rule_table_.ruletable.md#insertrule)
* [recomputeRanges](_parser_rule_table_.ruletable.md#recomputeranges)
* [removeRange](_parser_rule_table_.ruletable.md#removerange)
* [updateRule](_parser_rule_table_.ruletable.md#updaterule)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RuleTable**(buffer: *`TextBuffer`*, parser: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*): [RuleTable](_parser_rule_table_.ruletable.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `TextBuffer` |
| parser | [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md) |

**Returns:** [RuleTable](_parser_rule_table_.ruletable.md)

___

## Properties

<a id="buffer"></a>

### `<Private>` buffer

**● buffer**: *`TextBuffer`*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*

___
<a id="rulemap"></a>

###  ruleMap

**● ruleMap**: *`Map`<`ParserRuleContext`, `MutableTextRange`>*

___
<a id="ruletable"></a>

###  ruleTable

**● ruleTable**: *`ParserRuleContext`[][]*

___

## Methods

<a id="addrule"></a>

###  addRule

▸ **addRule**(rule: *`ParserRuleContext`*, range?: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| `Optional` range | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** `void`

___
<a id="addtorulemap"></a>

###  addToRuleMap

▸ **addToRuleMap**(rule: *`ParserRuleContext`*, range: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| range | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** `void`

___
<a id="computerulepriority"></a>

###  computeRulePriority

▸ **computeRulePriority**(rule: *`ParserRuleContext`*): `number`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `number`

___
<a id="getruleat"></a>

###  getRuleAt

▸ **getRuleAt**(column: *`number`*, line: *`number`*):  `ParserRuleContext` &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |

**Returns:**  `ParserRuleContext` &#124; `undefined`

___
<a id="insertrule"></a>

### `<Private>` insertRule

▸ **insertRule**(column: *`number`*, line: *`number`*, currentRuleText: *`string`*, rule: *`ParserRuleContext`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |
| currentRuleText | `string` |
| rule | `ParserRuleContext` |

**Returns:** `void`

___
<a id="recomputeranges"></a>

### `<Private>` recomputeRanges

▸ **recomputeRanges**(): [RuleAndRange](_parser_rule_and_range_.ruleandrange.md)[]

**Returns:** [RuleAndRange](_parser_rule_and_range_.ruleandrange.md)[]

___
<a id="removerange"></a>

###  removeRange

▸ **removeRange**(range: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): `object`

**Parameters:**

| Param | Type |
| ------ | ------ |
| range | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** `object`

___
<a id="updaterule"></a>

###  updateRule

▸ **updateRule**(originalRange: *[AntlrRange](../modules/_types_types_.md#antlrrange)*, rule: *`ParserRuleContext`*, ruleText: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| originalRange | [AntlrRange](../modules/_types_types_.md#antlrrange) |
| rule | `ParserRuleContext` |
| ruleText | `string` |

**Returns:** `void`

___

