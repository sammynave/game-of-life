const N: Direction  = ([x, y]) => [x, y + 1];
const S: Direction  = ([x, y]) => [x, y - 1];
const E: Direction  = ([x, y]) => [x + 1, y];
const W: Direction  = ([x, y]) => [x - 1, y];
const NE: Direction = ([x, y]) => [x + 1, y + 1];
const SE: Direction = ([x, y]) => [x + 1, y - 1];
const NW: Direction = ([x, y]) => [x - 1, y + 1];
const SW: Direction = ([x, y]) => [x - 1, y - 1];
const DIRECTIONS = [N, S, E, W, NE, SE, NW, SW];

export default DIRECTIONS;
