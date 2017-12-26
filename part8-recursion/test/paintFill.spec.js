const expect = require('chai').expect;
const paintFill = require('../src/paintFill');

describe('paintFill', function () {
    let screen = [];

    beforeEach(() => {
        screen = [
            ['r', 'r', 'r', 'r'],
            ['r', 'r', 'r', 'r'],
            ['g', 'g', 'b', 'r'],
            ['r', 'b', 'b', 'b'],
            ['r', 'y', 'b', 'r'],
            ['y', 'y', 'b', 'r'],
        ];
    });

    it('should fill red pixels', function () {
        paintFill(screen, { x: 0, y: 0 }, 'w');
        expect(screen[0]).to.deep.equal(['w', 'w', 'w', 'w']);
        expect(screen[1]).to.deep.equal(['w', 'w', 'w', 'w']);
    });
    it('should fill green pixels', function () {
        paintFill(screen, { x: 0, y: 2 }, 'w');
        expect(screen[2]).to.deep.equal(['w', 'w', 'b', 'r']);
    });
    it('should fill blue pixels', function () {
        paintFill(screen, { x: 2, y: 3 }, 'w');
        expect(screen[2]).to.deep.equal(['g', 'g', 'w', 'r']);
        expect(screen[3]).to.deep.equal(['r', 'w', 'w', 'w']);
        expect(screen[4]).to.deep.equal(['r', 'y', 'w', 'r']);
        expect(screen[5]).to.deep.equal(['y', 'y', 'w', 'r']);
    });
    it('should fill yellow pixels', function () {
        paintFill(screen, { x: 1, y: 5 }, 'w');
        expect(screen[4]).to.deep.equal(['r', 'w', 'b', 'r']);
        expect(screen[5]).to.deep.equal(['w', 'w', 'b', 'r']);
    });
});