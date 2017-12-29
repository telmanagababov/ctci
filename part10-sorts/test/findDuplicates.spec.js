const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon')
const findDuplicates = require('../src/findDuplicates');

describe('findDuplicates', () => {
    before(() => {
        sinon.spy(console, 'log');
    });
    beforeEach(() => {
        console.log.reset();
    });

    it('should find all the duplicates', () => {
        let array = [
            3, 77, 4, 11, 19,
            2090, 31999, 0, 14,
            255, 16, 255, 0,
            99, 135, 136, 11,
            14444, 8790, 8790, 9009,
            9, 105, 365, 490,
            28777, 388, 1, 2,
            1380, 13080, 98, 28777
        ];

        findDuplicates(array);

        expect(console.log.callCount).to.equal(5);
        assert(console.log.withArgs(0).calledOnce);
        assert(console.log.withArgs(11).calledOnce);
        assert(console.log.withArgs(255).calledOnce);
        assert(console.log.withArgs(8790).calledOnce);
        assert(console.log.withArgs(28777).calledOnce);
    });
});