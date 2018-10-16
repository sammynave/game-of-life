type Coords = string; // "x,y"
type NumericCoords = [number, number]; // [x,y]
type Alive = true | false;
type Direction = (coordinates: NumericCoords) => NumericCoords;
type Cell = [Coords, Alive];
type Board = Map<Coords, Alive>;
