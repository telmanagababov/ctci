const assert = require('assert');
const should = require('should');
const Node = require('../common/treeNode');
const hasRoute = require('../src/hasRoute');

describe('hasRoute', function() {
  let graph = null,
    nodes = null;
  beforeEach(function() {
    graph = new Node('root');
    nodes = {
      a: new Node('a'),
      b: new Node('b'),
      c: new Node('c'),
      d: new Node('d'),
      e: new Node('e'),
      f: new Node('f'),
      g: new Node('g')
    };
    nodes.a.children = [nodes.d, nodes.e];
    nodes.d.children = [nodes.f];
    nodes.b.children = [nodes.g];
    graph.children = [nodes.a, nodes.b, nodes.c]
  });
  it('should find a route if nodes have one', function() {
    hasRoute(nodes.a, nodes.f).should.be.exactly(true);
  });
  it('should find nothing if nodes have no route', function() {
    hasRoute(nodes.g, nodes.e).should.be.exactly(false);
  });
});