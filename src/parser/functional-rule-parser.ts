import {
    AntlrParser, AntlrRuleWrapper, ImmutableAntlrRuleWrapper, MutableAntlrParser,
    MutableAntlrRuleWrapper
} from '../index';
import {ParserRuleContext} from 'antlr4';

export class FunctionalRuleParser {
    private stackHasChanged: boolean;
    private _stack: ParserRuleContext[];

    constructor(private parser: AntlrParser) {
        this.resetStack();
    }

    every(predicate: (rule: AntlrRuleWrapper, index: number) => boolean): boolean {
        this.resetStack();
        const n = this.stack.length;
        const data = this.stack;

        for (let i = 0; i < n; i++) {
            const val = predicate(this.wrapRule(data[i]), i);
            if (!val) {
                return false;
            }
        }
        return true;
    }

    findLast(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper {
        this.filter(filterFunction);
        const list = [];

        const n = this.stack.length;
        const data = this.stack;

        this.resetStack();

        if (n > 0) {
            return this.wrapRule(data[data.length - 1]);
        } else {
            return undefined;
        }
    }

    find(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper {
        this.filter(filterFunction);
        const list = [];

        const n = this.stack.length;
        const data = this.stack;

        this.resetStack();

        if (n > 0) {
            return this.wrapRule(data[0]);
        } else {
            return undefined;
        }
    }

    findAll(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): AntlrRuleWrapper[] {
        this.filter(filterFunction);
        const list = [];

        const n = this.stack.length;
        const data = this.stack;

        for (let i = 0; i < n; i++) {
            list.push(this.wrapRule(data[i]));
        }

        this.resetStack();

        return list;
    }

    filter(filterFunction: (rule: AntlrRuleWrapper, index: number) => boolean): FunctionalRuleParser {
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

    forEach<T>(eachFunction: (rule: AntlrRuleWrapper, index: number) => void): void {
        const len = this.stack.length;

        for (let i = 0; i < len; i++) {
            const rule = this.stack[i];
            eachFunction(this.wrapRule(rule), i);
        }

        this.resetStack();
    }

    map<T>(mapFunction: (rule: AntlrRuleWrapper, index: number) => T): T[] {
        const len = this.stack.length;
        const results = [] as T[];

        for (let i = 0; i < len; i++) {
            const rule = this.stack[i];
            results[i] = mapFunction(this.wrapRule(rule), i);
        }

        this.resetStack();
        return results;
    }

    reduce<T>(reduceFunction: (acc: T, rule: AntlrRuleWrapper, index: number) => T, accumulator: T): T {
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

    private wrapRule(rule: ParserRuleContext): AntlrRuleWrapper {
        if (this.parser instanceof MutableAntlrParser) {
            return new MutableAntlrRuleWrapper(rule, this.parser);
        }

        return new ImmutableAntlrRuleWrapper(rule, this.parser);
    }
}
