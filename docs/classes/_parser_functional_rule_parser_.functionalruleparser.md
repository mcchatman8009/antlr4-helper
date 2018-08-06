[antlr4-helper](../README.md) > ["parser/functional-rule-parser"](../modules/_parser_functional_rule_parser_.md) > [FunctionalRuleParser](../classes/_parser_functional_rule_parser_.functionalruleparser.md)

# Class: FunctionalRuleParser

## Hierarchy

**FunctionalRuleParser**

## Index

### Constructors

* [constructor](_parser_functional_rule_parser_.functionalruleparser.md#constructor)

### Properties

* [_stack](_parser_functional_rule_parser_.functionalruleparser.md#_stack)
* [parser](_parser_functional_rule_parser_.functionalruleparser.md#parser)
* [stackHasChanged](_parser_functional_rule_parser_.functionalruleparser.md#stackhaschanged)

### Accessors

* [stack](_parser_functional_rule_parser_.functionalruleparser.md#stack)

### Methods

* [every](_parser_functional_rule_parser_.functionalruleparser.md#every)
* [filter](_parser_functional_rule_parser_.functionalruleparser.md#filter)
* [find](_parser_functional_rule_parser_.functionalruleparser.md#find)
* [findAll](_parser_functional_rule_parser_.functionalruleparser.md#findall)
* [findLast](_parser_functional_rule_parser_.functionalruleparser.md#findlast)
* [forEach](_parser_functional_rule_parser_.functionalruleparser.md#foreach)
* [map](_parser_functional_rule_parser_.functionalruleparser.md#map)
* [reduce](_parser_functional_rule_parser_.functionalruleparser.md#reduce)
* [resetStack](_parser_functional_rule_parser_.functionalruleparser.md#resetstack)
* [wrapRule](_parser_functional_rule_parser_.functionalruleparser.md#wraprule)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FunctionalRuleParser**(parser: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*): [FunctionalRuleParser](_parser_functional_rule_parser_.functionalruleparser.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md) |

**Returns:** [FunctionalRuleParser](_parser_functional_rule_parser_.functionalruleparser.md)

___

## Properties

<a id="_stack"></a>

### `<Private>` _stack

**● _stack**: *`ParserRuleContext`[]*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*

___
<a id="stackhaschanged"></a>

### `<Private>` stackHasChanged

**● stackHasChanged**: *`boolean`*

___

## Accessors

<a id="stack"></a>

### `<Private>` stack

getstack(): `ParserRuleContext`[]

**Returns:** `ParserRuleContext`[]

___

## Methods

<a id="every"></a>

###  every

▸ **every**(predicate: *`function`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| predicate | `function` |

**Returns:** `boolean`

___
<a id="filter"></a>

###  filter

▸ **filter**(filterFunction: *`function`*): [FunctionalRuleParser](_parser_functional_rule_parser_.functionalruleparser.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [FunctionalRuleParser](_parser_functional_rule_parser_.functionalruleparser.md)

___
<a id="find"></a>

###  find

▸ **find**(filterFunction: *`function`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="findall"></a>

###  findAll

▸ **findAll**(filterFunction: *`function`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="findlast"></a>

###  findLast

▸ **findLast**(filterFunction: *`function`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="foreach"></a>

###  forEach

▸ **forEach**T(eachFunction: *`function`*): `void`

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| eachFunction | `function` |

**Returns:** `void`

___
<a id="map"></a>

###  map

▸ **map**T(mapFunction: *`function`*): `T`[]

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| mapFunction | `function` |

**Returns:** `T`[]

___
<a id="reduce"></a>

###  reduce

▸ **reduce**T(reduceFunction: *`function`*, accumulator: *`T`*): `T`

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| reduceFunction | `function` |
| accumulator | `T` |

**Returns:** `T`

___
<a id="resetstack"></a>

### `<Private>` resetStack

▸ **resetStack**(): `void`

**Returns:** `void`

___
<a id="wraprule"></a>

### `<Private>` wrapRule

▸ **wrapRule**(rule: *`ParserRuleContext`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___

