const expect = require('chai').expect;
const magicIndex = require('../src/magicIndex');
const findMagicIndex = magicIndex.findMagicIndex;
const findMagicIndexInDistinctArray = magicIndex.findMagicIndexInDistinctArray;

describe('magicIndex', function () {
    describe('findMagicIndexInDistinctArray', function() {
        it('should be null if has no magic indexes', function () {
            const data = [-1, 3, 5, 11, 15];
            let index = findMagicIndexInDistinctArray(data);
            expect(index).to.equal(null);
        });
        it('should be correct index if has one', function () {
            const data = [-1, 3, 2, 11, 15];
            let index = findMagicIndexInDistinctArray(data);
            expect(index).to.equal(2);
        });
    });

    describe('findMagicIndex', function() {
        it('should be null if has no magic indexes', function () {
            const data = [3, 3, 5, 5, 5];
            let index = findMagicIndex(data);
            expect(index).to.equal(null);
        });
        it('should be correct index if has one', function () {
            const data = [-1, 3, 3, 3, 15];
            let index = findMagicIndex(data);
            expect(index).to.equal(3);
        });
    });
});