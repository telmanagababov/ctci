const assert = require('assert');
const should = require('should');
const flipsToConversion = require('../src/flipsToConversion');

describe('flipsToConversion', function() {
  it('should be 0 for identical', function() {
    let valueA = parseInt('1001001', 2),
        valueB = parseInt('1001001', 2)
    flipsToConversion(valueA, valueB).should.be.exactly(0);
  });
  it('should be 1 for 1001 and 1011', function() {
    let valueA = parseInt('1001', 2),
        valueB = parseInt('1011', 2)
    flipsToConversion(valueA, valueB).should.be.exactly(1);
  });
  it('should be 2 for 1110 and 1011', function() {
    let valueA = parseInt('1110', 2),
        valueB = parseInt('1011', 2)
    flipsToConversion(valueA, valueB).should.be.exactly(2);
  });
  it('should be 4 for 1101001 and 1000100', function() {
    let valueA = parseInt('1101001', 2),
        valueB = parseInt('1000100', 2)
    flipsToConversion(valueA, valueB).should.be.exactly(4);
  });
});