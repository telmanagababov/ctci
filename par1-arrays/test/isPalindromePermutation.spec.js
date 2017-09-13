const assert = require('assert');
const should = require('should');
const isPalindromePermutation = require('../src/isPalindromePermutation');

describe('isPalindromePermutation', function() {
  it('should be TRUE for a single letter', function() {
    isPalindromePermutation('a').should.be.exactly(true);
  });
  it('should be TRUE for two same letters', function() {
    isPalindromePermutation('aa').should.be.exactly(true);
  });
  it('should be TRUE for a palindrome word', function() {
    isPalindromePermutation('baa').should.be.exactly(true);
  });
  it('should be TRUE for a palindrome sentence', function() {
    isPalindromePermutation('ba cd cb a').should.be.exactly(true);
  });
  it('should be FALSE for not palindrome two letters', function() {
    isPalindromePermutation('ba').should.be.exactly(false);
  });
  it('should be FALSE for a not palindrome word', function() {
    isPalindromePermutation('bacad').should.be.exactly(false);
  });
  it('should be FALSE for a not palindrome sentence', function() {
    isPalindromePermutation('bac ada cade').should.be.exactly(false);
  });
});