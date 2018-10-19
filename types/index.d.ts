type X = number;
type Y = number;
type Direction = (cell: Cell) => Cell;
type Cell = [X, Y];
type CellKey = string; // 'X,Y'
type Render = (board: Board, target: Element, numOfRows: number) => void;

interface Board {
  cells: Map<CellKey, Cell>;
  livingCells: CellKey[];
}
