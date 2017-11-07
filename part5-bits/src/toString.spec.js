const assert = require('assert');
const should = require('should');
const toString = require('../src/toString');

describe('toString', function() {
  it('should convert 0.5 to string representation', function() {
    toString(0.5).should.be.exactly("0.1");
  });
  it('should convert 0.1 to string representation', function() {
    toString(0.1).should.be.exactly("0.0001100110011001100110011001100110011001100110011001101");
  });
});