const expect = require('chai').expect;
const sinon = require('sinon')
const printAllWays = require('../src/eightQueens');

describe('eightQueens', function () {
    before(() => {
        sinon.spy(console, 'group');
    });
    beforeEach(() => {
        console.group.reset();
    });

    it('should print all combinations', function () {
        printAllWays();
        expect(console.group.callCount).to.equal(92);
    });
});