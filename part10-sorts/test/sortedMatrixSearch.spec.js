const expect = require('chai').expect;
const search = require('../src/sortedMatrixSearch');

describe('sortedMatrixSearch', () => {
    let matrix = [
        [4, 8, 11, 13, 15],
        [7, 10, 14, 16, 17],
        [9, 18, 19, 23, 27],
        [13, 20, 24, 29, 33],
        [21, 22, 28, 34, 40]
    ]
    it('should search first item', () => {
        let index = search(matrix, 4);
        expect(index).to.deep.equal([0, 0]);
    });
    it('should search last item', () => {
        let index = search(matrix, 40);
        expect(index).to.deep.equal([4, 4]);
    });
    it('should search item from first row', () => {
        let index = search(matrix, 11);
        expect(index).to.deep.equal([0, 2]);
    });
    it('should search first column', () => {
        let index = search(matrix, 9);
        expect(index).to.deep.equal([2, 0]);
    });
    it('should search item from last row', () => {
        let index = search(matrix, 28);
        expect(index).to.deep.equal([4, 2]);
    });
    it('should search item from last column', () => {
        let index = search(matrix, 27);
        expect(index).to.deep.equal([2, 4]);
    });
    it('should search middle item', () => {
        let index = search(matrix, 19);
        expect(index).to.deep.equal([2, 2]);
    });
});