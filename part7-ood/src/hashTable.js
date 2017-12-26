class HashTable {
    constructor() {
        this.keys = {};
    }

    add(item) {
        let itemKey = this.getKey(item),
            listItem = new ListItem(item);
        console.log('add: ', item, ', to: ', itemKey);
        if (this.keys[itemKey]) {
            let lastItem = this.keys[itemKey];
            while (lastItem.next) {
                lastItem = lastItem.next;
            }
            lastItem.next = listItem;
        } else {
            this.keys[itemKey] = listItem;
        }
        console.log('add: result: ', this.keys[itemKey]);
    }

    get(item) {
        let itemKey = this.getKey(item),
            listItem = this.keys[itemKey];
        console.log('get: ', item, ', to: ', itemKey);
        console.log('get: result: ', listItem);
        while (listItem.item !== item) {
            listItem = listItem.next;
        }
        return listItem.item;
    }

    getKey(item) {
        return (item.name + item.value).length % 100;
    }
}

class ListItem {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Item {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

let table = new HashTable(),
    items = [
        new Item('John', 12),
        new Item('Mike', 0),
        new Item('Gregory', 11),
        new Item('Bob', 235)
    ];

items.forEach(item => table.add(item));
console.log('---');
console.log(table);
console.log('---');
console.log(table.get(items[1]));
console.log('---');
console.log(table.get(items[3]));