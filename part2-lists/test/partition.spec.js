const assert = require('assert');
const should = require('should');
const list = require('../common/list');
const partition = require('../src/partition');

describe('partition', function() {
  let inputList = null;
  beforeEach(() => {
    inputList = list.create([5, 11, 31, 4, 25, 13, 4, 2]);
  })
  it('should not change list if x is too small', function() {
    let initialListState = list.flatten(inputList);
    partition(inputList, 0);
    list.flatten(inputList).should.be.deepEqual(initialListState);
  });
  it('should not change list if x is too big', function() {
    let initialListState = list.flatten(inputList);
    partition(inputList, 100);
    list.flatten(inputList).should.be.deepEqual(initialListState);
  });
  it('should move the smallest value left if "x" is only > smallest one', function() {
    partition(inputList, 3);
    list.flatten(inputList)[0].should.be.exactly(2);
  });
  it('should move the biggest value right if "x" is only < biggest one', function() {
    partition(inputList, 30);
    let resultData = list.flatten(inputList);
    resultData[resultData.length - 1].should.be.exactly(31);
  });
  it('should partition around "x" value if it exists in the list', function() {
    partition(inputList, 11);
    let resultData = list.flatten(inputList),
      lowerPart = resultData.slice(0, 4).sort(),
      biggerPart = resultData.slice(4).sort();
    lowerPart.should.be.deepEqual([2, 4, 4, 5]);
    biggerPart.should.be.deepEqual([11, 13, 25, 31]);
  });
  it('should partition around "x" value if it\'s not exists in the list', function() {
    partition(inputList, 10);
    let resultData = list.flatten(inputList),
      lowerPart = resultData.slice(0, 4).sort(),
      biggerPart = resultData.slice(4).sort();
    lowerPart.should.be.deepEqual([2, 4, 4, 5]);
    biggerPart.should.be.deepEqual([11, 13, 25, 31]);
  });
});