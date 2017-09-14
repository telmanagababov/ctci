const assert = require('assert');
const should = require('should');
const list = require('../common/list');
const getElementToLast = require('../src/getElementToLast');

describe('getElementToLast', function() {
  it('should return itself if only element in list', function() {
    testData({
      inputData: [1],
      inputIndex: 0,
      outputValue: 1
    });
  });
  it('should return the last element if index "0"', function() {
    testData({
        inputData: [1, 2, 7, 6, 23, 4],
        inputIndex: 0,
        outputValue: 4
      });
  });
  it('should return the first element if index "list.length"', function() {
    testData({
        inputData: [1, 2, 7, 6, 23, 4],
        inputIndex: 5,
        outputValue: 1
      });
  });
  it('should return the element by index to end', function() {
    testData({
        inputData: [1, 2, 7, 6, 23, 4],
        inputIndex: 3,
        outputValue: 7
      });
  });
});

function testData(data) {
  let inputData = data.inputData,
    inputIndex = data.inputIndex,
    inputList = list.create(inputData),
    outputList = getElementToLast(inputList, inputIndex),
    outputData = outputList.value,
    expectData = data.outputValue;
  outputData.should.be.deepEqual(expectData);
}