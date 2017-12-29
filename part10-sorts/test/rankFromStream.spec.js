const expect = require('chai').expect;
const Stream = require('../src/rankFromStream');

describe('rankFromStream', () => {
    it('should get correct ranks at the start', () => {
        let stream = new Stream();
        stream.track(3);
        stream.track(7);
        expect(stream.getRankOfNumber(3)).to.equal(0);
        expect(stream.getRankOfNumber(7)).to.equal(1);
    });
    it('should get correct ranks at the middle', () => {
        let stream = new Stream();
        stream.track(3);
        stream.track(7);
        stream.track(2);
        stream.track(4);
        stream.track(6);
        expect(stream.getRankOfNumber(3)).to.equal(1);
        expect(stream.getRankOfNumber(7)).to.equal(4);
    });
    it('should get correct ranks at the end', () => {
        let stream = new Stream();
        stream.track(3);
        stream.track(7);
        stream.track(2);
        stream.track(4);
        stream.track(6);
        stream.track(3);
        stream.track(7);
        stream.track(11);
        stream.track(0);
        stream.track(5);
        expect(stream.getRankOfNumber(3)).to.equal(3);
        expect(stream.getRankOfNumber(7)).to.equal(8);
    });
});