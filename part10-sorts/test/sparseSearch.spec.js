const expect = require('chai').expect;
const getIndex = require('../src/sparseSearch');

describe('sparseSearch', () => {
    it('should get index of 1 item array', () => {
        let array = ['a'],
            index = getIndex(array, 'a');
        expect(index).to.equal(0);
    });
    it('should get index of first item', () => {
        let array = ['a', '', '', 'b', 'c', '', '', 'd'],
            index = getIndex(array, 'a');
        expect(index).to.equal(0);
    });
    it('should get index of last item', () => {
        let array = ['a', '', '', 'b', 'c', '', '', 'd'],
            index = getIndex(array, 'd');
        expect(index).to.equal(7);
    });
    it('should get index of left side item', () => {
        let array = ['', 'a', '', '', 'b', '', 'c', '', '', 'd', '', ''],
            index = getIndex(array, 'a');
        expect(index).to.equal(1);
    });
    it('should get index of right side item', () => {
        let array = ['', 'a', '', '', 'b', '', 'c', '', '', 'd', '', ''],
            index = getIndex(array, 'd');
        expect(index).to.equal(9);
    });
    it('should get index of middle item', () => {
        let array = ['', 'a', '', '', 'b', '', 'c', '', '', 'd', '', ''],
            index = getIndex(array, 'b');
        expect(index).to.equal(4);
    });
});