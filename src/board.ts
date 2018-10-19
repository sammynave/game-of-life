import {
  identity,
  join,
  map,
  times,
  xprod
} from 'ramda';

const createBoard = (numberOfRows: number, numberOfColumns: number): Board => {
  const xs = times(identity, numberOfRows);
  const ys = times(identity, numberOfColumns);
  const coords = xprod(xs, ys) as Cell[];
  const cellPairs = map((x: Cell) => [join(',', x), x])(coords);
  // @ts-ignore-line
  const cells = new Map(cellPairs);

  return { cells, livingCells: [] };
};

export {
  createBoard
};
