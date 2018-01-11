const book = 'This is a lovely novel that all age groups can understand.'
    + 'Aimed at native English speaking children, '
    + 'there are many adults who still say this famous book is their favorite. '
    + 'This is part of the national curriculum in many schools around the world, '
    + 'so it’s quite possible this book will also come up in conversation. '
    + 'You can almost guarantee that the majority of native English speakers '
    + 'have read this book at least once.';

let frequencies = new Map();

function getFrequency(word) {
    if (!frequencies.size) {
        frequencies = getFrequencies();
    }
    return frequencies.get(word);
}

function getFrequencies() {
    let frequencies = new Map(),
        words = book.split(' ').map(item => {
            return item.toLowerCase().split('.').join('').split(',').join('');
        });

    words.forEach(item => {
        if (frequencies.has(item)) {
            frequencies.set(item, frequencies.get(item) + 1);
        } else {
            frequencies.set(item, 1);
        }
    });

    return frequencies;
}



let words = ['book', 'native', 'is'];
console.log('Frequency: ',
    words[0] + ':' + getFrequency(words[0]),
    words[1] + ':' + getFrequency(words[1]),
    words[2] + ':' + getFrequency(words[2]));