const assert = require('assert');
const should = require('should');
const swapPairwise = require('../src/swapPairwise');

describe('swapPairwise', function() {
  it('should be same for single bit', function() {
    let value = parseInt('1', 2),
        result = parseInt('1', 2);
    swapPairwise(value).should.be.exactly(result);
  });
  it('should swap 10 to 01', function() {
    let value = parseInt('10', 2),
        result = parseInt('01', 2);
    swapPairwise(value).should.be.exactly(result);
  });
  it('should swap 110 to 101', function() {
    let value = parseInt('110', 2),
        result = parseInt('101', 2);
    swapPairwise(value).should.be.exactly(result);
  });
  it('should swap 1110 to 1101', function() {
    let value = parseInt('1010', 2),
        result = parseInt('0101', 2);
    swapPairwise(value).should.be.exactly(result);
  });
  it('should swap 100110 to 011001', function() {
    let value = parseInt('100110', 2),
        result = parseInt('011001', 2);
    swapPairwise(value).should.be.exactly(result);
  });
});