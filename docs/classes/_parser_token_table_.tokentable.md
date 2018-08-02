[antlr4-helper](../README.md) > ["parser/token-table"](../modules/_parser_token_table_.md) > [TokenTable](../classes/_parser_token_table_.tokentable.md)

# Class: TokenTable

## Hierarchy

**TokenTable**

## Index

### Constructors

* [constructor](_parser_token_table_.tokentable.md#constructor)

### Properties

* [buffer](_parser_token_table_.tokentable.md#buffer)
* [tokenTable](_parser_token_table_.tokentable.md#tokentable)

### Methods

* [addToken](_parser_token_table_.tokentable.md#addtoken)
* [getTokenAt](_parser_token_table_.tokentable.md#gettokenat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TokenTable**(buffer: *`TextBuffer`*): [TokenTable](_parser_token_table_.tokentable.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `TextBuffer` |

**Returns:** [TokenTable](_parser_token_table_.tokentable.md)

___

## Properties

<a id="buffer"></a>

### `<Private>` buffer

**● buffer**: *`TextBuffer`*

___
<a id="tokentable"></a>

###  tokenTable

**● tokenTable**: *`Token`[][]*

___

## Methods

<a id="addtoken"></a>

###  addToken

▸ **addToken**(token: *`Token`*, range: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `Token` |
| range | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** `void`

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

