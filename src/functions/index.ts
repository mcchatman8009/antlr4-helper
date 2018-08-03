import {
    AntlrFactory, AntlrFactoryBuilder, AntlrParser, ImmutableAntlrParser, ImmutableAntlrRuleWrapper, MutableAntlrParser,
    MutableAntlrRuleWrapper
} from '../';
import {FunctionalRuleParser} from './functional-rule-parser';

export function createFactoryBuilder(): AntlrFactoryBuilder {
    return new AntlrFactoryBuilder();
}

export function createParser(factory: AntlrFactory): AntlrParser {
    return new ImmutableAntlrParser(factory);
}

export function createMutableParser(factory: AntlrFactory): MutableAntlrParser {
    return new MutableAntlrParser(createParser(factory));
}

export function functionalParser(parser: (MutableAntlrParser | ImmutableAntlrParser)): FunctionalRuleParser<MutableAntlrRuleWrapper | ImmutableAntlrRuleWrapper> {
    if (parser instanceof MutableAntlrParser) {
        return new FunctionalRuleParser<MutableAntlrRuleWrapper>(parser);
    }

    return new FunctionalRuleParser<ImmutableAntlrRuleWrapper>(parser);
}
