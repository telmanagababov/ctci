const assert = require('assert');
const should = require('should');
const isRotatedString = require('../src/isRotatedString');

describe('isRotatedString', function() {
  it('should be TRUE for single letters', function() {
    isRotatedString('a', 'a').should.be.exactly(true);
  });
  it('should be TRUE for same words', function() {
    isRotatedString('test', 'test').should.be.exactly(true);
  });
  it('should be TRUE for rotated words', function() {
    isRotatedString('apple', 'pleap').should.be.exactly(true);
  });
  it('should be TRUE for long rotated words', function() {
    isRotatedString('waterbottle', 'erbottlewat').should.be.exactly(true);
  });

  it('should be FALSE for different letters', function() {
    isRotatedString('t', 'a').should.be.exactly(false);
  });
  it('should be FALSE for different words', function() {
    isRotatedString('test', 'apple').should.be.exactly(false);
  });
  it('should be FALSE for different words', function() {
    isRotatedString('apple', 'aplpe').should.be.exactly(false);
  });
});