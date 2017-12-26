class Table {
    constructor(gameType) {
        let cards = CardsFactory.createCards(gameType);
        this.deck = new Deck(cards);
        this.hand = new Hand();
    }
}

class Hand {
    constructor() {
        this.cards = [];
    }
    take(cards) {
        this.cards = this.cards.concat(cards);
    }
    move() {
        return 'pass'; //TODO add some logic
    }
}

class Deck {
    constructor(cards) {
        this.defaultCards = cards;
        this.reset();
    }
    shuffle() {
        this.currentCards.sort((a, b) => Math.random() - 0.5);
    }
    slice(cardsNumber) {
        let startIndex = this.currentCards.length - cardsNumber;
        return this.currentCards.splice(startIndex, cardsNumber);
    }
    getSize() {
        return this.currentCards.length;
    }
    reset() {
        this.currentCards = this.defaultCards.concat();
        this.shuffle();
    }
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    toString() {
        return this.value + ':' + this.suit;
    }
}

class CardsFactory {
    static createCards(cardsConfig) {
        return cardsConfig.map(item => {
            let parts = item.split(":"),
                value = parts[0],
                suit = parts[1];
            return new Card(value, suit);
        });
    }
}

const gameTypes = {
    //TODO fill 36 cards
    DEFAULT: ["6:C", "7:C", "8:C", "9:C", "10:C", "J:C", "Q:C"],
    //TODO fill 52 cards
    BLACKJACK: ["2:C", "3:C", "4:C", "5:C", "6:C", "7:C", "8:C"]
}

let table = new Table(gameTypes.DEFAULT);
console.group('table');
console.log('deck: ', table.deck.currentCards.map(card => card.toString()));
console.groupEnd();