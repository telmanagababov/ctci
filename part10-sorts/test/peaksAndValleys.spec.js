const expect = require('chai').expect;
const sort = require('../src/peaksAndValleys');

describe('peaksAndValleys', () => {
    it('should sort array of 3 elements', () => {
        let array = [3, 2, 1],
            index = sort(array);
        expect(array).to.deep.equal([1, 3, 2]);
    });
    it('should sort array of 5 elements', () => {
        let array = [5, 3, 1, 2, 3],
            index = sort(array);
        expect(array).to.deep.equal([1, 3, 2, 5, 3]);
    });
    it('should sort array of 6 elements', () => {
        let array = [5, 3, 1, 3, 4],
            index = sort(array);
        expect(array).to.deep.equal([1, 4, 3, 5, 3]);
    });
    it('should sort array of 7 elements', () => {
        let array = [5, 3, 7, 1, 4, 0, 2],
            index = sort(array);
        expect(array).to.deep.equal([0, 2, 1, 4, 3, 7, 5]);
    });
    it('should sort array of 9 elements', () => {
        let array = [8, 11, 14, 35, 7, 3, 6, 5, 19],
            index = sort(array);
        expect(array).to.deep.equal([3, 6, 5, 8, 7, 14, 11, 35, 19]);
    });
});