[antlr4-helper](../README.md) > ["parser/lex-error-handler"](../modules/_parser_lex_error_handler_.md) > [LexErrorHandler](../classes/_parser_lex_error_handler_.lexerrorhandler.md)

# Class: LexErrorHandler

## Hierarchy

 `ErrorListener`

**↳ LexErrorHandler**

## Index

### Constructors

* [constructor](_parser_lex_error_handler_.lexerrorhandler.md#constructor)

### Properties

* [errorHandler](_parser_lex_error_handler_.lexerrorhandler.md#errorhandler)

### Methods

* [reportAmbiguity](_parser_lex_error_handler_.lexerrorhandler.md#reportambiguity)
* [reportAttemptingFullContext](_parser_lex_error_handler_.lexerrorhandler.md#reportattemptingfullcontext)
* [reportContextSensitivity](_parser_lex_error_handler_.lexerrorhandler.md#reportcontextsensitivity)
* [syntaxError](_parser_lex_error_handler_.lexerrorhandler.md#syntaxerror)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new LexErrorHandler**(errorHandler: *[ErrorRuleHandler](_parser_error_rule_handler_.errorrulehandler.md)*): [LexErrorHandler](_parser_lex_error_handler_.lexerrorhandler.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| errorHandler | [ErrorRuleHandler](_parser_error_rule_handler_.errorrulehandler.md) |

**Returns:** [LexErrorHandler](_parser_lex_error_handler_.lexerrorhandler.md)

___

## Properties

<a id="errorhandler"></a>

### `<Private>` errorHandler

**● errorHandler**: *[ErrorRuleHandler](_parser_error_rule_handler_.errorrulehandler.md)*

___

## Methods

<a id="reportambiguity"></a>

###  reportAmbiguity

▸ **reportAmbiguity**(recognizer: *`Recognizer`*, dfa: *`any`*, startIndex: *`number`*, stopIndex: *`number`*, exact: *`any`*, ambigAlts: *`any`*, configs: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recognizer | `Recognizer` |
| dfa | `any` |
| startIndex | `number` |
| stopIndex | `number` |
| exact | `any` |
| ambigAlts | `any` |
| configs | `any` |

**Returns:** `void`

___
<a id="reportattemptingfullcontext"></a>

###  reportAttemptingFullContext

▸ **reportAttemptingFullContext**(recognizer: *`Recognizer`*, dfa: *`any`*, startIndex: *`number`*, stopIndex: *`number`*, conflictingAlts: *`any`*, configs: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recognizer | `Recognizer` |
| dfa | `any` |
| startIndex | `number` |
| stopIndex | `number` |
| conflictingAlts | `any` |
| configs | `any` |

**Returns:** `void`

___
<a id="reportcontextsensitivity"></a>

###  reportContextSensitivity

▸ **reportContextSensitivity**(recognizer: *`Recognizer`*, dfa: *`any`*, startIndex: *`number`*, stopIndex: *`number`*, conflictingAlts: *`any`*, configs: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recognizer | `Recognizer` |
| dfa | `any` |
| startIndex | `number` |
| stopIndex | `number` |
| conflictingAlts | `any` |
| configs | `any` |

**Returns:** `void`

___
<a id="syntaxerror"></a>

###  syntaxError

▸ **syntaxError**(recognizer: *`Recognizer`*, offendingSymbol: *`Token`*, line: *`number`*, column: *`number`*, msg: *`string`*, e: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recognizer | `Recognizer` |
| offendingSymbol | `Token` |
| line | `number` |
| column | `number` |
| msg | `string` |
| e | `any` |

**Returns:** `void`

___

