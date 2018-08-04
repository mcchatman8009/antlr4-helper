[antlr4-helper](../README.md) > ["parser/immutable-antlr-parser"](../modules/_parser_immutable_antlr_parser_.md) > [ImmutableAntlrParser](../classes/_parser_immutable_antlr_parser_.immutableantlrparser.md)

# Class: ImmutableAntlrParser

## Hierarchy

**ImmutableAntlrParser**

## Implements

* `ParseTreeListener`
* [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)

## Index

### Constructors

* [constructor](_parser_immutable_antlr_parser_.immutableantlrparser.md#constructor)

### Properties

* [customValidatorSubject](_parser_immutable_antlr_parser_.immutableantlrparser.md#customvalidatorsubject)
* [enterRuleSubject](_parser_immutable_antlr_parser_.immutableantlrparser.md#enterrulesubject)
* [errorHandler](_parser_immutable_antlr_parser_.immutableantlrparser.md#errorhandler)
* [exitRuleSubject](_parser_immutable_antlr_parser_.immutableantlrparser.md#exitrulesubject)
* [factory](_parser_immutable_antlr_parser_.immutableantlrparser.md#factory)
* [functionalRuleParser](_parser_immutable_antlr_parser_.immutableantlrparser.md#functionalruleparser)
* [inputStream](_parser_immutable_antlr_parser_.immutableantlrparser.md#inputstream)
* [parseCompleteSubject](_parser_immutable_antlr_parser_.immutableantlrparser.md#parsecompletesubject)
* [parserWrapper](_parser_immutable_antlr_parser_.immutableantlrparser.md#parserwrapper)
* [ruleTable](_parser_immutable_antlr_parser_.immutableantlrparser.md#ruletable)
* [stack](_parser_immutable_antlr_parser_.immutableantlrparser.md#stack)
* [textBuffer](_parser_immutable_antlr_parser_.immutableantlrparser.md#textbuffer)
* [tokenSubject](_parser_immutable_antlr_parser_.immutableantlrparser.md#tokensubject)
* [tokenTable](_parser_immutable_antlr_parser_.immutableantlrparser.md#tokentable)

### Methods

* [addCustomRuleValidator](_parser_immutable_antlr_parser_.immutableantlrparser.md#addcustomrulevalidator)
* [addEnterRuleListener](_parser_immutable_antlr_parser_.immutableantlrparser.md#addenterrulelistener)
* [addExitRuleListener](_parser_immutable_antlr_parser_.immutableantlrparser.md#addexitrulelistener)
* [addParserCompleteListener](_parser_immutable_antlr_parser_.immutableantlrparser.md#addparsercompletelistener)
* [addTokenListener](_parser_immutable_antlr_parser_.immutableantlrparser.md#addtokenlistener)
* [checkForErrors](_parser_immutable_antlr_parser_.immutableantlrparser.md#checkforerrors)
* [createRuleError](_parser_immutable_antlr_parser_.immutableantlrparser.md#createruleerror)
* [doesRuleMatchClass](_parser_immutable_antlr_parser_.immutableantlrparser.md#doesrulematchclass)
* [enterEveryRule](_parser_immutable_antlr_parser_.immutableantlrparser.md#entereveryrule)
* [exitEveryRule](_parser_immutable_antlr_parser_.immutableantlrparser.md#exiteveryrule)
* [filter](_parser_immutable_antlr_parser_.immutableantlrparser.md#filter)
* [forEach](_parser_immutable_antlr_parser_.immutableantlrparser.md#foreach)
* [getColumnCount](_parser_immutable_antlr_parser_.immutableantlrparser.md#getcolumncount)
* [getErrorRuleAt](_parser_immutable_antlr_parser_.immutableantlrparser.md#geterrorruleat)
* [getErrorRuleTable](_parser_immutable_antlr_parser_.immutableantlrparser.md#geterrorruletable)
* [getErrors](_parser_immutable_antlr_parser_.immutableantlrparser.md#geterrors)
* [getLine](_parser_immutable_antlr_parser_.immutableantlrparser.md#getline)
* [getLineCount](_parser_immutable_antlr_parser_.immutableantlrparser.md#getlinecount)
* [getRelevantError](_parser_immutable_antlr_parser_.immutableantlrparser.md#getrelevanterror)
* [getRuleAt](_parser_immutable_antlr_parser_.immutableantlrparser.md#getruleat)
* [getRuleBefore](_parser_immutable_antlr_parser_.immutableantlrparser.md#getrulebefore)
* [getRuleName](_parser_immutable_antlr_parser_.immutableantlrparser.md#getrulename)
* [getRuleParent](_parser_immutable_antlr_parser_.immutableantlrparser.md#getruleparent)
* [getRulePositionTable](_parser_immutable_antlr_parser_.immutableantlrparser.md#getrulepositiontable)
* [getRuleRange](_parser_immutable_antlr_parser_.immutableantlrparser.md#getrulerange)
* [getRuleStack](_parser_immutable_antlr_parser_.immutableantlrparser.md#getrulestack)
* [getRuleText](_parser_immutable_antlr_parser_.immutableantlrparser.md#getruletext)
* [getRulesInLine](_parser_immutable_antlr_parser_.immutableantlrparser.md#getrulesinline)
* [getSiblings](_parser_immutable_antlr_parser_.immutableantlrparser.md#getsiblings)
* [getText](_parser_immutable_antlr_parser_.immutableantlrparser.md#gettext)
* [getTokenAt](_parser_immutable_antlr_parser_.immutableantlrparser.md#gettokenat)
* [getTokenName](_parser_immutable_antlr_parser_.immutableantlrparser.md#gettokenname)
* [getTokenPositionTable](_parser_immutable_antlr_parser_.immutableantlrparser.md#gettokenpositiontable)
* [getTokenRange](_parser_immutable_antlr_parser_.immutableantlrparser.md#gettokenrange)
* [getTokenText](_parser_immutable_antlr_parser_.immutableantlrparser.md#gettokentext)
* [getTokensInLine](_parser_immutable_antlr_parser_.immutableantlrparser.md#gettokensinline)
* [getWarnings](_parser_immutable_antlr_parser_.immutableantlrparser.md#getwarnings)
* [hasErrorNode](_parser_immutable_antlr_parser_.immutableantlrparser.md#haserrornode)
* [hasErrors](_parser_immutable_antlr_parser_.immutableantlrparser.md#haserrors)
* [hasWarnings](_parser_immutable_antlr_parser_.immutableantlrparser.md#haswarnings)
* [map](_parser_immutable_antlr_parser_.immutableantlrparser.md#map)
* [parse](_parser_immutable_antlr_parser_.immutableantlrparser.md#parse)
* [reduce](_parser_immutable_antlr_parser_.immutableantlrparser.md#reduce)
* [setRuleText](_parser_immutable_antlr_parser_.immutableantlrparser.md#setruletext)
* [setTokenText](_parser_immutable_antlr_parser_.immutableantlrparser.md#settokentext)
* [siblingsHaveNoErrors](_parser_immutable_antlr_parser_.immutableantlrparser.md#siblingshavenoerrors)
* [visitErrorNode](_parser_immutable_antlr_parser_.immutableantlrparser.md#visiterrornode)
* [visitTerminal](_parser_immutable_antlr_parser_.immutableantlrparser.md#visitterminal)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ImmutableAntlrParser**(factory: *[AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)*): [ImmutableAntlrParser](_parser_immutable_antlr_parser_.immutableantlrparser.md)

Provide an AntlrFactory to construct

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| factory | [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md) |   |

**Returns:** [ImmutableAntlrParser](_parser_immutable_antlr_parser_.immutableantlrparser.md)

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
<a id="functionalruleparser"></a>

### `<Private>` functionalRuleParser

**● functionalRuleParser**: *[FunctionalRuleParser](_parser_functional_rule_parser_.functionalruleparser.md)*

___
<a id="inputstream"></a>

### `<Private>` inputStream

**● inputStream**: *`InputStream`*

___
<a id="parsecompletesubject"></a>

### `<Private>` parseCompleteSubject

**● parseCompleteSubject**: *`Subject`<`void`>*

___
<a id="parserwrapper"></a>

### `<Private>` parserWrapper

**● parserWrapper**: *[AntlrParserWrapper](_parser_antlr_parser_wrapper_.antlrparserwrapper.md)*

___
<a id="ruletable"></a>

### `<Private>` ruleTable

**● ruleTable**: *[RuleTable](_parser_rule_table_.ruletable.md)*

___
<a id="stack"></a>

### `<Private>` stack

**● stack**: *`ParserRuleContext`[]*

___
<a id="textbuffer"></a>

### `<Private>` textBuffer

**● textBuffer**: *`TextBuffer`*

___
<a id="tokensubject"></a>

### `<Private>` tokenSubject

**● tokenSubject**: *`Subject`<`Token`>*

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

**Type parameters:**

#### T :  `ParserRuleContext`
**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`> |
| listener | `function` |

**Returns:** `void`

___
<a id="addexitrulelistener"></a>

###  addExitRuleListener

▸ **addExitRuleListener**T(ruleClass: *[AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`>*, listener: *`function`*): `void`

**Type parameters:**

#### T :  `ParserRuleContext`
**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleClass | [AntlrRuleClass](../modules/_types_types_.md#antlrruleclass)<`ParserRuleContext`> |
| listener | `function` |

**Returns:** `void`

___
<a id="addparsercompletelistener"></a>

###  addParserCompleteListener

▸ **addParserCompleteListener**(listener: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `function` |

**Returns:** `void`

___
<a id="addtokenlistener"></a>

###  addTokenListener

▸ **addTokenListener**(listener: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `function` |

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
<a id="filter"></a>

###  filter

▸ **filter**(filterFunction: *`function`*): [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)

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
<a id="getcolumncount"></a>

###  getColumnCount

▸ **getColumnCount**(line: *`number`*): `number`

**Parameters:**

| Param | Type |
| ------ | ------ |
| line | `number` |

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
<a id="getline"></a>

###  getLine

▸ **getLine**(line: *`number`*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| line | `number` |

**Returns:** `string`

___
<a id="getlinecount"></a>

###  getLineCount

▸ **getLineCount**(): `number`

**Returns:** `number`

___
<a id="getrelevanterror"></a>

###  getRelevantError

▸ **getRelevantError**(): [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

**Returns:** [AntlrRuleError](_parser_antlr_rule_error_.antlrruleerror.md)

___
<a id="getruleat"></a>

###  getRuleAt

▸ **getRuleAt**(column: *`number`*, line: *`number`*):  [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |

**Returns:**  [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md) &#124; `undefined`

___
<a id="getrulebefore"></a>

###  getRuleBefore

▸ **getRuleBefore**(rule: *`ParserRuleContext`*): `ParserRuleContext`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `ParserRuleContext`

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
<a id="getrulestack"></a>

###  getRuleStack

▸ **getRuleStack**(): `ReadonlyArray`<`ParserRuleContext`>

**Returns:** `ReadonlyArray`<`ParserRuleContext`>

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
<a id="getrulesinline"></a>

###  getRulesInLine

▸ **getRulesInLine**(line: *`number`*): `Set`<`ParserRuleContext`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| line | `number` |

**Returns:** `Set`<`ParserRuleContext`>

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
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

**Returns:** `string`

___
<a id="gettokenat"></a>

###  getTokenAt

▸ **getTokenAt**(column: *`number`*, line: *`number`*):  [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md) &#124; `undefined`

Retrieve a token a the specified position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| column | `number` |  - |
| line | `number` |  - |

**Returns:**  [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md) &#124; `undefined`

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
<a id="gettokensinline"></a>

###  getTokensInLine

▸ **getTokensInLine**(line: *`number`*): `Set`<`Token`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| line | `number` |

**Returns:** `Set`<`Token`>

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
<a id="setruletext"></a>

###  setRuleText

▸ **setRuleText**(rule: *`ParserRuleContext`*, text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |
| text | `string` |

**Returns:** `void`

___
<a id="settokentext"></a>

###  setTokenText

▸ **setTokenText**(token: *`Token`*, text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `Token` |
| text | `string` |

**Returns:** `void`

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

