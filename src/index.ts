import {
  compose,
  filter,
  flip,
  head,
  identity,
  isNil,
  join,
  length,
  map,
  reject,
  split
} from 'ramda';

import { createBoard } from './board';
import DIRECTIONS from './directions';
import rules from './rules';

const livingCells = compose(length, filter(identity));
const liveOrDie = (cell: Cell, board: Board) => {
  const coords = head(cell);
  const toNumCoords = compose(
    map((x: string) => parseInt(x, 10)),
    split(',')
  );
  const getCell = (x: (coords: Coords) => Coords): Coords => x(toNumCoords(coords));
  const neighborsCoords = map(getCell, DIRECTIONS);
  const neighboringCells = compose(
    reject(isNil),
    map((x: Coords) => board.get(join(',', x)))
  )(neighborsCoords);

  const livingNeighbors = livingCells(neighboringCells);

  let newCell = rules(cell, livingNeighbors);

  return newCell;
};

const boardFrom = (cells: Cell[]) => new Map(cells);

const tick = (board: Board) => {
  let nCells = [];
  let updateCell = flip(liveOrDie)(board);

  for (let cell of board) {
    nCells.push(updateCell(cell));
  }

  return boardFrom(nCells);
}

const cellSpanTemplate = (c: Cell) => `<span id="${c[0]}" style="border: 1px solid #000; display: inline-block; width: 1em; height: 1em; background-color: ${c[1] ? '#000' : '#fff'}"></span>`;
const rowTemplate = (id: number) => `<div id="${id}"></div>`;

const render = (board: Board, target: Element, numOfRows: number): void => {
  let rows = '';
  for (let i = 0; i < numOfRows; i++) {
    rows += rowTemplate(i);
  }

  target.innerHTML = rows;

  for (let cell of board) {
    let row = document.getElementById(cell[0][0]);
    let frag = document.createRange().createContextualFragment(cellSpanTemplate(cell));
    row.appendChild(frag);
  }
};

const main = (seed: string[], x: number, y: number) => {
  let board = createBoard(x, y);
  map((z: Coords) => board.set(z, true), seed);

  let target = document.createElement('div');
  document.body.appendChild(target);

  render(board, target, x);
  let loop = setInterval(() => {
    board = tick(board);
    render(board, target, x);
    let cells = map((z: Cell) => z[1], Array.from(board));
    let aliveCells = livingCells(cells);
    if (aliveCells === 0) {
      clearInterval(loop);
    }
  }, 1000);
};

export {
  liveOrDie,
  main,
  tick,
  createBoard
};
