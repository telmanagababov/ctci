class Minesweaper {
    constructor(element) {
        this.element = element;
        this.field = new Field(element.querySelector("#field"));
        this.info = new Info(element.querySelector("#info"));
    }

    start(size, minesNumber) {
        this.minesNumber = minesNumber;
        this.info.hide();
        this.field.init(size);
        this.field.setRandomMines(minesNumber);
        this.field.onClick = cell => this.handleClick(cell);
        this.field.enable();
        this.show();
    }

    handleClick(cell) {
        if (cell.isMined()) {
            this.end();
            this.info.setLooseState();
            this.info.show();
        } else {
            if (cell.isEmpty()) {
                this.field.openEmptyBorderCells(cell);
            }
            if (this.field.getClosedCellsNumber() === this.minesNumber) {
                this.end();
                this.info.setWinState();
                this.info.show();
            }
        }
    }

    show() {
        this.element.style.display = 'inline-block';
    }

    end() {
        this.field.disable();
        this.field.open();
    }
}

class Info {
    constructor(element) {
        this.element = element;
    }

    show() {
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }

    setWinState() {
        this.element.className = 'win';
        this.element.innerHTML = "YOU WIN";
    }

    setLooseState() {
        this.element.className = 'loose';
        this.element.innerHTML = "YOU LOOSE";
    }
}

class Field {
    constructor(element) {
        this.element = element;
        this.cells = [];
        this.onClick = null;
    }

    init(size) {
        this.clear();
        this.setSize(size);
        this.addCells(size);
        this.renderCells();
    }

    enable() {
        this.element.classList.remove('disabled');
    }

    disable() {
        this.element.classList.add('disabled');
    }

    open() {
        this.cells.forEach(row => {
            row.forEach(cell => {
                cell.open();
            })
        });
    }

    clear() {
        this.cells = [];
        this.element.innerHTML = '';
    }

    getClosedCellsNumber() {
        return this.cells.reduce((rowAcc, row) => {
            return rowAcc + row.reduce((cellAcc, cell) => {
                return cellAcc + (cell.isOpened() ? 0 : 1);
            }, 0);
        }, 0);
    }

    setSize(size) {
        this.element.style.width = (12 + size * 40) + 'px';
    }

    addCells(size) {
        this.cells = Array.from(new Array(size)).map((row, y) => {
            return Array.from(new Array(size)).map((item, x) => {
                let cell = new Cell(x, y);
                cell.onClick = _ => this.onClick(cell);
                return cell;
            });
        });
    }

    setRandomMines(minesNumber) {
        for (let i = 0; i < minesNumber; i++) {
            let cell = this.getRandomEmptyCell();
            cell.hasBomb = true;
            this.addValueToBorderCells(cell);
        }
    }

    getRandomEmptyCell() {
        let randomX = Math.round(Math.random() * (this.cells.length - 1)),
            randomY = Math.round(Math.random() * (this.cells.length - 1)),
            randomCell = this.cells[randomY][randomX];
        return randomCell.isMined() ? this.getRandomEmptyCell() : randomCell;
    }

    addValueToBorderCells(cell) {
        this.runForBorderCells(cell, borderCell => {
            borderCell.value++;
        });
    }

    openEmptyBorderCells(cell) {
        this.runForBorderCells(cell, borderCell => {
            if (!borderCell.isOpened()) {
                borderCell.open();
                if (borderCell.isEmpty()) {
                    this.openEmptyBorderCells(borderCell);
                }
            }
        });
    }

    runForBorderCells(cell, callback) {
        let borders = [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: +1, y: -1 },
            { x: -1, y: 0 },
            { x: 0, y: 0 },
            { x: +1, y: 0 },
            { x: -1, y: +1 },
            { x: 0, y: +1 },
            { x: +1, y: +1 },
        ]
        borders.forEach(item => {
            let x = cell.x + item.x,
                y = cell.y + item.y;
            if (this.cells[y] && this.cells[y][x]) {
                callback(this.cells[y][x]);
            }
        });
    }

    renderCells() {
        this.cells.forEach(row => {
            row.forEach(cell => this.element.appendChild(cell.view));
        })
    }
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = 0;
        this.hasBomb = false;
        this.isOpenedState = false;
        this.view = this.createView();
        this.setState('empty');
        this.onClick = null;
    }

    isEmpty() {
        return !this.isMined() && this.value === 0;
    }

    isMined() {
        return this.hasBomb;
    }

    isOpened() {
        return this.isOpenedState;
    }

    disable() {
        this.view.classList.add("disabled");
    }

    createView() {
        let view = document.createElement("div");
        view.className = "cell";
        view.onclick = _ => {
            this.open();
            this.onClick && this.onClick();
        }
        view.oncontextmenu = event => {
            this.setState('assumption');
            event.preventDefault();
        }
        return view;
    }

    open() {
        this.isOpenedState = true;
        this.setState(this.isMined() ? 'bomb' : 'number');
        this.view.classList.add('disabled');
    }

    setState(state) {
        switch (state) {
            case 'empty':
                this.view.innerHTML = '?';
                break;
            case 'bomb':
                this.view.innerHTML = '*';
                break;
            case 'assumption':
                this.view.innerHTML = 'b?';
                break;
            case 'number':
                this.view.innerHTML = this.isEmpty() ? '' : this.value;
                break;
        }
        this.view.classList.remove('empty');
        this.view.classList.remove('bomb');
        this.view.classList.remove('assumption');
        this.view.classList.remove('number');
        this.view.classList.add(state);
    }
}