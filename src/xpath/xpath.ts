import {AntlrParser, AntlrRuleWrapper, ImmutableAntlrParser} from '../';
import {createFactoryBuilder} from '../functions';
import {xpathLexer} from './parser/xpathLexer';
import {xpathParser} from './parser/xpathParser';
import {PathExpr} from './path-expr';
import * as _ from 'lodash';

export class XPath {
    private xpathParser: AntlrParser;

    constructor(private root: AntlrRuleWrapper) {
        this.xpathParser = this.createXPathParser();
    }

    findRulesByPath(path: string): AntlrRuleWrapper[] {
        this.xpathParser.parse(path);

        if (this.xpathParser.hasErrors()) {
            return [];
        }

        this.xpathParser.checkForErrors();
        const pathExprs = this.createPathExprs();
        return _.flatten(pathExprs.map((expr) => this.processPathExpr(expr)));
    }


    isAbsolutePath(): boolean {
        return this.xpathParser.findRuleByName('absoluteLocationPathNoroot') !== undefined;
    }

    private processPathExpr(pathExpr: PathExpr): AntlrRuleWrapper[] {
        let lastNodes: AntlrRuleWrapper[] = [];
        const pathNodes = pathExpr.getNodes();

        pathNodes.forEach((node) => {
            if (node.isRoot) {
                const rootNode = this.root;
                if (node.name === '/' || node.name === '.' || node.name === '*') {
                    const children = rootNode.getChildren();
                    const n = children.length;

                    lastNodes = children.filter(((rule, i) => node.testNodeWithPredicate(rule, i, n)));
                } else {
                    const children = rootNode.getChildren();
                    const n = children.length;
                    lastNodes = children
                        .filter((childOfRoot) => childOfRoot.getName() === node.name)
                        .filter(((rule, i) => node.testNodeWithPredicate(rule, i, n)));
                }
            } else {
                if (lastNodes.length > 0) {
                    if (node.isSingleDot) {
                        //
                        // 	Select the current node
                        //
                        return;
                    }

                    const nodes = [] as AntlrRuleWrapper[];
                    let childNodes: AntlrRuleWrapper[];

                    if (node.selectAllDescendants) {
                        //
                        // Select all descendant nodes
                        //
                        childNodes = _.flatten(lastNodes.map((lastNode) => {
                            if (node.isParent) {
                                if (lastNode.getParent()) {
                                    return lastNode.getParent().findRulesByName(node.name);
                                }
                            } else {
                                return lastNode.findRulesByName(node.name);
                            }
                        })
                            .filter((lastNodes) => !!lastNodes)
                            .map((lastNodes) => {
                                const n = lastNodes.length;
                                const children = lastNodes.filter((rule, i) => node.testNodeWithPredicate(rule, i, n));
                                return children;
                            }));
                    } else {
                        //
                        // Select all child nodes
                        //
                        const nodeList = lastNodes
                            .map((lastNode) => {
                                if (node.isParent) {
                                    if (lastNode.getParent()) {
                                        return lastNode.getParent().getChildren();
                                    }
                                } else {
                                    return lastNode.getChildren();
                                }
                            })
                            .filter((lastNodes) => !!lastNodes)
                            .map((lastNodes) => {
                                const n = lastNodes.length;
                                const children = lastNodes.filter((rule, i) => node.testNodeWithPredicate(rule, i, n));
                                return children;
                            });
                        childNodes = _.flatten(nodeList);
                    }

                    childNodes.forEach((child) => {
                        if (node.name === '*') {
                            nodes.push(child);
                        } else if (node.name === child.getName()) {
                            nodes.push(child);
                        }
                    });

                    lastNodes = nodes;
                } else if (node.isSingleDot || node.name == '*') {
                    //
                    // If the first path node is a dot, then select the root rules
                    //
                    const rules = this.root.getChildren();
                    lastNodes = rules;
                } else {
                    //
                    // If the first path node is a relative name, then select the root rules
                    //
                    const rules = this.root.getChildren().filter((rule) => rule.getName() === node.name);
                    lastNodes = rules;
                }
            }

        });

        return lastNodes;
    }

    private createPathExprs(): PathExpr[] {
        const pathExprs = [] as PathExpr[];

        const orExpr = this.xpathParser.findRuleByName('orExpr');
        const unionExprNoRoot = orExpr.findRuleByName('unionExprNoRoot');
        const tokens = unionExprNoRoot.getTokens();
        const tokenTextList = unionExprNoRoot.getTokens().map((t) => t.getText()).filter((str) => str === '/');

        if (unionExprNoRoot) {
            unionExprNoRoot.getChildren()
                .forEach((rule) => {
                    const children = rule.getChildren();

                    if (children.length === 1) {
                        pathExprs.push(new PathExpr(rule));
                    } else {
                        children.forEach((rule1) => {
                            pathExprs.push(new PathExpr(rule1));
                        });
                    }
                });
            if (tokenTextList.length > 0) {
                pathExprs.push(new PathExpr(undefined));
            }

        } else {

            pathExprs.push(new PathExpr(this.xpathParser.getRoot()));
        }
        return pathExprs;
    }

    private createXPathParser(): AntlrParser {
        const factory = createFactoryBuilder()
            .lexer((input) => new xpathLexer(input))
            .parser((input) => new xpathParser(input))
            .rootRule((parser: xpathParser) => parser.main())
            .build();

        return new ImmutableAntlrParser(factory);
    }


}
