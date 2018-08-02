[antlr4-helper](../README.md) > ["parser/error-rule-handler"](../modules/_parser_error_rule_handler_.md) > [ErrorRuleHandler](../classes/_parser_error_rule_handler_.errorrulehandler.md)

# Class: ErrorRuleHandler

## Hierarchy

 `ErrorListener`

**↳ ErrorRuleHandler**

## Index

### Constructors

* [constructor](_parser_error_rule_handler_.errorrulehandler.md#constructor)

### Properties

* [buffer](_parser_error_rule_handler_.errorrulehandler.md#buffer)
* [errors](_parser_error_rule_handler_.errorrulehandler.md#errors)
* [parser](_parser_error_rule_handler_.errorrulehandler.md#parser)
* [ruleTable](_parser_error_rule_handler_.errorrulehandler.md#ruletable)

### Methods

* [addError](_parser_error_rule_handler_.errorrulehandler.md#adderror)
* [buildError](_parser_error_rule_handler_.errorrulehandler.md#builderror)
* [cmp](_parser_error_rule_handler_.errorrulehandler.md#cmp)
* [getErrorRuleAt](_parser_error_rule_handler_.errorrulehandler.md#geterrorruleat)
* [getErrorRuleTable](_parser_error_rule_handler_.errorrulehandler.md#geterrorruletable)
* [getErrors](_parser_error_rule_handler_.errorrulehandler.md#geterrors)
* [getRuleRangeSafely](_parser_error_rule_handler_.errorrulehandler.md#getrulerangesafely)
* [nextColumn](_parser_error_rule_handler_.errorrulehandler.md#nextcolumn)
* [previousColumn](_parser_error_rule_handler_.errorrulehandler.md#previouscolumn)
* [processRecognitionException](_parser_error_rule_handler_.errorrulehandler.md#processrecognitionexception)
* [processRuleWithError](_parser_error_rule_handler_.errorrulehandler.md#processrulewitherror)
* [processRuleWithFailures](_parser_error_rule_handler_.errorrulehandler.md#processrulewithfailures)
* [reportAmbiguity](_parser_error_rule_handler_.errorrulehandler.md#reportambiguity)
* [reportAttemptingFullContext](_parser_error_rule_handler_.errorrulehandler.md#reportattemptingfullcontext)
* [reportContextSensitivity](_parser_error_rule_handler_.errorrulehandler.md#reportcontextsensitivity)
* [syntaxError](_parser_error_rule_handler_.errorrulehandler.md#syntaxerror)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ErrorRuleHandler**(parser: *[AntlrParser](_parser_antlr_parser_.antlrparser.md)*, buffer: *`TextBuffer`*): [ErrorRuleHandler](_parser_error_rule_handler_.errorrulehandler.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | [AntlrParser](_parser_antlr_parser_.antlrparser.md) |
| buffer | `TextBuffer` |

**Returns:** [ErrorRuleHandler](_parser_error_rule_handler_.errorrulehandler.md)

___

## Properties

<a id="buffer"></a>

### `<Private>` buffer

**● buffer**: *`TextBuffer`*

___
<a id="errors"></a>

### `<Private>` errors

**● errors**: *`Map`<`ParserRuleContext`, [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)>*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *[AntlrParser](_parser_antlr_parser_.antlrparser.md)*

___
<a id="ruletable"></a>

### `<Private>` ruleTable

**● ruleTable**: *[RuleTable](_parser_rule_table_.ruletable.md)*

___

## Methods

<a id="adderror"></a>

###  addError

▸ **addError**(error: *[AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md) |

**Returns:** `void`

___
<a id="builderror"></a>

### `<Private>` buildError

▸ **buildError**(rule: *`ParserRuleContext`*, range: *[AntlrRange](../modules/_types_types_.md#antlrrange)*): [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| range | [AntlrRange](../modules/_types_types_.md#antlrrange) |

**Returns:** [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

___
<a id="cmp"></a>

### `<Private>` cmp

▸ **cmp**(a: *`object`*, b: *`object`*): `number`

**Parameters:**

| Param | Type |
| ------ | ------ |
| a | `object` |
| b | `object` |

**Returns:** `number`

___
<a id="geterrorruleat"></a>

###  getErrorRuleAt

▸ **getErrorRuleAt**(column: *`number`*, line: *`number`*): `ParserRuleContext`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |

**Returns:** `ParserRuleContext`

___
<a id="geterrorruletable"></a>

###  getErrorRuleTable

▸ **getErrorRuleTable**(): `ParserRuleContext`[][]

**Returns:** `ParserRuleContext`[][]

___
<a id="geterrors"></a>

###  getErrors

▸ **getErrors**(): [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)[]

**Returns:** [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)[]

___
<a id="getrulerangesafely"></a>

### `<Private>` getRuleRangeSafely

▸ **getRuleRangeSafely**(rule: *`ParserRuleContext`*): [`object`, `object`]

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** [`object`, `object`]

___
<a id="nextcolumn"></a>

### `<Private>` nextColumn

▸ **nextColumn**(position: *`object`*): `object`

**Parameters:**

| Param | Type |
| ------ | ------ |
| position | `object` |

**Returns:** `object`

___
<a id="previouscolumn"></a>

### `<Private>` previousColumn

▸ **previousColumn**(position: *`object`*): `object`

**Parameters:**

| Param | Type |
| ------ | ------ |
| position | `object` |

**Returns:** `object`

___
<a id="processrecognitionexception"></a>

### `<Private>` processRecognitionException

▸ **processRecognitionException**(e: *`RecognitionException`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| e | `RecognitionException` |

**Returns:** `void`

___
<a id="processrulewitherror"></a>

###  processRuleWithError

▸ **processRuleWithError**(rule: *`ParserRuleContext`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `void`

___
<a id="processrulewithfailures"></a>

### `<Private>` processRuleWithFailures

▸ **processRuleWithFailures**(rule: *`ParserRuleContext`*): `void`

Process all the rule along with all it's children. This method's goal is primarily to add the rule into the ruleTable

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |   |

**Returns:** `void`

___
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

(Internal use only)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recognizer | `Recognizer` |  - |
| offendingSymbol | `Token` |  - |
| line | `number` |  - |
| column | `number` |  - |
| msg | `string` |  - |
| e | `any` |   |

**Returns:** `void`

___

