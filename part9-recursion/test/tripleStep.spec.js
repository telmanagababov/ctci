const expect = require('chai').expect;
const getTotalPossibleWays = require('../src/tripleStep');

describe('tripleStep', function() {
  it('should have 1 way for 1 step', function() {
      expect(getTotalPossibleWays(1)).to.equal(1);
  });
  it('should have 2 way for 2 step', function() {
      expect(getTotalPossibleWays(2)).to.equal(2);
  });
  it('should have 4 way for 3 step', function() {
      expect(getTotalPossibleWays(3)).to.equal(4);
  });
  it('should have 13 way for 5 step', function() {
      expect(getTotalPossibleWays(5)).to.equal(13);
  });
});