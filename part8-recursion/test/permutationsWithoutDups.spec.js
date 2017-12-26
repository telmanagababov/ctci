const expect = require('chai').expect;
const computePermutations = require('../src/permutationsWithoutDups');

describe('permutationsWithoutDuplicates', function () {
    it('should be 1 for x string', function () {
        let permutations = computePermutations('x');
        expect(permutations).to.equal(1);
    });
    it('should be 2 for ab string', function () {
        let permutations = computePermutations('ab');
        expect(permutations).to.equal(2);
    });
    it('should be 6 for 123 string', function () {
        let permutations = computePermutations('123');
        expect(permutations).to.equal(6);
    });
    it('should be 120 for 1a2b3 string', function () {
        let permutations = computePermutations('1a2b3');
        expect(permutations).to.equal(120);
    });
});