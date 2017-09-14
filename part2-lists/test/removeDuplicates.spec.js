const assert = require('assert');
const should = require('should');
const list = require('../common/list');
const removeDuplicates = require('../src/removeDuplicates');

describe('removeDuplicates', function() {
  it('should be the same for single-node list', function() {
    testData({
      input: [1],
      output: [1]
    });
  });
  it('should be the same for list without duplicates', function() {
    testData({
      input: [1, 11, 3, 8, 2],
      output: [1, 11, 3, 8, 2]
    });
  });
  it('should remove duplicates if list has ones', function() {
    testData({
      input: [1, 11, 3, 3, 1, 8, 2, 11],
      output: [1, 11, 3, 8, 2]
    });
  });
});

function testData(data) {
  let inputData = data.input,
    inputList = list.create(inputData),
    outputList = removeDuplicates(inputList),
    outputData = list.flatten(outputList),
    expectData = data.output;
  outputData.should.be.deepEqual(expectData);
}