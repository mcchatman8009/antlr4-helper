import {
    AntlrParser, AntlrRuleWrapper, ImmutableAntlrRuleWrapper, MutableAntlrParser,
    MutableAntlrRuleWrapper
} from '../';
import {ParserRuleContext} from 'antlr4';

export class FunctionalRuleParser<R extends AntlrRuleWrapper> {
    private stackHasChanged: boolean;
    private _stack: ParserRuleContext[];

    constructor(private parser: AntlrParser) {
        this.resetStack();
    }

    filter(filterFunction: (rule: R, index: number) => boolean): FunctionalRuleParser<any> {
        const len = this.stack.length;
        this._stack = Array.from(this.stack);

        let stackPosition = 0;

        for (let i = 0; i < len; i++) {
            const rule = this.stack[stackPosition];
            if (!filterFunction(this.wrapRule(rule), i)) {
                // Filter out rule
                this._stack.splice(stackPosition, 1);
                this.stackHasChanged = true;
            } else {
                stackPosition++;
            }
        }

        return this;
    }

    forEach<T>(eachFunction: (rule: R, index: number) => void): void {
        const len = this.stack.length;

        for (let i = 0; i < len; i++) {
            const rule = this.stack[i];
            eachFunction(this.wrapRule(rule), i);
        }

        this.resetStack();
    }

    map<T>(mapFunction: (rule: R, index: number) => T): T[] {
        const len = this.stack.length;
        const results = [] as T[];

        for (let i = 0; i < len; i++) {
            const rule = this.stack[i];
            results[i] = mapFunction(this.wrapRule(rule), i);
        }

        this.resetStack();
        return results;
    }

    reduce<T>(reduceFunction: (acc: T, rule: R, index: number) => T, accumulator: T): T {
        const len = this.stack.length;

        for (let i = 0; i < len; i++) {
            const rule = this.stack[i];
            accumulator = reduceFunction(accumulator, this.wrapRule(rule), i);
        }

        this.resetStack();
        return accumulator;
    }

    private get stack(): ParserRuleContext[] {
        const rules = this.parser.getRuleStack();

        if (this.stackHasChanged) {
            return this._stack;
        }

        return rules as ParserRuleContext[];
    }

    private resetStack() {
        this._stack = [];
        this.stackHasChanged = false;
    }

    private wrapRule(rule: ParserRuleContext): R {
        if (this.parser instanceof MutableAntlrParser) {
            return new MutableAntlrRuleWrapper(rule, this.parser) as any;
        }

        return new ImmutableAntlrRuleWrapper(rule, this.parser) as any;
    }
}
