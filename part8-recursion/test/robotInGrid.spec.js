const expect = require('chai').expect;
const getPath = require('../src/robotInGrid');

describe('robotInGrid', function () {
    it('should provide correct path for maze without off limits', function () {
        const maze = [
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0']
        ];
        let path = getPath(maze);
        expect(path).to.deep.equal(['d', 'r', 'd', 'r', 'd', 'r']);
    });
    it('should provide correct path for maze with off limits', function () {
        const maze = [
            ['0', '0', '0', '0'],
            ['x', 'x', '0', '0'],
            ['x', '0', '0', '0'],
            ['0', '0', 'x', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0']
        ];
        let path = getPath(maze);
        expect(path).to.deep.equal(['r', 'r', 'd', 'd', 'r', 'd', 'd', 'd']);
    });
    it('should provide empty path for maze without paths', function () {
        const maze = [
            ['0', '0', '0', '0'],
            ['x', 'x', '0', 'x'],
            ['0', '0', 'x', '0'],
        ];
        let path = getPath(maze);
        expect(path).to.deep.equal([]);
    });
});