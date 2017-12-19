const expect = require('chai').expect;
const calculateWays = require('../src/coins');

describe('coins', function () {
    it('should be 1 way for 1', function () {
        expect(calculateWays(1)).to.equal(1);
    });
    it('should be 1 way for 3', function () {
        expect(calculateWays(3)).to.equal(1);
    });
    it('should be 2 ways for 5', function () {
        expect(calculateWays(5)).to.equal(2);
    });
    it('should be 4 ways for 10', function () {
        expect(calculateWays(10)).to.equal(4);
    });
    /* [9 ways]
    1, 1, 1, 1, ...
    5, 1, 1, 1, ...
    5, 5, 1, 1, ...
    5, 5, 5, 1, ...
    5, 5, 5, 5
    10, 1, 1, 1, ...
    10, 5, 1, 1, ...
    10, 5, 5,
    10, 10
    */
    it('should be 9 ways for 20', function () {
        expect(calculateWays(20)).to.equal(9);
    });
    it('should be 13 ways for 25', function () {
        expect(calculateWays(25)).to.equal(13);
    });
    /* [49 ways]
    1, 1, 1, 1, 1, ...      [1]
    5, 1, 1, 1, 1, ...      [10]
    10, 1, 1, 1, 1, ...     [1]
    10, 5, 1, 1, 1, ...     [8]
    10, 10, 1, 1, 1, ...    [1]
    10, 10, 5, 1, 1, ...    [6]
    10, 10, 10, 1, 1, ...   [1]
    10, 10, 10, 5, 1, ...   [4]
    10, 10, 10, 10, 1, ...  [1]
    10, 10, 10, 10, 5, ...  [2]
    10, 10, 10, 10, 10 ...  [1]
    25, 1, 1, 1, 1 ...      [1]
    25, 5, 1, 1, 1 ...      [5]
    25, 10, 1, 1, 1 ...     [1]
    25, 10, 5, 1, 1 ...     [3]
    25, 10, 10, 1, 1 ...    [1]
    25, 10, 10, 5 ...       [1]
    25, 25 ...              [1]
    */
    it('should be 49 ways for 50', function () {
        expect(calculateWays(50)).to.equal(49);
    });
});