import {
    AntlrFactory, AntlrFactoryBuilder, AntlrParser, ImmutableAntlrParser, ImmutableAntlrRuleWrapper, MutableAntlrParser,
    MutableAntlrRuleWrapper
} from '../';
import {FunctionalRuleParser} from '../parser/functional-rule-parser';

export function createFactoryBuilder(): AntlrFactoryBuilder {
    return new AntlrFactoryBuilder();
}

export function createParser(factory: AntlrFactory): MutableAntlrParser {
    return new MutableAntlrParser(createImmutableParser(factory));
}

export function createImmutableParser(factory: AntlrFactory): AntlrParser {
    return new ImmutableAntlrParser(factory);
}


export function functionalParser(parser: AntlrParser): FunctionalRuleParser {
    return new FunctionalRuleParser(parser);
}
