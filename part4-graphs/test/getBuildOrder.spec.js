const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const getBuildOrder = require('../src/getBuildOrder');

describe('getBuildOrder', function () {
  it('should return correct order for a short list', function () {
    let projects = ['a', 'b', 'c'],
      dependencies = {
        a: 'b',
        b: 'c'
      },
      order = ['c', 'b', 'a'];
    getBuildOrder(projects, dependencies).should.be.deepEqual(order);
  });
  it('should return correct order for a long list', function () {
    let projects = ['a', 'b', 'c', 'd', 'e', 'f'],
      dependencies = {
        a: 'c',
        c: 'd',
        e: 'f'
      },
      order = ['d', 'c', 'a', 'b', 'f', 'e'];
    getBuildOrder(projects, dependencies).should.be.deepEqual(order);
  });
  it('should throw an error if has a simple cyclic dependency', function () {
    let projects = ['a', 'b', 'c', 'd', 'e', 'f'],
      dependencies = {
        a: 'c',
        c: 'a'
      };
    should.throws(() => { getBuildOrder(projects, dependencies); }, Error); 
  });
  it('should throw an error if has a complex cyclic dependency', function () {
    let projects = ['a', 'b', 'c', 'd', 'e', 'f'],
      dependencies = {
        a: 'b',
        b: 'c',
        c: 'd',
        d: 'e',
        e: 'f',
        f: 'c',
      };
    should.throws(() => { getBuildOrder(projects, dependencies); }, Error); 
  });
});