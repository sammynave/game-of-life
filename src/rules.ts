import {
  T,
  cond,
  equals,
  gt,
  lt,
  or
} from 'ramda';

const is2or3 = (x: number): boolean => or(equals(x, 2), equals(x, 3));

const runRules = ([coordinates, alive]: Cell, livingNeighbors: number) => {
  const dead = () => [coordinates, false];
  const living = () => [coordinates, alive];

  let s = cond([
    [gt(2), dead],
    [is2or3, living],
    [lt(3), dead],
    [T, () => dead]
  ])(livingNeighbors);

  return s;
};

const rules = (cell: Cell, livingNeighbors: number): Cell => {
  let [coordinates, alive] = cell;

  return cond([
    [equals(true), () => runRules(cell, livingNeighbors)],
    [(_, ln) => equals(3, ln), () => [coordinates, true]],
    [T, () => [coordinates, false]]
  ])(alive, livingNeighbors);
};

export default rules;
