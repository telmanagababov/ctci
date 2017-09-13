function zeroMatrix(matrix) {
    let zeroRows = getZeroRows(matrix),
        zeroColumns = getZeroColumns(matrix);
    
    return matrix.map((row, rowIndex) => 
        row.map((item, itemIndex) => {
            return zeroRows[rowIndex] || zeroColumns[itemIndex] ? 0 : item;
        })
    );
}

function getZeroRows(matrix) {
    return matrix.map(row => {
        return row.some(item => item === 0)
    });
}

function getZeroColumns(matrix) {
    return matrix.map((row, rowIndex) => {
        return matrix.some(row => row[rowIndex] === 0)
    });
}

module.exports = zeroMatrix;