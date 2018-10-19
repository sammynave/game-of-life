import { liveOrDie } from './rules';

const tick = (board: Board) => {
  let newLivingCells = [];
  for (let cell of board.cells) {
    if (liveOrDie(cell, board)) {
      newLivingCells.push(cell[0]);
    }
  }

  board.livingCells = newLivingCells;

  return board;
};

export {
  tick
};
