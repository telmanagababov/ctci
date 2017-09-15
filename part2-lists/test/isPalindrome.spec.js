const assert = require('assert');
const should = require('should');
const list = require('../common/list');
const isPalindrome = require('../src/isPalindrome');

describe('isPalindrome', function() {
  it('should return FALSE for not a palindrome', function() {
    const input = list.create([1, 2, 3, 4, 5]);
    isPalindrome(input).should.be.exactly(false);
  });
  it('should return TRUE for an even palindrome', function() {
    const input = list.create([1, 2, 3, 3, 2, 1]);
    isPalindrome(input).should.be.exactly(true);
  });
  it('should return TRUE for an odd palindrome', function() {
    const input = list.create([1, 2, 3, 2, 1]);
    isPalindrome(input).should.be.exactly(true);
  });
});