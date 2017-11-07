function drawLine(screen, width, x1, x2, y) {
    let rowStart = width / 8 * y,
        startX = Math.floor(rowStart + x1 / 8),
        endX = Math.floor(rowStart + x2 / 8),
        startBits = (8 - x1 % 8),
        endBits = x2 % 8,
        startValue = '0'.repeat(8 - startBits) + '1'.repeat(startBits),
        endValue = '1'.repeat(endBits) + '0'.repeat(8 - endBits);

    screen[startX] = parseInt(startValue, 2);
    screen[endX] = parseInt(endValue, 2);
    for (let i = startX + 1; i < endX; i++) {
        screen[i] = parseInt('11111111', 2);
    }
}

module.exports = drawLine;