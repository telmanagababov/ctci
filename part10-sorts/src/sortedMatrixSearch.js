function search(matrix, item) {
    let row = 0,
        column = matrix[0].length - 1;

    while (row < matrix.length && column >= 0) {
        let testItem = matrix[row][column];
        if (testItem === item) {
            return [row, column];
        } else if (testItem > item) {
            column--;
        } else {
            row++;
        }
    }
}

module.exports = search;