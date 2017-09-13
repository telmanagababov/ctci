const assert = require('assert');
const should = require('should');
const isOneAway = require('../src/isOneAway');

describe('isOneAway', function() {
  it('should be TRUE for two empty', function() {
    isOneAway('', '').should.be.exactly(true);
  });
  it('should be TRUE for empty and a letter', function() {
    isOneAway('', 'a').should.be.exactly(true);
  });
  it('should be TRUE for two different letters', function() {
    isOneAway('a', 'b').should.be.exactly(true);
  });
  it('should be TRUE for two same letters', function() {
    isOneAway('a', 'a').should.be.exactly(true);
  });
  it('should be TRUE for two same words', function() {
    isOneAway('test', 'test').should.be.exactly(true);
  });
  it('should be TRUE for two words with one error', function() {
    isOneAway('test', 'tezt').should.be.exactly(true);
  });
  it('should be TRUE if second word has extra letter in the beginning', function() {
    isOneAway('test', 'atest').should.be.exactly(true);
  });
  it('should be TRUE if second word has extra letter in the middle', function() {
    isOneAway('test', 'teast').should.be.exactly(true);
  });
  it('should be TRUE if second word has extra letter in the end', function() {
    isOneAway('test', 'testa').should.be.exactly(true);
  });


  it('should be FALSE for empty and a word', function() {
    isOneAway('', 'test').should.be.exactly(false);
  });
  it('should be FALSE for two different words', function() {
    isOneAway('test', 'apple').should.be.exactly(false);
  });
  it('should be FALSE for two words with two errors', function() {
    isOneAway('test', 'tezd').should.be.exactly(false);
  });
  it('should be FALSE if second word has 2 extra letters', function() {
    isOneAway('test', 'atesta').should.be.exactly(false);
  });
  it('should be FALSE if second word has 2 extra letters in the middle', function() {
    isOneAway('test', 'teaast').should.be.exactly(false);
  });
  it('should be FALSE if second word has 2 extra letters in the end', function() {
    isOneAway('test', 'testaa').should.be.exactly(false);
  });
  it('should be FALSE if second word has one error and 1 extra letter', function() {
    isOneAway('test', 'tezta').should.be.exactly(false);
  });
});