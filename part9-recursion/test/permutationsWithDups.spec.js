const expect = require('chai').expect;
const computePermutations = require('../src/permutationsWithDups');

describe('permutationsWithDups', function () {
    it('should be 1 for x string', function () {
        let permutations = computePermutations('x');
        expect(permutations).to.equal(1);
    });
    it('should be 1 for aa string', function () {
        let permutations = computePermutations('aa');
        expect(permutations).to.equal(1);
    });
    it('should be 2 for ab string', function () {
        let permutations = computePermutations('ab');
        expect(permutations).to.equal(2);
    });
    it('should be 3 for abb string', function () {
        let permutations = computePermutations('abb');
        expect(permutations).to.equal(3);
    });
    it('should be 6 for abc string', function () {
        let permutations = computePermutations('abc');
        expect(permutations).to.equal(6);
    });
    /*12
    aabc
    aacb
    abac
    abca
    acab
    acba
    baac
    baca
    bcaa
    caab
    caba
    cbaa
    */
    it('should be 12 for aabc string', function () {
        let permutations = computePermutations('aabc');
        expect(permutations).to.equal(12);
    });
    /*12
    abcc
    acbc
    accb
    bacc
    cabc
    cacb
    bcac
    cbac
    ccab
    bcca
    cbca
    ccba
    */
    it('should be 12 for abcc string', function () {
        let permutations = computePermutations('abcc');
        expect(permutations).to.equal(12);
    });
    it('should be 24 for abcd string', function () {
        let permutations = computePermutations('abcd');
        expect(permutations).to.equal(24);
    });
    /* 20
    abbbc
    abbcb
    abcbb
    acbbb
    babbc
    babcb
    bacbb
    cabbb
    bbabc
    bbacb
    bcabb
    cbabb
    bbbac
    bbcab
    bcbab
    cbbab
    bbbca
    bbcba
    bcbba
    cbbba
    */
    it('should be 20 for abbbc string', function () {
        let permutations = computePermutations('abbbc');
        expect(permutations).to.equal(20);
    });
    it('should be 20 for abbcb string', function () {
        let permutations = computePermutations('abbcb');
        expect(permutations).to.equal(20);
    });
    it('should be 60 for abacd string', function () {
        let permutations = computePermutations('abacd');
        expect(permutations).to.equal(60);
    });
    it('should be 120 for abcde string', function () {
        let permutations = computePermutations('abcde');
        expect(permutations).to.equal(120);
    });
});