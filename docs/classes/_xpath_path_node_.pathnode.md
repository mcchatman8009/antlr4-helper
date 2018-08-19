[antlr4-helper](../README.md) > ["xpath/path-node"](../modules/_xpath_path_node_.md) > [PathNode](../classes/_xpath_path_node_.pathnode.md)

# Class: PathNode

## Hierarchy

**PathNode**

## Index

### Constructors

* [constructor](_xpath_path_node_.pathnode.md#constructor)

### Properties

* [axisSpecifier](_xpath_path_node_.pathnode.md#axisspecifier)
* [isParent](_xpath_path_node_.pathnode.md#isparent)
* [isRoot](_xpath_path_node_.pathnode.md#isroot)
* [isSingleDot](_xpath_path_node_.pathnode.md#issingledot)
* [name](_xpath_path_node_.pathnode.md#name)
* [predicateRule](_xpath_path_node_.pathnode.md#predicaterule)
* [selectAllDescendants](_xpath_path_node_.pathnode.md#selectalldescendants)

### Methods

* [callPredicateFunction](_xpath_path_node_.pathnode.md#callpredicatefunction)
* [evaluateExpr](_xpath_path_node_.pathnode.md#evaluateexpr)
* [testNodeWithPredicate](_xpath_path_node_.pathnode.md#testnodewithpredicate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PathNode**(isRoot: *`boolean`*, name: *`string`*, axisSpecifier: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*, selectAllDescendants: *`boolean`*, isSingleDot: *`boolean`*, isParent: *`boolean`*, predicateRule: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*): [PathNode](_xpath_path_node_.pathnode.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| isRoot | `boolean` |
| name | `string` |
| axisSpecifier | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |
| selectAllDescendants | `boolean` |
| isSingleDot | `boolean` |
| isParent | `boolean` |
| predicateRule | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |

**Returns:** [PathNode](_xpath_path_node_.pathnode.md)

___

## Properties

<a id="axisspecifier"></a>

###  axisSpecifier

**● axisSpecifier**: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*

___
<a id="isparent"></a>

###  isParent

**● isParent**: *`boolean`*

___
<a id="isroot"></a>

###  isRoot

**● isRoot**: *`boolean`*

___
<a id="issingledot"></a>

###  isSingleDot

**● isSingleDot**: *`boolean`*

___
<a id="name"></a>

###  name

**● name**: *`string`*

___
<a id="predicaterule"></a>

### `<Private>` predicateRule

**● predicateRule**: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*

___
<a id="selectalldescendants"></a>

###  selectAllDescendants

**● selectAllDescendants**: *`boolean`*

___

## Methods

<a id="callpredicatefunction"></a>

###  callPredicateFunction

▸ **callPredicateFunction**(functionCall: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*, rule: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*, index: *`number`*, numberOfElement: *`number`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| functionCall | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |
| rule | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |
| index | `number` |
| numberOfElement | `number` |

**Returns:** `boolean`

___
<a id="evaluateexpr"></a>

###  evaluateExpr

▸ **evaluateExpr**(expr: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*, rule: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*, index: *`number`*, numberOfElement: *`number`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| expr | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |
| rule | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |
| index | `number` |
| numberOfElement | `number` |

**Returns:** `any`

___
<a id="testnodewithpredicate"></a>

###  testNodeWithPredicate

▸ **testNodeWithPredicate**(rule: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*, index: *`number`*, numberOfElement: *`number`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |
| index | `number` |
| numberOfElement | `number` |

**Returns:** `boolean`

___

