/* a solution based on finding determinants */
function getIntersection(lineA, lineB) {
    let x1 = lineA[0].x,
        x2 = lineA[1].x,
        x3 = lineB[0].x,
        x4 = lineB[1].x,
        y1 = lineA[0].y,
        y2 = lineA[1].y,
        y3 = lineB[0].y,
        y4 = lineB[1].y;

    let dX = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
        dY = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
        factor = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    return isFinite(dX / factor) 
            ? { x: dX / factor, y: dY / factor }
            : null;
}



let points = [
    [{ x: 0, y: 0 }, { x: 10, y: 10 }], [{ x: 0, y: 10 }, { x: 10, y: 0 }],
    [{ x: 0, y: 0 }, { x: 10, y: 10 }], [{ x: 0, y: 10 }, { x: 10, y: 20 }],
    [{ x: 5, y: 0 }, { x: 10, y: 0 }], [{ x: 5, y: 10 }, { x: 10, y: 10 }],
    [{ x: 5, y: 0 }, { x: 10, y: 0 }], [{ x: 5, y: -10 }, { x: 10, y: 10 }]
];
console.log('Intersection',
    '\n', getIntersection(points[0], points[1]),
    '\n', getIntersection(points[2], points[3]),
    '\n', getIntersection(points[4], points[5]),
    '\n', getIntersection(points[6], points[7]))