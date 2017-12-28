class Listy {
    constructor(items) {
        this._items = items;
    }

    elementAt(i) {
        return this._items.length > i ? this._items[i] : -1;
    }
}

module.exports = Listy;