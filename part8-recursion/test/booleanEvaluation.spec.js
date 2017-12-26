const expect = require('chai').expect;
const getNumberOfWays = require('../src/booleanEvaluation');

describe('booleanEvaluation', function () {
    it('should have 1 way for ["1^0|0|1", false]', function () {
        let ways = getNumberOfWays('1^0|0|1', false);
        expect(ways).to.equal(1);
    });
    it('should have 6 ways for ["0^0&1&0", false]', function () {
        let ways = getNumberOfWays('0^0&1&0', false);
        expect(ways).to.equal(6);
    });
    it('should have 9 ways for ["0&0&0&1^1|0", true]', function () {
        let ways = getNumberOfWays('0&0&0&1^1|0', true);
        expect(ways).to.equal(9);
    });
});