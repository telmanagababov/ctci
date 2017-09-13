const assert = require('assert');
const should = require('should');
const isPermutation = require('../src/isPermutation.js');

describe('isPermutation', function() {
  it('should be TRUE for input "a, a"', function() {
    isPermutation('a', 'a').should.be.exactly(true);
  });
  it('should be TRUE for input "abc, abc"', function() {
    isPermutation('abc', 'abc').should.be.exactly(true);
  });
  it('should be TRUE for input "abc, cab"', function() {
    isPermutation('abc', 'cab').should.be.exactly(true);
  });
  it('should be TRUE for input "abcdefg, gacebfd"', function() {
    isPermutation('abcdefg', 'gacebfd').should.be.exactly(true);
  });
  it('should be FALSE for input "a, b"', function() {
    isPermutation('a', 'b').should.be.exactly(false);
  });
  it('should be FALSE for input "abc, bde"', function() {
    isPermutation('abc', 'bde').should.be.exactly(false);
  });
  it('should be FALSE for input "abcde, abc"', function() {
    isPermutation('abcde', 'abc').should.be.exactly(false);
  });
  it('should be FALSE for input "abcd, abcdabcd"', function() {
    isPermutation('abcd', 'abcdabcd').should.be.exactly(false);
  });
});