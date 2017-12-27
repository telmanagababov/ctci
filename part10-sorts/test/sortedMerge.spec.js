const expect = require('chai').expect;
const mergeSorted = require('../src/sortedMerge');

describe('sortedMerge', () => {
    it('should merge one-value arrays', () => {
        let a = [1],
            b = [2],
            result = mergeSorted(a, b);
        expect(result).to.deep.equal([1, 2]);
    });
    it('should merge arrays with one empty', () => {
        let a = [],
            b = [2, 6, 8],
            result = mergeSorted(a, b);
        expect(result).to.deep.equal([2, 6, 8]);
    });
    it('should merge two arrays', () => {
        let a = [1, 4, 6, 11, 23, 41],
            b = [2, 4, 13, 15, 17, 35],
            result = mergeSorted(a, b);
        expect(result).to.deep.equal([1, 2, 4, 4, 6, 11, 13, 15, 17, 23, 35, 41]);
    });
});