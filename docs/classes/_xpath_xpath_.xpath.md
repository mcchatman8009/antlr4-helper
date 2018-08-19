[antlr4-helper](../README.md) > ["xpath/xpath"](../modules/_xpath_xpath_.md) > [XPath](../classes/_xpath_xpath_.xpath.md)

# Class: XPath

## Hierarchy

**XPath**

## Index

### Constructors

* [constructor](_xpath_xpath_.xpath.md#constructor)

### Properties

* [root](_xpath_xpath_.xpath.md#root)
* [xpathParser](_xpath_xpath_.xpath.md#xpathparser)

### Methods

* [createPathExprs](_xpath_xpath_.xpath.md#createpathexprs)
* [createXPathParser](_xpath_xpath_.xpath.md#createxpathparser)
* [findRulesByPath](_xpath_xpath_.xpath.md#findrulesbypath)
* [isAbsolutePath](_xpath_xpath_.xpath.md#isabsolutepath)
* [processPathExpr](_xpath_xpath_.xpath.md#processpathexpr)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new XPath**(root: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*): [XPath](_xpath_xpath_.xpath.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| root | [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) |

**Returns:** [XPath](_xpath_xpath_.xpath.md)

___

## Properties

<a id="root"></a>

### `<Private>` root

**● root**: *[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)*

___
<a id="xpathparser"></a>

### `<Private>` xpathParser

**● xpathParser**: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*

___

## Methods

<a id="createpathexprs"></a>

### `<Private>` createPathExprs

▸ **createPathExprs**(): [PathExpr](_xpath_path_expr_.pathexpr.md)[]

**Returns:** [PathExpr](_xpath_path_expr_.pathexpr.md)[]

___
<a id="createxpathparser"></a>

### `<Private>` createXPathParser

▸ **createXPathParser**(): [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)

**Returns:** [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)

___
<a id="findrulesbypath"></a>

###  findRulesByPath

▸ **findRulesByPath**(path: *`string`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="isabsolutepath"></a>

###  isAbsolutePath

▸ **isAbsolutePath**(): `boolean`

**Returns:** `boolean`

___
<a id="processpathexpr"></a>

### `<Private>` processPathExpr

▸ **processPathExpr**(pathExpr: *[PathExpr](_xpath_path_expr_.pathexpr.md)*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| pathExpr | [PathExpr](_xpath_path_expr_.pathexpr.md) |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___

