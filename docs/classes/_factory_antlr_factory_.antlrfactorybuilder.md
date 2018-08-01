[antlr4-helper](../README.md) > ["factory/antlr-factory"](../modules/_factory_antlr_factory_.md) > [AntlrFactoryBuilder](../classes/_factory_antlr_factory_.antlrfactorybuilder.md)

# Class: AntlrFactoryBuilder

## Hierarchy

**AntlrFactoryBuilder**

## Index

### Constructors

* [constructor](_factory_antlr_factory_.antlrfactorybuilder.md#constructor)

### Properties

* [createLexer](_factory_antlr_factory_.antlrfactorybuilder.md#createlexer)
* [createParser](_factory_antlr_factory_.antlrfactorybuilder.md#createparser)
* [createRootRule](_factory_antlr_factory_.antlrfactorybuilder.md#createrootrule)

### Methods

* [build](_factory_antlr_factory_.antlrfactorybuilder.md#build)
* [lexer](_factory_antlr_factory_.antlrfactorybuilder.md#lexer)
* [parser](_factory_antlr_factory_.antlrfactorybuilder.md#parser)
* [rootRule](_factory_antlr_factory_.antlrfactorybuilder.md#rootrule)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AntlrFactoryBuilder**(): [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

**Returns:** [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

___

## Properties

<a id="createlexer"></a>

### `<Private>``<Optional>` createLexer

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

### `<Private>``<Optional>` createParser

**● createParser**: *`function`*

#### Type declaration
▸(tokenStream: *`CommonTokenStream`*): `Parser`

**Parameters:**

| Param | Type |
| ------ | ------ |
| tokenStream | `CommonTokenStream` |

**Returns:** `Parser`

___
<a id="createrootrule"></a>

### `<Private>``<Optional>` createRootRule

**● createRootRule**: *`function`*

#### Type declaration
▸(parser: *`Parser`*): `ParserRuleContext`

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | `Parser` |

**Returns:** `ParserRuleContext`

___

## Methods

<a id="build"></a>

###  build

▸ **build**(): [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)

**Returns:** [AntlrFactory](../interfaces/_factory_antlr_factory_.antlrfactory.md)

___
<a id="lexer"></a>

###  lexer

▸ **lexer**(lexer?: *`function`*): [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` lexer | `function` |

**Returns:** [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

___
<a id="parser"></a>

###  parser

▸ **parser**(parser?: *`function`*): [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` parser | `function` |

**Returns:** [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

___
<a id="rootrule"></a>

###  rootRule

▸ **rootRule**(rootRule?: *`function`*): [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` rootRule | `function` |

**Returns:** [AntlrFactoryBuilder](_factory_antlr_factory_.antlrfactorybuilder.md)

___

