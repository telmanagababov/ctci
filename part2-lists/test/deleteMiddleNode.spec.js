const assert = require('assert');
const should = require('should');
const list = require('../common/list');
const deleteMiddleNode = require('../src/deleteMiddleNode');

describe('deleteMiddleNode', function() {
  it('should remove 2nd node', function() {
    testData({
      inputData: [1, 2, 3, 4, 5],
      inputIndex: 1,
      resultData: [1, 3, 4, 5]
    });
  });
  it('should remove pre-last node', function() {
    testData({
      inputData: [1, 2, 3, 4, 5],
      inputIndex: 3,
      resultData: [1, 2, 3, 5]
    });
  });
  it('should remove middle node', function() {
    testData({
      inputData: [1, 2, 3, 4, 5],
      inputIndex: 2,
      resultData: [1, 2, 4, 5]
    });
  });
});

function testData(data) {
  let inputData = data.inputData,
    inputIndex = data.inputIndex,
    inputList = list.create(inputData),
    inputItem = getItemByIndex(inputList, inputIndex);
  deleteMiddleNode(inputItem);
  let resultData = list.flatten(inputList),
    expectData = data.resultData;
  resultData.should.be.deepEqual(expectData);
}

function getItemByIndex(head, index) {
  let node = head;
  for(let i = 0; i < index; i++) {
      node = node.next;
  }
  return node;
}