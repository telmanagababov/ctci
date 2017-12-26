const expect = require('chai').expect;
const getAllSubsets = require('../src/powerSet');

describe('getAllSubsets', function () {
    it('should get subsets for [1] set', function () {
        const set = [1];
        let allSubsets = getAllSubsets(set);
        expect(allSubsets).to.deep.include([]);
        expect(allSubsets).to.deep.include([1]);
    });
    it('should get subsets for [1,2] set', function () {
        const set = [1, 2];
        let allSubsets = getAllSubsets(set);
        expect(allSubsets).to.deep.include([]);
        expect(allSubsets).to.deep.include([1]);
        expect(allSubsets).to.deep.include([2]);
        expect(allSubsets).to.deep.include([1,2]);
    });
    it('should get subsets for [1,2,3] set', function () {
        const set = [1, 2, 3];
        let allSubsets = getAllSubsets(set);
        expect(allSubsets).to.deep.include([]);
        expect(allSubsets).to.deep.include([1]);
        expect(allSubsets).to.deep.include([2]);
        expect(allSubsets).to.deep.include([3]);
        expect(allSubsets).to.deep.include([1,2]);
        expect(allSubsets).to.deep.include([1,3]);
        expect(allSubsets).to.deep.include([2,3]);
        expect(allSubsets).to.deep.include([1,2,3]);
    });
});