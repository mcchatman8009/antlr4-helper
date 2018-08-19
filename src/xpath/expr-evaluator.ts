import {AntlrRuleWrapper} from '../';

export class ExprEvaluator {
    constructor(private expr: AntlrRuleWrapper, private rule: AntlrRuleWrapper, private index: number, private numberOfElement: number) {
    }

    evaluate(): any {
        const functionCall = this.expr.findRuleByName('functionCall');
        const primaryExpr = this.expr.findRuleByName('primaryExpr');
        const step = this.expr.findRuleByName('step');

        if (functionCall) {
            const parts = functionCall.getChildren();
            // const tokens = functionCall.getTokens();
            const name = parts[0].getText();

            switch (name) {
                case 'position':
                    return this.index;
            }

        } else if (step) {
            const axisSpecifier = step.findRuleByName('axisSpecifier');
            const nameTest = step.findRuleByName('nameTest');

            if (axisSpecifier && axisSpecifier.getText() === '@') {
                const tokenName = nameTest.getText();
                const tokens = this.rule.getTokens(tokenName);

                if (tokens.length > 0) {
                    return tokens[0].getText();
                }
            }

        } else if (primaryExpr) {
            const numberTokens = primaryExpr.getTokens('Number');

            if (numberTokens.length > 0) {
                return Number(numberTokens[0].getText());
            }

        }

        return undefined;
    }

}
