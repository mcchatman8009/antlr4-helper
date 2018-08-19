[antlr4-helper](../README.md) > ["parser/antlr-rule-wrapper"](../modules/_parser_antlr_rule_wrapper_.md) > [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

# Interface: AntlrRuleWrapper

## Hierarchy

**AntlrRuleWrapper**

## Implemented by

* [ImmutableAntlrRuleWrapper](../classes/_parser_immutable_antlr_rule_wrapper_.immutableantlrrulewrapper.md)
* [MutableAntlrRuleWrapper](../classes/_parser_mutable_antlr_rule_wrapper_.mutableantlrrulewrapper.md)

## Index

### Methods

* [createRuleError](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#createruleerror)
* [exists](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#exists)
* [findRuleByName](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#findrulebyname)
* [findRuleByPath](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#findrulebypath)
* [findRulesByName](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#findrulesbyname)
* [findRulesByPath](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#findrulesbypath)
* [getChildren](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#getchildren)
* [getName](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#getname)
* [getParent](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#getparent)
* [getRange](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#getrange)
* [getRule](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#getrule)
* [getSiblings](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#getsiblings)
* [getText](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#gettext)
* [getToken](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#gettoken)
* [getTokens](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#gettokens)
* [hasToken](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#hastoken)
* [inRange](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#inrange)
* [setText](_parser_antlr_rule_wrapper_.antlrrulewrapper.md#settext)

---

## Methods

<a id="createruleerror"></a>

###  createRuleError

▸ **createRuleError**(): [AntlrRuleError](../classes/_parser_antlr_rule_error_.antlrruleerror.md)

**Returns:** [AntlrRuleError](../classes/_parser_antlr_rule_error_.antlrruleerror.md)

___
<a id="exists"></a>

###  exists

▸ **exists**(): `boolean`

**Returns:** `boolean`

___
<a id="findrulebyname"></a>

###  findRuleByName

▸ **findRuleByName**(ruleName: *`string`*): [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |

**Returns:** [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="findrulebypath"></a>

###  findRuleByPath

▸ **findRuleByPath**(xpath: *`string`*): [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| xpath | `string` |

**Returns:** [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="findrulesbyname"></a>

###  findRulesByName

▸ **findRulesByName**(ruleName: *`string`*): [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |

**Returns:** [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="findrulesbypath"></a>

###  findRulesByPath

▸ **findRulesByPath**(xpath: *`string`*): [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| xpath | `string` |

**Returns:** [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="getchildren"></a>

###  getChildren

▸ **getChildren**(): [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Returns:** [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

**Returns:** `string`

___
<a id="getparent"></a>

###  getParent

▸ **getParent**(): [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Returns:** [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

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

▸ **getSiblings**(): [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Returns:** [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

**Returns:** `string`

___
<a id="gettoken"></a>

###  getToken

▸ **getToken**(tokenRuleName?: *`string`*): [AntlrTokenWrapper](_parser_antlr_token_wrapper_.antlrtokenwrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` tokenRuleName | `string` |

**Returns:** [AntlrTokenWrapper](_parser_antlr_token_wrapper_.antlrtokenwrapper.md)

___
<a id="gettokens"></a>

###  getTokens

▸ **getTokens**(tokenRuleName?: *`string`*): [AntlrTokenWrapper](_parser_antlr_token_wrapper_.antlrtokenwrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` tokenRuleName | `string` |

**Returns:** [AntlrTokenWrapper](_parser_antlr_token_wrapper_.antlrtokenwrapper.md)[]

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

▸ **inRange**(point: *`object`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| point | `object` |

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

