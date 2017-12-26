function poison(poisonedId) {
    const bottles = Array.from(new Array(1000))
        .map((item, id) => new Bottle(id === poisonedId));

    const strips = Array.from(new Array(10))
        .map(item => new TestStrip());

    fillStrips(strips, bottles);
    testStrips(strips);

    let stripsState = getStripsState(strips);
    let bottleId = parseInt(stripsState, 2);

    console.group('poison');
    console.log('poisonedId: ', poisonedId);
    console.log('stripState: ', stripsState);
    console.log('bottleId: ', bottleId);
    console.groupEnd();

    function fillStrips(strips, bottles) {
        let stripsState = 0;
        bottles.forEach((bottle, i) => {
            addBottleToStrips(bottle, strips, stripsState);
            stripsState++;
        });
    }

    function addBottleToStrips(bottle, strips, stripsState) {
        let stripBits = reverseString(stripsState.toString(2));
        for (let i = 0; i <= stripBits.length; i++) {
            if (stripBits.charAt(i) === '1') {
                strips[i].add(bottle);
            }
        }
    }

    function testStrips(strips) {
        strips.forEach(strip => strip.test());
    }

    function getStripsState(strips) {
        let stripsState = strips.reduce((acc, strip) => {
            return acc + (strip.isPositive ? '1' : '0');
        }, '');
        return reverseString(stripsState);
    }

    function reverseString(string) {
        return string.split("").reverse().join("");
    }
}

class Bottle {
    constructor(isPoisoned) {
        this.isPoisoned = isPoisoned;
    }
}

class TestStrip {
    constructor() {
        this.isPositive = false;
        this.drops = [];
    }
    add(bottle) {
        this.drops.push(bottle);
    }
    test() {
        this.isPositive = this.drops.some(bottle => bottle.isPoisoned);
    }
}

poison(Math.round(Math.random() * 1000));