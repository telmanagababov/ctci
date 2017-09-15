const assert = require('assert');
const should = require('should');
const list = require('../common/list');
const sumLists = require('../src/sumLists');

describe('sumLists', function() {
  it('should sumList in normal order if "reverse" unset', function() {
    const listA = list.create([6, 1, 7]),
      listB = list.create([2, 9, 5]),
      sumList = sumLists(listA, listB, false);
    list.flatten(sumList).should.be.deepEqual([9, 1, 2]);
  });
  it('should sumList in reverse order if "reverse" is set', function() {
    const listA = list.create([7, 1, 6]),
      listB = list.create([5, 9, 2]),
      sumList = sumLists(listA, listB, true);
    list.flatten(sumList).should.be.deepEqual([2, 1, 9]);
  });
});