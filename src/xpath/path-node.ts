import {AntlrRuleWrapper} from '../';
import {ExprEvaluator} from './expr-evaluator';
import * as _ from 'lodash';

export class PathNode {
    constructor(public readonly isRoot: boolean,
                public readonly name: string,
                public readonly axisSpecifier: AntlrRuleWrapper,
                public readonly selectAllDescendants: boolean,
                public readonly isSingleDot: boolean,
                public readonly isParent: boolean,
                private predicateRule: AntlrRuleWrapper) {
    }

    testNodeWithPredicate(rule: AntlrRuleWrapper, index: number, numberOfElement: number): boolean {
        if (this.predicateRule) {
            const primaryExpr = this.predicateRule.findRuleByName('primaryExpr');
            const relationalExpr = this.predicateRule.findRuleByName('relationalExpr');

            if (relationalExpr) {
                const additiveExprs = relationalExpr.findRulesByName('additiveExpr').reverse();
                const op = relationalExpr.getTokens()[0].getText();
                let lhs = this.evaluateExpr(additiveExprs[0], rule, index, numberOfElement);
                let rhs = this.evaluateExpr(additiveExprs[1], rule, index, numberOfElement);

                if (_.isNil(rhs) || _.isNil(lhs)) {
                    return true;
                }

                lhs = Number(lhs);
                rhs = Number(rhs);

                switch (op) {
                    case '<':
                        return lhs < rhs;
                    case '<=':
                        return lhs <= rhs;
                    case '>':
                        return lhs > rhs;
                    case '>=':
                        return lhs >= rhs;
                }
            } else if (primaryExpr) {
                const numberTokens = primaryExpr.getTokens('Number');
                const functionCall = primaryExpr.findRuleByName('functionCall');

                if (functionCall) {
                    return this.callPredicateFunction(functionCall, rule, index, numberOfElement);
                } else if (numberTokens.length > 0) {
                    const num = Number(numberTokens[0].getText());
                    return index === num;
                }
            }
        }

        return true;
    }

    evaluateExpr(expr: AntlrRuleWrapper, rule: AntlrRuleWrapper, index: number, numberOfElement: number): any {
        const evaluator = new ExprEvaluator(expr, rule, index, numberOfElement);

        return evaluator.evaluate();
    }

    callPredicateFunction(functionCall: AntlrRuleWrapper, rule: AntlrRuleWrapper, index: number, numberOfElement: number): boolean {
        const parts = functionCall.getChildren();
        // const tokens = functionCall.getTokens();
        const name = parts[0].getText();

        switch (name) {
            case 'last':
                return index === (numberOfElement - 1);

        }

        return true;
    }
}
