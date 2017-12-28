const expect = require('chai').expect;
const Listy = require('../common/listy');
const getIndex = require('../src/sortedSearchNoSize');

describe('sortedSearchNoSize', () => {
    it('should get index of 1 item array', () => {
        let list = new Listy([1]),
            index = getIndex(list, 1);
        expect(index).to.equal(0);
    });
    it('should get index of first item', () => {
        let list = new Listy([1, 3, 5, 6, 11]),
            index = getIndex(list, 1);
        expect(index).to.equal(0);
    });
    it('should get index of last item', () => {
        let list = new Listy([1, 3, 5, 6, 11]),
            index = getIndex(list, 11);
        expect(index).to.equal(4);
    });
    it('should get index of left side item', () => {
        let list = new Listy([1, 3, 5, 6, 11, 24, 35]),
            index = getIndex(list, 3);
        expect(index).to.equal(1);
    });
    it('should get index of right side item', () => {
        let list = new Listy([1, 3, 5, 6, 11, 24, 35]),
            index = getIndex(list, 24);
        expect(index).to.equal(5);
    });
    it('should get index of middle item', () => {
        let list = new Listy([1, 3, 5, 6, 11, 24, 35]),
            index = getIndex(list, 6);
        expect(index).to.equal(3);
    });
});