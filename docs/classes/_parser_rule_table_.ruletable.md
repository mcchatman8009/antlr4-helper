[antlr4-helper](../README.md) > ["parser/rule-table"](../modules/_parser_rule_table_.md) > [RuleTable](../classes/_parser_rule_table_.ruletable.md)

# Class: RuleTable

## Hierarchy

**RuleTable**

## Index

### Constructors

* [constructor](_parser_rule_table_.ruletable.md#constructor)

### Properties

* [buffer](_parser_rule_table_.ruletable.md#buffer)
* [ruleTable](_parser_rule_table_.ruletable.md#ruletable)

### Methods

* [addRule](_parser_rule_table_.ruletable.md#addrule)
* [getRuleAt](_parser_rule_table_.ruletable.md#getruleat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RuleTable**(buffer: *`TextBuffer`*): [RuleTable](_parser_rule_table_.ruletable.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `TextBuffer` |

**Returns:** [RuleTable](_parser_rule_table_.ruletable.md)

___

## Properties

<a id="buffer"></a>

### `<Private>` buffer

**● buffer**: *`TextBuffer`*

___
<a id="ruletable"></a>

###  ruleTable

**● ruleTable**: *`ParserRuleContext`[][]*

___

## Methods

<a id="addrule"></a>

###  addRule

▸ **addRule**(rule: *`ParserRuleContext`*, range: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| range | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** `void`

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

