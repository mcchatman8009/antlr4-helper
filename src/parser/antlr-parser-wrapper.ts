import {Parser} from 'antlr4';

const _ = require('lodash');

export class AntlrParserWrapper {
    constructor(private parser: Parser) {
    }

    get literalNames(): string[] {
        const parser = this.parser as any;
        return parser.literalNames;
    }

    get ruleNames(): string[] {
        const parser = this.parser as any;
        return parser.ruleNames;
    }

    get symbolicNames(): string[] {
        const parser = this.parser as any;
        return parser.symbolicNames;
    }

    getTokenTypeToSymoblMap(): ReadonlyMap<number, string> {
        const map = new Map<number, string>();
        const clazz = (this.parser as any).constructor;

        this.symbolicNames.forEach((val: string) => {
            if (val) {
                map.set(clazz[val], val);
            }
        });

        return map;
    }

    getSymbolToTypeMap(): ReadonlyMap<string, number> {
        const map = new Map<string, number>();
        const clazz = (this.parser as any).constructor;

        this.symbolicNames.forEach((val: string) => {
            if (val) {
                map.set(val, clazz[val]);
            }
        });

        return map;
    }

    getRuleIndexToNameMap(): ReadonlyMap<number, string> {
        const map = new Map<number, string>();

        this.getRuleNameToIndexMap().forEach((val: number, key: string) => {
            map.set(val, key);
        });

        return map;
    }

    getRuleNameToIndexMap(): ReadonlyMap<string, number> {
        const map = new Map<string, number>();
        const rules = this.ruleNames;
        const clazz = (this.parser as any).constructor;

        rules.forEach((rule) => {
            map.set(rule, clazz[`RULE_${rule}`]);
        });

        map.set('<EOF>', -1);

        return map;
    }
}
