function rotateMatrix(matrix) {
    return matrix.map((row, rowIndex) => {
        return row.map((item, itemIndex) => {
            let rotatedRowIndex = row.length - itemIndex - 1,
                rotatedItemIndex = rowIndex;
            return matrix[rotatedRowIndex][rotatedItemIndex];
        })
    });
}

module.exports = rotateMatrix;