function paintFill(screen, point, color, baseColor = screen[point.y][point.x]) {
    if (isRequiresPaint(screen, point, baseColor)) {
        screen[point.y][point.x] = color;

        paintFill(screen, { x: point.x - 1, y: point.y }, color, baseColor);
        paintFill(screen, { x: point.x + 1, y: point.y }, color, baseColor);
        paintFill(screen, { x: point.x, y: point.y - 1 }, color, baseColor);
        paintFill(screen, { x: point.x, y: point.y + 1 }, color, baseColor);
    }
}

function isRequiresPaint(screen, point, baseColor) {
    return point.y >= 0 && point.x >= 0 &&
        point.y < screen.length &&
        point.x < screen[point.y].length &&
        screen[point.y][point.x] === baseColor;
}

module.exports = paintFill;