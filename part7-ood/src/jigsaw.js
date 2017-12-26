class JigSaw {
    constructor(size) {
        this.tiles = this.createTiles(size).reduce((acc, row) => {
            return acc.concat(row);
        }, []);
        this.joinings = [];
        this.joiningsSize = 0;
    }

    join(tileA, sideA, tileB, sideB) {
        if (this.fitsWith(tileA, sideA, tileB, sideB)) {
            this.joinings[tileA] = this.joinings[tileA] || [tileA];
            this.fillJoinings(tileA, tileB);
            this.joinings[tileB] = this.joinings[tileA];
            this.joiningsSize = this.joinings[tileA].length;
        }
    }

    fillJoinings(tileA, tileB) {
        let joiningsA = this.joinings[tileA],
            joiningsB = this.joinings[tileB];
        if (!joiningsA.includes(tileB)) {
            joiningsA.push(tileB);
        }
        if (joiningsB) {
            joiningsB.forEach(tile => {
                if (!joiningsA.includes(tile)) {
                    joiningsA.push(tile);
                }
            });
        }
    }

    fitsWith(tileA, sideA, tileB, sideB) {
        return tileA[sideA].id === tileB[sideB].id;
    }

    isCompleted() {
        return this.joiningsSize === this.tiles.length;
    }

    createTiles(size) {
        let tiles = [];
        tiles.lastId = 0;
        for (let i = 0; i < size; i++) {
            let row = [];
            tiles.push(row);
            for (let j = 0; j < size; j++) {
                let top = this.createSlot('top', tiles, i, j, size),
                    right = this.createSlot('right', tiles, i, j, size),
                    bottom = this.createSlot('bottom', tiles, i, j, size),
                    left = this.createSlot('left', tiles, i, j, size),
                    tile = new Tile(top, right, bottom, left);
                row.push(tile);
            }
        }
        tiles.forEach(row => row.sort((a, b) => Math.random() - 0.5));
        tiles.sort((a, b) => Math.random() - 0.5);
        return tiles;
    }

    createSlot(type, tiles, i, j, size) {
        let slotType = 0,
            slotId = 0;
        switch (type) {
            case 'top':
                slotType = i === 0 ? 0 : -tiles[i - 1][j].bottom.type;
                slotId = i === 0 ? 0 : tiles[i - 1][j].bottom.id;
                break;
            case 'right':
                slotType = j === size - 1 ? 0 : Math.random() > 0.5 ? 1 : -1;
                slotId = j === size - 1 ? 0 : ++tiles.lastId;
                break;
            case 'bottom':
                slotType = i === size - 1 ? 0 : Math.random() > 0.5 ? 1 : -1;
                slotId = i === size - 1 ? 0 : ++tiles.lastId;
                break;
            case 'left':
                slotType = j === 0 ? 0 : -tiles[i][j - 1].right.type;
                slotId = j === 0 ? 0 : tiles[i][j - 1].right.id;
                break;
        }
        return new Slot(slotType, slotId);
    }
}

class Slot {
    constructor(type, id) {
        this.type = type;
        this.id = id;
    }

    toString() {
        return 'type: ' + this.type + ', ' + 'id: ' + this.id;
    }
}

class Tile {
    constructor(top, right, bottom, left) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }

    toString() {
        return 'Tile: ' +
            'top: [' + this.top.toString() + '], ' +
            'right: [' + this.right.toString() + '], ' +
            'bottom: [' + this.bottom.toString() + '], ' +
            'left: [' + this.left.toString() + ']';
    }
}

let jigsaw = new JigSaw(4);

completePuzzle(jigsaw);

function completePuzzle(puzzle) {
    let index = 0;
    while (!jigsaw.isCompleted()) {
        let tileA = jigsaw.tiles[index];
        for (let i = index; i < jigsaw.tiles.length; i++) {
            let tileB = jigsaw.tiles[i];
            if(tileA.top.type === -tileB.bottom.type) {
                jigsaw.join(tileA, 'top', tileB, 'bottom');
            }
            if(tileA.right.type === -tileB.left.type) {
                jigsaw.join(tileA, 'right', tileB, 'left');
            }
            if(tileA.left.type === -tileB.right.type) {
                jigsaw.join(tileA, 'left', tileB, 'right');
            }
            if(tileA.bottom.type === -tileB.top.type) {
                jigsaw.join(tileA, 'bottom', tileB, 'top');
            }
        }
        console.log(
            'loop: ', index, 
            ", size: ", jigsaw.joiningsSize,
            ", isCompleted: ", jigsaw.isCompleted()
        );
        index++;
    }
}
