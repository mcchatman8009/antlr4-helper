[antlr4-helper](../README.md) > ["parser/token-table"](../modules/_parser_token_table_.md) > [TokenTable](../classes/_parser_token_table_.tokentable.md)

# Class: TokenTable

## Hierarchy

**TokenTable**

## Index

### Constructors

* [constructor](_parser_token_table_.tokentable.md#constructor)

### Properties

* [buffer](_parser_token_table_.tokentable.md#buffer)
* [parser](_parser_token_table_.tokentable.md#parser)
* [tokenMap](_parser_token_table_.tokentable.md#tokenmap)
* [tokenTable](_parser_token_table_.tokentable.md#tokentable)

### Methods

* [addToken](_parser_token_table_.tokentable.md#addtoken)
* [clearRange](_parser_token_table_.tokentable.md#clearrange)
* [getTokenAt](_parser_token_table_.tokentable.md#gettokenat)
* [insertToken](_parser_token_table_.tokentable.md#inserttoken)
* [recomputeRanges](_parser_token_table_.tokentable.md#recomputeranges)
* [updateToken](_parser_token_table_.tokentable.md#updatetoken)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TokenTable**(buffer: *`TextBuffer`*, parser: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*): [TokenTable](_parser_token_table_.tokentable.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `TextBuffer` |
| parser | [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md) |

**Returns:** [TokenTable](_parser_token_table_.tokentable.md)

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
<a id="tokenmap"></a>

###  tokenMap

**● tokenMap**: *`Map`<`Token`, `MutableTextRange`>*

___
<a id="tokentable"></a>

###  tokenTable

**● tokenTable**: *`Token`[][]*

___

## Methods

<a id="addtoken"></a>

###  addToken

▸ **addToken**(token: *`Token`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `Token` |

**Returns:** `void`

___
<a id="clearrange"></a>

### `<Private>` clearRange

▸ **clearRange**(range: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): `object`

**Parameters:**

| Param | Type |
| ------ | ------ |
| range | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** `object`

___
<a id="gettokenat"></a>

###  getTokenAt

▸ **getTokenAt**(column: *`number`*, line: *`number`*):  `Token` &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |

**Returns:**  `Token` &#124; `undefined`

___
<a id="inserttoken"></a>

### `<Private>` insertToken

▸ **insertToken**(column: *`number`*, line: *`number`*, currentRuleText: *`string`*, token: *`Token`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |
| currentRuleText | `string` |
| token | `Token` |

**Returns:** `void`

___
<a id="recomputeranges"></a>

### `<Private>` recomputeRanges

▸ **recomputeRanges**(): `void`

**Returns:** `void`

___
<a id="updatetoken"></a>

###  updateToken

▸ **updateToken**(originalRange: *[AntlrRange](../modules/_types_types_.md#antlrrange)*, token: *`Token`*, ruleText: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| originalRange | [AntlrRange](../modules/_types_types_.md#antlrrange) |
| token | `Token` |
| ruleText | `string` |

**Returns:** `void`

___

