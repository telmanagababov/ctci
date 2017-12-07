const expect = require('chai').expect;
const multiply = require('../src/recursiveMultiply');

describe('multiply', function () {
    it('should be 0 for 0xN', function () {
        let a = 0,
            b = 10
        expect(multiply(a, b)).to.equal(a);
    });
    it('should be N for 1xN', function () {
        let a = 1,
            b = 10
        expect(multiply(a, b)).to.equal(b);
    });
    it('should be AxB for AxB', function () {
        let a = 15,
            b = 10
        expect(multiply(a, b)).to.equal(a * b);
    });
    it('should be AxB for (-A)x(-B)', function () {
        let a = -15,
            b = -10
        expect(multiply(a, b)).to.equal(a * b);
    });
    it('should be -AxB for (-A)xB', function () {
        let a = -15,
            b = 10
        expect(multiply(a, b)).to.equal(a * b);
    });
});