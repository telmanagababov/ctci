const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon')
const printAllParens = require('../src/parens');

describe('parens', function () {
    before(() => {
        sinon.spy(console, 'log');
    });
    beforeEach(() => {
        console.log.reset();
    });

    it('should print all combinations for n = 1', function () {
        printAllParens(1);
        assert(console.log.calledWith('()'));
    });
    it('should print all combinations for n = 3', function () {
        printAllParens(3);
        expect(console.log.callCount).to.equal(5);
        assert(console.log.withArgs('()()()').calledOnce);
        assert(console.log.withArgs('(()())').calledOnce);
    });
    it('should print all combinations for n = 5', function () {
        printAllParens(5);
        expect(console.log.callCount).to.equal(42);
        assert(console.log.withArgs('()()()()()').calledOnce);
        assert(console.log.withArgs('(()()()())').calledOnce);
        assert(console.log.withArgs('()(()())()').calledOnce);
    });
});