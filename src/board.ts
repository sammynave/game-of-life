import {
  compose,
  identity,
  join,
  map,
  times,
  xprod
} from 'ramda';

const createBoard = (numberOfRows: number, numberOfColumns: number): Board => {
  let xs = times(identity, numberOfRows);
  let ys = times(identity, numberOfColumns);
  let coords = xprod(xs, ys);
  let deadCells = compose(
    map((x: string) => [x, false]),
    map(join(','))
  )(coords);

  return new Map(deadCells);
};

export {
  createBoard
};
