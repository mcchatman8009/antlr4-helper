import {AntlrRuleWrapper, AntlrTokenWrapper} from '../';
import {PathNode} from './path-node';

export class PathExpr {
    private nodes: PathNode[];

    constructor(private pathRule: AntlrRuleWrapper) {
        if (pathRule) {
            this.initNodes();
        } else {
            const node = new PathNode(true, '/', undefined, false, false, false, undefined);
            this.nodes = [];
            this.nodes.push(node);
        }
    }

    getNodes(): PathNode[] {
        return this.nodes;
    }

    isAbsolutePath(): boolean {
        return this.pathRule === undefined || this.pathRule.findRuleByName('absoluteLocationPathNoroot') !== undefined || this.pathRule.getText().trim() === '/';
    }

    private initNodes() {
        this.nodes = [];
        const pathText = this.pathRule.getText().trim();
        if (pathText !== '/' && pathText !== '..' && pathText !== '.') {

            const relativeLocationPath = this.pathRule.findRuleByName('relativeLocationPath');
            const absoluteLocationPathNoroot = this.pathRule.findRuleByName('absoluteLocationPathNoroot');
            const children = relativeLocationPath.getChildren();
            const pathDelimiters = relativeLocationPath.getTokens();


            if (this.isAbsolutePath()) {
                const rootDelimiter = absoluteLocationPathNoroot.getTokens()[0];

                const n = children.length;

                for (let i = 0; i < n; i++) {
                    const child = children[i];
                    const nameTest = child.findRuleByName('nameTest');
                    const axisSpecifier = child.findRuleByName('axisSpecifier');
                    const abbreviatedStep = child.findRuleByName('abbreviatedStep');
                    const isAbbreviatedStep = abbreviatedStep !== undefined;
                    const isSingleDot = (isAbbreviatedStep && abbreviatedStep.getText().trim() === '.');
                    const isParent = (isAbbreviatedStep && abbreviatedStep.getText().trim() === '..');

                    const isRoot = i === 0;
                    const name = (isAbbreviatedStep) ? abbreviatedStep.getText() : nameTest.getText();
                    const predicate = child.findRuleByName('predicate');
                    const selectAll = isRoot ? this.isSelectAll(rootDelimiter) : this.isSelectAll(pathDelimiters[i - 1]);

                    const node = new PathNode(isRoot, name, axisSpecifier, selectAll, isSingleDot, isParent, predicate);

                    this.nodes.push(node);
                }
            } else {
                children.forEach((child, i) => {
                    const abbreviatedStep = child.findRuleByName('abbreviatedStep');
                    const nameTest = child.findRuleByName('nameTest');
                    const axisSpecifier = child.findRuleByName('axisSpecifier');
                    const isAbbreviatedStep = abbreviatedStep !== undefined;
                    const isSingleDot = (isAbbreviatedStep && abbreviatedStep.getText().trim() === '.');
                    const isParent = (isAbbreviatedStep && abbreviatedStep.getText().trim() === '..');
                    const predicate = child.findRuleByName('predicate');
                    const name = (isAbbreviatedStep) ? abbreviatedStep.getText() : nameTest.getText();

                    if (i === 0) {
                        const node = new PathNode(false, name, axisSpecifier, false, isSingleDot, isParent, predicate);
                        this.nodes.push(node);
                    } else {
                        const selectAll = this.isSelectAll(pathDelimiters[i - 1]);
                        const node = new PathNode(false, name, axisSpecifier, selectAll, isSingleDot, isParent, predicate);
                        this.nodes.push(node);
                    }
                });
            }
        } else if (pathText === '/' || pathText === '.') {
            const abbreviatedStep = this.pathRule.findRuleByName('abbreviatedStep');
            const isAbbreviatedStep = abbreviatedStep !== undefined;
            const isSingleDot = (isAbbreviatedStep && abbreviatedStep.getText().trim() === '.');

            const node = new PathNode(true, pathText, undefined, false, isSingleDot, false, undefined);
            this.nodes.push(node);
        }
    }

    private isSelectAll(token: AntlrTokenWrapper): boolean {
        return token.getText().trim() == '//';
    }
}
