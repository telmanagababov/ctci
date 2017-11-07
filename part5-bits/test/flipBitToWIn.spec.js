const assert = require('assert');
const should = require('should');
const flipBitToWin = require('../src/flipBitToWin');

describe('flipBitToWin', function() {
  it('should be 1 for 0', function() {
    let value = parseInt('0', 2);
    flipBitToWin(value).should.be.exactly(1);
  });
  it('should be 2 for 10', function() {
    let value = parseInt('10', 2);
    flipBitToWin(value).should.be.exactly(2);
  });
  it('should be 3 for 1010', function() {
    let value = parseInt('1010', 2);
    flipBitToWin(value).should.be.exactly(3);
  });
  it('should be 5 for 1011011010', function() {
    let value = parseInt('1011011010', 2);
    flipBitToWin(value).should.be.exactly(5);
  });
});