[antlr4-helper](../README.md) > ["parser/antlr-parser"](../modules/_parser_antlr_parser_.md) > [AntlrParser](../classes/_parser_antlr_parser_.antlrparser.md)

# Class: AntlrParser

## Hierarchy

**AntlrParser**

## Implements

* `ParseTreeListener`

## Index

### Constructors

* [constructor](_parser_antlr_parser_.antlrparser.md#constructor)

### Properties

* [customValidatorSubject](_parser_antlr_parser_.antlrparser.md#customvalidatorsubject)
* [enterRuleSubject](_parser_antlr_parser_.antlrparser.md#enterrulesubject)
* [errorHandler](_parser_antlr_parser_.antlrparser.md#errorhandler)
* [exitRuleSubject](_parser_antlr_parser_.antlrparser.md#exitrulesubject)
* [factory](_parser_antlr_parser_.antlrparser.md#factory)
* [inputStream](_parser_antlr_parser_.antlrparser.md#inputstream)
* [parserWrapper](_parser_antlr_parser_.antlrparser.md#parserwrapper)
* [ruleTable](_parser_antlr_parser_.antlrparser.md#ruletable)
* [tokenTable](_parser_antlr_parser_.antlrparser.md#tokentable)

### Methods

* [addCustomRuleValidator](_parser_antlr_parser_.antlrparser.md#addcustomrulevalidator)
* [addEnterRuleListener](_parser_antlr_parser_.antlrparser.md#addenterrulelistener)
* [addExitRuleListener](_parser_antlr_parser_.antlrparser.md#addexitrulelistener)
* [checkForErrors](_parser_antlr_parser_.antlrparser.md#checkforerrors)
* [createRuleError](_parser_antlr_parser_.antlrparser.md#createruleerror)
* [doesRuleMatchClass](_parser_antlr_parser_.antlrparser.md#doesrulematchclass)
* [enterEveryRule](_parser_antlr_parser_.antlrparser.md#entereveryrule)
* [exitEveryRule](_parser_antlr_parser_.antlrparser.md#exiteveryrule)
* [getErrorRuleTable](_parser_antlr_parser_.antlrparser.md#geterrorruletable)
* [getErrors](_parser_antlr_parser_.antlrparser.md#geterrors)
* [getRelevantError](_parser_antlr_parser_.antlrparser.md#getrelevanterror)
* [getRuleAt](_parser_antlr_parser_.antlrparser.md#getruleat)
* [getRuleName](_parser_antlr_parser_.antlrparser.md#getrulename)
* [getRuleParent](_parser_antlr_parser_.antlrparser.md#getruleparent)
* [getRulePositionTable](_parser_antlr_parser_.antlrparser.md#getrulepositiontable)
* [getRuleRange](_parser_antlr_parser_.antlrparser.md#getrulerange)
* [getRuleText](_parser_antlr_parser_.antlrparser.md#getruletext)
* [getSiblings](_parser_antlr_parser_.antlrparser.md#getsiblings)
* [getTokenAt](_parser_antlr_parser_.antlrparser.md#gettokenat)
* [getTokenName](_parser_antlr_parser_.antlrparser.md#gettokenname)
* [getTokenPositionTable](_parser_antlr_parser_.antlrparser.md#gettokenpositiontable)
* [getTokenRange](_parser_antlr_parser_.antlrparser.md#gettokenrange)
* [getTokenText](_parser_antlr_parser_.antlrparser.md#gettokentext)
* [getWarnings](_parser_antlr_parser_.antlrparser.md#getwarnings)
* [hasErrorNode](_parser_antlr_parser_.antlrparser.md#haserrornode)
* [hasErrors](_parser_antlr_parser_.antlrparser.md#haserrors)
* [hasWarnings](_parser_antlr_parser_.antlrparser.md#haswarnings)
* [parse](_parser_antlr_parser_.antlrparser.md#parse)
* [previousSiblings](_parser_antlr_parser_.antlrparser.md#previoussiblings)
* [siblingsHaveNoErrors](_parser_antlr_parser_.antlrparser.md#siblingshavenoerrors)
* [visitErrorNode](_parser_antlr_parser_.antlrparser.md#visiterrornode)
* [visitTerminal](_parser_antlr_parser_.antlrparser.md#visitterminal)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AntlrParser**(factory: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*): [AntlrParser](_parser_antlr_parser_.antlrparser.md)

Provide an AntlrFactory to construct

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| factory | [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md) |   |

**Returns:** [AntlrParser](_parser_antlr_parser_.antlrparser.md)

___

## Properties

<a id="customvalidatorsubject"></a>

### `<Private>` customValidatorSubject

**● customValidatorSubject**: *`Subject`<`ParserRuleContext`>*

___
<a id="enterrulesubject"></a>

### `<Private>` enterRuleSubject

**● enterRuleSubject**: *`Subject`<`ParserRuleContext`>*

___
<a id="errorhandler"></a>

### `<Private>` errorHandler

**● errorHandler**: *[ErrorRuleHandler](_parser_error_rule_handler_.errorrulehandler.md)*

___
<a id="exitrulesubject"></a>

### `<Private>` exitRuleSubject

**● exitRuleSubject**: *`Subject`<`ParserRuleContext`>*

___
<a id="factory"></a>

### `<Private>` factory

**● factory**: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*

___
<a id="inputstream"></a>

### `<Private>` inputStream

**● inputStream**: *`InputStream`*

___
<a id="parserwrapper"></a>

### `<Private>` parserWrapper

**● parserWrapper**: *[AntlrParserWrapper](_parser_antlr_parser_wrapper_.antlrparserwrapper.md)*

___
<a id="ruletable"></a>

### `<Private>` ruleTable

**● ruleTable**: *[RuleTable](_parser_rule_table_.ruletable.md)*

___
<a id="tokentable"></a>

### `<Private>` tokenTable

**● tokenTable**: *[TokenTable](_parser_token_table_.tokentable.md)*

___

## Methods

<a id="addcustomrulevalidator"></a>

###  addCustomRuleValidator

▸ **addCustomRuleValidator**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`>*, validator: *`function`*): `void`

**Type parameters:**

#### T :  `ParserRuleContext`
**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`> |
| validator | `function` |

**Returns:** `void`

___
<a id="addenterrulelistener"></a>

###  addEnterRuleListener

▸ **addEnterRuleListener**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`>*, listener: *`function`*): `void`

Add a listener for when the parser enters a given rule. See example below

*__example__*:   

```
parser.addEnterRuleListener(ExpressionContext, (rule)=>{
    console.log("entering an expression rule");
})
```

**Type parameters:**

#### T :  `ParserRuleContext`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`> |  - |
| listener | `function` |   |

**Returns:** `void`

___
<a id="addexitrulelistener"></a>

###  addExitRuleListener

▸ **addExitRuleListener**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`>*, listener: *`function`*): `void`

Add a listener for when the parser exits a given rule. See example below

*__example__*:   

```
parser.addExitRuleListener(ExpressionContext, (rule)=>{
    console.log(parser.getRuleText(rule));
})
```

**Type parameters:**

#### T :  `ParserRuleContext`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`> |  - |
| listener | `function` |   |

**Returns:** `void`

___
<a id="checkforerrors"></a>

###  checkForErrors

▸ **checkForErrors**(): `void`

**Returns:** `void`

___
<a id="createruleerror"></a>

###  createRuleError

▸ **createRuleError**(rule: *`ParserRuleContext`*): [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

___
<a id="doesrulematchclass"></a>

###  doesRuleMatchClass

▸ **doesRuleMatchClass**(rule: *`ParserRuleContext`*, ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`any`>*): `boolean`

Checks if a rule matches the ruleClass given

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`any`> |  - |

**Returns:** `boolean`

___
<a id="entereveryrule"></a>

###  enterEveryRule

▸ **enterEveryRule**(ctx: *`ParserRuleContext`*): `void`

(For internal use only)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `ParserRuleContext` |   |

**Returns:** `void`

___
<a id="exiteveryrule"></a>

###  exitEveryRule

▸ **exitEveryRule**(ctx: *`ParserRuleContext`*): `void`

(For internal use only)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `ParserRuleContext` |   |

**Returns:** `void`

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
<a id="getrelevanterror"></a>

###  getRelevantError

▸ **getRelevantError**(): [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

**Returns:** [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

___
<a id="getruleat"></a>

###  getRuleAt

▸ **getRuleAt**(column: *`number`*, line: *`number`*):  [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md) &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |

**Returns:**  [AntlrRuleWrapper](_parser_antlr_rule_wrapper_.antlrrulewrapper.md) &#124; `undefined`

___
<a id="getrulename"></a>

###  getRuleName

▸ **getRuleName**(rule: *`ParserRuleContext`*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `string`

___
<a id="getruleparent"></a>

###  getRuleParent

▸ **getRuleParent**(rule: *`ParserRuleContext`*): `ParserRuleContext`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `ParserRuleContext`

___
<a id="getrulepositiontable"></a>

###  getRulePositionTable

▸ **getRulePositionTable**(): `ParserRuleContext`[][]

**Returns:** `ParserRuleContext`[][]

___
<a id="getrulerange"></a>

###  getRuleRange

▸ **getRuleRange**(rule: *`ParserRuleContext`*): [AntlrRange](../modules/_types_types_.md#antlrrange)

Get the range of a given rule, where the first object is the start position and the last is the end position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |

**Returns:** [AntlrRange](../modules/_types_types_.md#antlrrange)

___
<a id="getruletext"></a>

###  getRuleText

▸ **getRuleText**(rule: *`ParserRuleContext`*): `string`

Get the complete text of a completely parsed rule

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |

**Returns:** `string`

___
<a id="getsiblings"></a>

###  getSiblings

▸ **getSiblings**(rule: *`ParserRuleContext`*): `ParserRuleContext`[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `ParserRuleContext`[]

___
<a id="gettokenat"></a>

###  getTokenAt

▸ **getTokenAt**(column: *`number`*, line: *`number`*):  [AntlrTokenWrapper](_parser_antlr_token_wrapper_.antlrtokenwrapper.md) &#124; `undefined`

Retrieve a token a the specified position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| column | `number` |  - |
| line | `number` |  - |

**Returns:**  [AntlrTokenWrapper](_parser_antlr_token_wrapper_.antlrtokenwrapper.md) &#124; `undefined`

___
<a id="gettokenname"></a>

###  getTokenName

▸ **getTokenName**(token: *`Token`*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `Token` |

**Returns:** `string`

___
<a id="gettokenpositiontable"></a>

###  getTokenPositionTable

▸ **getTokenPositionTable**(): `Token`[][]

**Returns:** `Token`[][]

___
<a id="gettokenrange"></a>

###  getTokenRange

▸ **getTokenRange**(token: * `Token` &#124; `TerminalNode`*): [AntlrRange](../modules/_types_types_.md#antlrrange)

Get the range of a given token, where the first object is the start position and the last is the end position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token |  `Token` &#124; `TerminalNode`|  - |

**Returns:** [AntlrRange](../modules/_types_types_.md#antlrrange)

___
<a id="gettokentext"></a>

###  getTokenText

▸ **getTokenText**(token: * `Token` &#124; `TerminalNode`*): `string`

Get the text of a given token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token |  `Token` &#124; `TerminalNode`|  - |

**Returns:** `string`

___
<a id="getwarnings"></a>

###  getWarnings

▸ **getWarnings**(): [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)[]

**Returns:** [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)[]

___
<a id="haserrornode"></a>

###  hasErrorNode

▸ **hasErrorNode**(ctx: *`ParserRuleContext`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ctx | `ParserRuleContext` |

**Returns:** `boolean`

___
<a id="haserrors"></a>

###  hasErrors

▸ **hasErrors**(): `boolean`

**Returns:** `boolean`

___
<a id="haswarnings"></a>

###  hasWarnings

▸ **hasWarnings**(): `boolean`

**Returns:** `boolean`

___
<a id="parse"></a>

###  parse

▸ **parse**(input: *`string`*): `ParserRuleContext`

Parse the input string

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string` |  - |

**Returns:** `ParserRuleContext`
- the invoked root rule

___
<a id="previoussiblings"></a>

###  previousSiblings

▸ **previousSiblings**(rule: *`ParserRuleContext`*): `ParserRuleContext`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `ParserRuleContext`

___
<a id="siblingshavenoerrors"></a>

###  siblingsHaveNoErrors

▸ **siblingsHaveNoErrors**(rule: *`ParserRuleContext`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `boolean`

___
<a id="visiterrornode"></a>

###  visitErrorNode

▸ **visitErrorNode**(node: *`ErrorNode`*): `void`

(For internal use only)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `ErrorNode` |   |

**Returns:** `void`

___
<a id="visitterminal"></a>

###  visitTerminal

▸ **visitTerminal**(node: *`TerminalNode`*): `void`

(For internal use only)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `TerminalNode` |   |

**Returns:** `void`

___

