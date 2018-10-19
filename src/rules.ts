import {
  T,
  compose,
  cond,
  equals,
  filter,
  gt,
  identity,
  join,
  length,
  lt,
  map,
  or
} from 'ramda';

import DIRECTIONS from './directions';

// @ts-ignore
const livingCells = compose(length, filter(identity));

const liveOrDie = (cell: Cell, board: Board): Cell => {
  const getCell = (x: (cells: Cell) => Cell): CellKey => join(',', x(cell[1]));
  const neighborCells = map(getCell, DIRECTIONS);
  const numberOfLiveCells = compose(
    livingCells,
    map((x: Cell) => board.livingCells.includes(x))
  )(neighborCells) as number;

  return rules(cell, numberOfLiveCells, board);
};

const is2or3 = (x: number): boolean => or(equals(x, 2), equals(x, 3));

const runRules = (cell: Cell, livingNeighbors: number, board: Board) => {
  return cond([
    [gt(2), () => false],
    [is2or3, () => board.livingCells.includes(cell[0])],
    [lt(3), () => false],
    [T, () => false]
  ])(livingNeighbors);
};

const rules = (cell: Cell, livingNeighbors: number, board: Board): Cell => {
  const alive = board.livingCells.includes(cell[0]);
  return cond([
    [equals(true), () => runRules(cell, livingNeighbors, board)],
    [(_, ln) => equals(3, ln), () => true],
    [T, () => false]
  ])(alive, livingNeighbors);
};

export {
  liveOrDie,
  livingCells
};
