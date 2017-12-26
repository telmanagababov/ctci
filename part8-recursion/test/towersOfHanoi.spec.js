const expect = require('chai').expect;
const moveDisks = require('../src/towersOfHanoi');
const Stack = require('../common/stack');

describe('towersOfHanoi', function () {
    it('should move disks from 1 tower to the last', function () {
        const itemsNumber = 6;

        let towers = [
            new Stack(),
            new Stack(),
            new Stack()
        ];

        for (let i = 0; i < itemsNumber; i++) {
            towers[0].push(itemsNumber - i);
        }

        moveDisks(itemsNumber, towers[0], towers[2], towers[1]);

        expect(towers[0].isEmpty()).to.equal(true);

        expect(towers[2].pop()).to.equal(1);
        expect(towers[2].pop()).to.equal(2);
        expect(towers[2].pop()).to.equal(3);
        expect(towers[2].pop()).to.equal(4);
        expect(towers[2].pop()).to.equal(5);
        expect(towers[2].pop()).to.equal(6);
    });
});