// Generated from JSON.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JSONParser.

function JSONVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JSONVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JSONVisitor.prototype.constructor = JSONVisitor;

// Visit a parse tree produced by JSONParser#json.
JSONVisitor.prototype.visitJson = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSONParser#obj.
JSONVisitor.prototype.visitObj = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSONParser#pair.
JSONVisitor.prototype.visitPair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSONParser#array.
JSONVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSONParser#value.
JSONVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JSONVisitor = JSONVisitor;