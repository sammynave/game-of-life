import {
  createBoard,
  tick
} from 'game-of-life';

let r = (render, board, target, y) => {
  board = tick(board);
  render(board, target, y, true)
}

let loopI = 100;

const rafLoopRecurse = (render, board, target, y) => {
  r(render, board, target, y, true);
  loopI--;
  if (loopI > 0) {
    window.requestAnimationFrame(() => rafLoopRecurse(render, board, target, y, true));
  }
}

const main = (x: number, y: number, render: Render, seed: number[] = []) => {
  let board = createBoard(x, y);
  board.livingCells = seed;

  let target = document.createElement('div');
  document.body.appendChild(target);
  render(board, target, y);

  rafLoopRecurse(render, board, target, y);
};

export {
  main
};
