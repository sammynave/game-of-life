type Coords = string; // "x,y"
type NumericCoords = [number, number]; // [x,y]
type Alive = true | false;
type Direction = (coordinates: NumericCoords) => NumericCoords;
type Cell = [Coords, Alive];

interface Board {
  // get: (x: string) => Alive; // should just be able to extend Map
  [Symbol.iterator](): Iterable<Cell>;
  [index: string]: Alive;
}
