[antlr4-helper](../README.md) > ["factory/antlr-factory"](../modules/_factory_antlr_factory_.md) > [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)

# Interface: AntlrFactory

## Hierarchy

**AntlrFactory**

## Index

### Properties

* [createAndInvokeRootRule](_factory_antlr_factory_.antlrfactory.md#createandinvokerootrule)
* [createLexer](_factory_antlr_factory_.antlrfactory.md#createlexer)
* [createParser](_factory_antlr_factory_.antlrfactory.md#createparser)

---

## Properties

<a id="createandinvokerootrule"></a>

###  createAndInvokeRootRule

**● createAndInvokeRootRule**: *`function`*

#### Type declaration
▸(parser: *`Parser`*): `ParserRuleContext`

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | `Parser` |

**Returns:** `ParserRuleContext`

___
<a id="createlexer"></a>

###  createLexer

**● createLexer**: *`function`*

#### Type declaration
▸(stream: *`InputStream`*): `Lexer`

**Parameters:**

| Param | Type |
| ------ | ------ |
| stream | `InputStream` |

**Returns:** `Lexer`

___
<a id="createparser"></a>

###  createParser

**● createParser**: *`function`*

#### Type declaration
▸(tokenStream: *`CommonTokenStream`*): `Parser`

**Parameters:**

| Param | Type |
| ------ | ------ |
| tokenStream | `CommonTokenStream` |

**Returns:** `Parser`

___

