const assert = require('assert');
const should = require('should');
const compressString = require('../src/compressString');

describe('compressString', function() {
  it('should compress repeated letter', function() {
    compressString('aaa').should.be.exactly('a3');
  });
  it('should compress several repeated letters', function() {
    compressString('aaabbbccccaa').should.be.exactly('a3b3c4a2');
  });
  it('should compress mixed repeated/non-repeated letters that can be compressed', function() {
    compressString('accbbbbcc').should.be.exactly('a1c2b4c2');
  });

  it('should not compress a letter', function() {
    compressString('a').should.be.exactly('a');
  });
  it('should not compress two same letters', function() {
    compressString('aa').should.be.exactly('aa');
  });
  it('should not compress non-repeated letters', function() {
    compressString('abcdefg').should.be.exactly('abcdefg');
  });
  it('should not compress mixed repeated/non-repeated letters that can\'t be compressed', function() {
    compressString('aaabbccd').should.be.exactly('aaabbccd');
  });
});