[antlr4-helper](../README.md) > ["parser/mutable-antlr-parser"](../modules/_parser_mutable_antlr_parser_.md) > [MutableAntlrParser](../classes/_parser_mutable_antlr_parser_.mutableantlrparser.md)

# Class: MutableAntlrParser

The MutableAntlrParser allows for text manipulation at the rule and token level. Once the parse is complete the [getText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettext) method enables one to see the complete text of all the changes.

*__example__*:   

```
...
const parser = antlrHelper.createParser(factory);
...
parser.addExitRuleListener(ExpressionContext, (rule)=>{
    parser.setRuleText(rule, 'replaced expression');
    console.log(parser.getRuleText(rule));
});
parser.parse(text);
console.log(parser.getText());
```

*__class__*: MutableAntlrParser

## Hierarchy

**MutableAntlrParser**

## Implements

* [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)

## Index

### Constructors

* [constructor](_parser_mutable_antlr_parser_.mutableantlrparser.md#constructor)

### Properties

* [functionalRuleParser](_parser_mutable_antlr_parser_.mutableantlrparser.md#functionalruleparser)
* [parser](_parser_mutable_antlr_parser_.mutableantlrparser.md#parser)
* [ruleTable](_parser_mutable_antlr_parser_.mutableantlrparser.md#ruletable)
* [textBuffer](_parser_mutable_antlr_parser_.mutableantlrparser.md#textbuffer)
* [textChanged](_parser_mutable_antlr_parser_.mutableantlrparser.md#textchanged)
* [tokenTable](_parser_mutable_antlr_parser_.mutableantlrparser.md#tokentable)

### Methods

* [addCustomRuleValidator](_parser_mutable_antlr_parser_.mutableantlrparser.md#addcustomrulevalidator)
* [addEnterRuleListener](_parser_mutable_antlr_parser_.mutableantlrparser.md#addenterrulelistener)
* [addExitRuleListener](_parser_mutable_antlr_parser_.mutableantlrparser.md#addexitrulelistener)
* [addParserCompleteListener](_parser_mutable_antlr_parser_.mutableantlrparser.md#addparsercompletelistener)
* [addParserStartListener](_parser_mutable_antlr_parser_.mutableantlrparser.md#addparserstartlistener)
* [addTokenListener](_parser_mutable_antlr_parser_.mutableantlrparser.md#addtokenlistener)
* [addValidator](_parser_mutable_antlr_parser_.mutableantlrparser.md#addvalidator)
* [checkForErrors](_parser_mutable_antlr_parser_.mutableantlrparser.md#checkforerrors)
* [createRuleError](_parser_mutable_antlr_parser_.mutableantlrparser.md#createruleerror)
* [doesRuleExist](_parser_mutable_antlr_parser_.mutableantlrparser.md#doesruleexist)
* [doesTokenExist](_parser_mutable_antlr_parser_.mutableantlrparser.md#doestokenexist)
* [every](_parser_mutable_antlr_parser_.mutableantlrparser.md#every)
* [filter](_parser_mutable_antlr_parser_.mutableantlrparser.md#filter)
* [find](_parser_mutable_antlr_parser_.mutableantlrparser.md#find)
* [findAll](_parser_mutable_antlr_parser_.mutableantlrparser.md#findall)
* [findLast](_parser_mutable_antlr_parser_.mutableantlrparser.md#findlast)
* [findRuleByName](_parser_mutable_antlr_parser_.mutableantlrparser.md#findrulebyname)
* [findRulesByName](_parser_mutable_antlr_parser_.mutableantlrparser.md#findrulesbyname)
* [forEach](_parser_mutable_antlr_parser_.mutableantlrparser.md#foreach)
* [getColumnCount](_parser_mutable_antlr_parser_.mutableantlrparser.md#getcolumncount)
* [getErrorRuleAt](_parser_mutable_antlr_parser_.mutableantlrparser.md#geterrorruleat)
* [getErrors](_parser_mutable_antlr_parser_.mutableantlrparser.md#geterrors)
* [getLine](_parser_mutable_antlr_parser_.mutableantlrparser.md#getline)
* [getLineCount](_parser_mutable_antlr_parser_.mutableantlrparser.md#getlinecount)
* [getRelevantError](_parser_mutable_antlr_parser_.mutableantlrparser.md#getrelevanterror)
* [getRuleAt](_parser_mutable_antlr_parser_.mutableantlrparser.md#getruleat)
* [getRuleBefore](_parser_mutable_antlr_parser_.mutableantlrparser.md#getrulebefore)
* [getRuleName](_parser_mutable_antlr_parser_.mutableantlrparser.md#getrulename)
* [getRuleParent](_parser_mutable_antlr_parser_.mutableantlrparser.md#getruleparent)
* [getRulePositionTable](_parser_mutable_antlr_parser_.mutableantlrparser.md#getrulepositiontable)
* [getRuleRange](_parser_mutable_antlr_parser_.mutableantlrparser.md#getrulerange)
* [getRuleStack](_parser_mutable_antlr_parser_.mutableantlrparser.md#getrulestack)
* [getRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#getruletext)
* [getRulesInLine](_parser_mutable_antlr_parser_.mutableantlrparser.md#getrulesinline)
* [getSiblings](_parser_mutable_antlr_parser_.mutableantlrparser.md#getsiblings)
* [getText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettext)
* [getTokenAt](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokenat)
* [getTokenName](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokenname)
* [getTokenPositionTable](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokenpositiontable)
* [getTokenRange](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokenrange)
* [getTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokentext)
* [getTokensInLine](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokensinline)
* [getWarnings](_parser_mutable_antlr_parser_.mutableantlrparser.md#getwarnings)
* [hasErrorNode](_parser_mutable_antlr_parser_.mutableantlrparser.md#haserrornode)
* [hasErrors](_parser_mutable_antlr_parser_.mutableantlrparser.md#haserrors)
* [hasTextChanged](_parser_mutable_antlr_parser_.mutableantlrparser.md#hastextchanged)
* [hasWarnings](_parser_mutable_antlr_parser_.mutableantlrparser.md#haswarnings)
* [map](_parser_mutable_antlr_parser_.mutableantlrparser.md#map)
* [onParseComplete](_parser_mutable_antlr_parser_.mutableantlrparser.md#onparsecomplete)
* [onParseStart](_parser_mutable_antlr_parser_.mutableantlrparser.md#onparsestart)
* [onRuleEnter](_parser_mutable_antlr_parser_.mutableantlrparser.md#onruleenter)
* [onRuleExit](_parser_mutable_antlr_parser_.mutableantlrparser.md#onruleexit)
* [parse](_parser_mutable_antlr_parser_.mutableantlrparser.md#parse)
* [reduce](_parser_mutable_antlr_parser_.mutableantlrparser.md#reduce)
* [reparse](_parser_mutable_antlr_parser_.mutableantlrparser.md#reparse)
* [setRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#setruletext)
* [setTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#settokentext)
* [siblingsHaveNoErrors](_parser_mutable_antlr_parser_.mutableantlrparser.md#siblingshavenoerrors)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MutableAntlrParser**(parser: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*): [MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)

Provide an AntlrFactory to construct

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parser | [AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md) |   |

**Returns:** [MutableAntlrParser](_parser_mutable_antlr_parser_.mutableantlrparser.md)

___

## Properties

<a id="functionalruleparser"></a>

### `<Private>` functionalRuleParser

**● functionalRuleParser**: *[FunctionalRuleParser](_parser_functional_rule_parser_.functionalruleparser.md)*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *[AntlrParser](../interfaces/_parser_antlr_parser_.antlrparser.md)*

___
<a id="ruletable"></a>

### `<Private>` ruleTable

**● ruleTable**: *[RuleTable](_parser_rule_table_.ruletable.md)*

___
<a id="textbuffer"></a>

### `<Private>` textBuffer

**● textBuffer**: *`TextBuffer`*

___
<a id="textchanged"></a>

### `<Private>` textChanged

**● textChanged**: *`boolean`*

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
});
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

Add a listener for when the parser exits a given rule. Within this listener is where you would typically call methods such as [setRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#setruletext), [getRuleText](_parser_mutable_antlr_parser_.mutableantlrparser.md#getruletext) ,[setTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#settokentext) and [getTokenText](_parser_mutable_antlr_parser_.mutableantlrparser.md#gettokentext)

See example below:
*__example__*:   

```
parser.addExitRuleListener(ExpressionContext, (rule)=>{
    console.log(parser.getRuleText(rule));
});
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
<a id="addparsercompletelistener"></a>

###  addParserCompleteListener

▸ **addParserCompleteListener**(listener: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `function` |

**Returns:** `void`

___
<a id="addparserstartlistener"></a>

###  addParserStartListener

▸ **addParserStartListener**(listener: *`function`*): `void`

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
<a id="addvalidator"></a>

###  addValidator

▸ **addValidator**(ruleName: *`string`*, validator: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |
| validator | `function` |

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
<a id="doesruleexist"></a>

###  doesRuleExist

▸ **doesRuleExist**(rule: *`ParserRuleContext`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

**Returns:** `boolean`

___
<a id="doestokenexist"></a>

###  doesTokenExist

▸ **doesTokenExist**(token: *`Token`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `Token` |

**Returns:** `boolean`

___
<a id="every"></a>

###  every

▸ **every**(predicate: *`function`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| predicate | `function` |

**Returns:** `boolean`

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
<a id="find"></a>

###  find

▸ **find**(filterFunction: *`function`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="findall"></a>

###  findAll

▸ **findAll**(filterFunction: *`function`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

___
<a id="findlast"></a>

###  findLast

▸ **findLast**(filterFunction: *`function`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| filterFunction | `function` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="findrulebyname"></a>

###  findRuleByName

▸ **findRuleByName**(ruleName: *`string`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

___
<a id="findrulesbyname"></a>

###  findRulesByName

▸ **findRulesByName**(ruleName: *`string`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)[]

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

▸ **getRuleAt**(column: *`number`*, line: *`number`*): [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |

**Returns:** [AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)

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

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `ParserRuleContext` |

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

Get the text of the completely parsed rule

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |

**Returns:** `string`

___
<a id="getrulesinline"></a>

###  getRulesInLine

▸ **getRulesInLine**(line: *`number`*): `Set`<[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)>

**Parameters:**

| Param | Type |
| ------ | ------ |
| line | `number` |

**Returns:** `Set`<[AntlrRuleWrapper](../interfaces/_parser_antlr_rule_wrapper_.antlrrulewrapper.md)>

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

Get the complete parsed and transformed text

**Returns:** `string`

___
<a id="gettokenat"></a>

###  getTokenAt

▸ **getTokenAt**(column: *`number`*, line: *`number`*):  [AntlrTokenWrapper](../interfaces/_parser_antlr_token_wrapper_.antlrtokenwrapper.md) &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| column | `number` |
| line | `number` |

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

▸ **getTokenRange**(token: *`Token`*): [AntlrRange](../modules/_types_types_.md#antlrrange)

Get the range of a given token, where the first object is the start position and the last is the end position

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `Token` |   |

**Returns:** [AntlrRange](../modules/_types_types_.md#antlrrange)

___
<a id="gettokentext"></a>

###  getTokenText

▸ **getTokenText**(token: *`Token`*): `string`

Get the text of a given token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `Token` |  - |

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
<a id="hastextchanged"></a>

###  hasTextChanged

▸ **hasTextChanged**(): `boolean`

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
<a id="onparsecomplete"></a>

###  onParseComplete

▸ **onParseComplete**(callback: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onparsestart"></a>

###  onParseStart

▸ **onParseStart**(callback: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onruleenter"></a>

###  onRuleEnter

▸ **onRuleEnter**(ruleName: *`string`*, callback: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="onruleexit"></a>

###  onRuleExit

▸ **onRuleExit**(ruleName: *`string`*, callback: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="parse"></a>

###  parse

▸ **parse**(input: *`string`*): `ParserRuleContext`

Parse the input string (The internal text model is changed on each parse)

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
<a id="reparse"></a>

###  reparse

▸ **reparse**(): `ParserRuleContext`

**Returns:** `ParserRuleContext`

___
<a id="setruletext"></a>

###  setRuleText

▸ **setRuleText**(rule: *`ParserRuleContext`*, text: *`string`*): `void`

Change the text of the completely parsed rule

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rule | `ParserRuleContext` |  - |
| text | `string` |   |

**Returns:** `void`

___
<a id="settokentext"></a>

###  setTokenText

▸ **setTokenText**(token: *`Token`*, text: *`string`*): `void`

Change the text of the token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `Token` |  - |
| text | `string` |   |

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

