const assert = require('assert');
const should = require('should');
const nextNumber = require('../src/nextNumber');
const nextLowest = nextNumber.nextLowest;
const nextLargest = nextNumber.nextLargest;

describe('nextNumber', function() {
  it('should get next lowest for 101', function() {
    let value = parseInt('101', 2),
        result = parseInt('11', 2);
    nextLowest(value).should.be.exactly(result);
  });
  it('should get next lowest for 10110', function() {
    let value = parseInt('10110', 2),
        result = parseInt('10101', 2);
    nextLowest(value).should.be.exactly(result);
  });
  it('should get next lowest for 110011', function() {
    let value = parseInt('110011', 2),
        result = parseInt('101110', 2);
    nextLowest(value).should.be.exactly(result);
  });

  it('should get next largest for 101', function() {
    let value = parseInt('101', 2),
        result = parseInt('110', 2);
    nextLargest(value).should.be.exactly(result);
  });
  it('should get next largest for 10110', function() {
    let value = parseInt('10110', 2),
        result = parseInt('11001', 2);
    nextLargest(value).should.be.exactly(result);
  });
  it('should get next largest for 110011', function() {
    let value = parseInt('110011', 2),
        result = parseInt('110101', 2);
    nextLargest(value).should.be.exactly(result);
  });
});