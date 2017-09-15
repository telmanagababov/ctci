const assert = require('assert');
const should = require('should');
const list = require('../common/list');
const getIntersection = require('../src/getIntersection');

describe('getIntersection', function() {
  it('should return null if has no intersections', function() {
    let listA = list.create([1, 2, 3, 4, 5]),
        listB = list.create([1, 2, 3, 4, 5])
    should(getIntersection(listA, listB)).be.exactly(null);
  });
  it('should return intersection element if has one', function() {
    let listA = list.create([1, 2, 3]),
        listB = list.create([1, 2, 3]),
        commonElement = list.create([4, 5]);
    list.addNode(listA, commonElement); 
    list.addNode(listB, commonElement); 
    getIntersection(listA, listB).should.be.exactly(commonElement);
  });
});