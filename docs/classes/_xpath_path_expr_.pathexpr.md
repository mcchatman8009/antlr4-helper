[antlr4-helper](../README.md) > ["xpath/path-expr"](../modules/_xpath_path_expr_.md) > [PathExpr](../classes/_xpath_path_expr_.pathexpr.md)

# Class: PathExpr

## Hierarchy

**PathExpr**

## Index

### Constructors

* [constructor](_xpath_path_expr_.pathexpr.md#constructor)

### Properties

* [nodes](_xpath_path_expr_.pathexpr.md#nodes)
* [pathRule](_xpath_path_expr_.pathexpr.md#pathrule)

### Methods

* [getNodes](_xpath_path_expr_.pathexpr.md#getnodes)
* [initNodes](_xpath_path_expr_.pathexpr.md#initnodes)
* [isAbsolutePath](_xpath_path_expr_.pathexpr.md#isabsolutepath)
* [isSelectAll](_xpath_path_expr_.pathexpr.md#isselectall)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PathExpr**(pathRule: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*): [PathExpr](_xpath_path_expr_.pathexpr.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| pathRule | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |

**Returns:** [PathExpr](_xpath_path_expr_.pathexpr.md)

___

## Properties

<a id="nodes"></a>

### `<Private>` nodes

**● nodes**: *[PathNode](_xpath_path_node_.pathnode.md)[]*

___
<a id="pathrule"></a>

### `<Private>` pathRule

**● pathRule**: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*

___

## Methods

<a id="getnodes"></a>

###  getNodes

▸ **getNodes**(): [PathNode](_xpath_path_node_.pathnode.md)[]

**Returns:** [PathNode](_xpath_path_node_.pathnode.md)[]

___
<a id="initnodes"></a>

### `<Private>` initNodes

▸ **initNodes**(): `void`

**Returns:** `void`

___
<a id="isabsolutepath"></a>

###  isAbsolutePath

▸ **isAbsolutePath**(): `boolean`

**Returns:** `boolean`

___
<a id="isselectall"></a>

### `<Private>` isSelectAll

▸ **isSelectAll**(token: *[AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md)*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md) |

**Returns:** `boolean`

___

