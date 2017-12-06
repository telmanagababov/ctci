function findPath(maze, x = 0, y = 0, path = []) {
    let hasDownStep = maze[y + 1] && maze[y + 1][x] === '0',
        hasRightStep = maze[y][x + 1] === '0';

    if (x === maze[0].length - 1 && y === maze.length - 1) return path;
    if (!hasDownStep && !hasRightStep) return [];

    if (hasDownStep && (y <= x || !hasRightStep)) {
        y++;
        path.push('d');
    } else {
        x++;
        path.push('r');
    }

    return findPath(maze, x, y, path);
}

module.exports = findPath;