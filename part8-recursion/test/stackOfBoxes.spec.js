const expect = require('chai').expect;
const Box = require('../common/box');
const computeTallestHeight = require('../src/stackOfBoxes');

describe('stackOfBoxes', function () {
    it('should compute height for 2 boxes', function () {
        let boxes = [
            new Box(4, 4, 4),
            new Box(6, 6, 6)
        ];
        expect(computeTallestHeight(boxes)).to.equal(10);
    });
    it('should compute height for 5 boxes', function () {
        let boxes = [
            new Box(1, 1, 1),
            new Box(2, 4, 4),
            new Box(6, 4, 8),
            new Box(7, 8, 9),
            new Box(3, 6, 3)
        ];
        expect(computeTallestHeight(boxes)).to.equal(13);
    });
    it('should compute height for 7 boxes', function () {
        let boxes = [
            new Box(3, 2, 3),
            new Box(2, 4, 4),
            new Box(6, 6, 6),
            new Box(7, 8, 9),
            new Box(4, 13, 8),
            new Box(10, 8, 9),
            new Box(8, 8, 8)
        ];
        expect(computeTallestHeight(boxes)).to.equal(18);
    });
});