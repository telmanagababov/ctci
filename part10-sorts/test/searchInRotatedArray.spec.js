const expect = require('chai').expect;
const search = require('../src/searchInRotatedArray');

describe('searchInRotatedArray', () => {
    it('should find in original array', () => {
        let array = [1, 3, 5, 7, 11, 15],
            result = search(array, 3);
        expect(result).to.equal(1);
    });
    it('should find in one-moved array (left)', () => {
        let array = [3, 5, 7, 11, 15, 1],
            result = search(array, 1);
        expect(result).to.equal(5);
    });
    it('should find in one-moved array (right)', () => {
        let array = [3, 5, 7, 11, 15, 1],
            result = search(array, 15);
        expect(result).to.equal(4);
    });
    it('should find in max-moved array (left)', () => {
        let array = [15, 1, 3, 5, 7, 11],
            result = search(array, 15);
        expect(result).to.equal(0);
    });
    it('should find in max-moved array (right)', () => {
        let array = [15, 1, 3, 5, 7, 11],
            result = search(array, 1);
        expect(result).to.equal(1);
    });
    it('should find in average-moved array (left)', () => {
        let array = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14],
            result = search(array, 19);
        expect(result).to.equal(2);
    });
    it('should find in average-moved array (right)', () => {
        let array = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14],
            result = search(array, 7);
        expect(result).to.equal(9);
    });
});