const assert = require('assert');
const should = require('should');
const isUnique = require('../src/isUnique.js');

describe('isUnique', function() {
  it('should be TRUE for input "abcdef"', function() {
    isUnique('abcdef').should.be.exactly(true);
  });
  it('should be TRUE for empty input', function() {
    isUnique('').should.be.exactly(true);
  });
  it('should be TRUE for input "a"', function() {
    isUnique('abcdef').should.be.exactly(true);
  });
  it('should be FALSE for input "abcdabcd"', function() {
    isUnique('abcdabcd').should.be.exactly(false);
  });
  it('should be FALSE for input "aa"', function() {
    isUnique('aa').should.be.exactly(false);
  });
  it('should be FALSE for input "abcda"', function() {
    isUnique('abcda').should.be.exactly(false);
  });
});