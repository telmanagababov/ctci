const assert = require('assert');
const should = require('should');
const urlify = require('../src/urlify.js');

describe('urlify', function() {
  it('should convert input "" to ""', function() {
    urlify('').should.be.exactly('');
  });
  it('should convert input "abc" to "abc"', function() {
    urlify('abc').should.be.exactly('abc');
  });
  it('should convert input " abc" to "%20abc"', function() {
    urlify(' abc').should.be.exactly('%20abc');
  });
  it('should convert input "abc " to "abc%20"', function() {
    urlify('abc ').should.be.exactly('abc%20');
  });
  it('should convert input " a b c " to "%20a%20b%20c%20"', function() {
    urlify(' a b c ').should.be.exactly('%20a%20b%20c%20');
  });
});