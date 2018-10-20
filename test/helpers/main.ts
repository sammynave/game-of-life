import {
  createBoard,
  tick
} from 'game-of-life';

let r = (render, board, target, y) => {
  board = tick(board);
  render(board, target, y, true);
}

// SLOW at 100x100
const intervalLoop = (render, board, target, y) => {
  let loop = setInterval(() => {
    requestAnimationFrame(() => r(render, board, target, y)));
  }, 60);
  setTimeout(() => clearInterval(loop), 60000);
};

// SLOW but smooth at 100x100
let rafLoopI = 0;
const rafLoop = (render, board, target, y) => {
  r(render, board, target, y, true);
  rafLoopI++;
  if (rafLoopI < 1000) {
    requestAnimationFrame(() => rafLoop(render, board, target, y, true))
  }
}

const main = (x: number, y: number, render: Render, seed: number[] = []) => {
  let board = createBoard(x, y);
  board.livingCells = seed;

  let target = document.createElement('div');
  document.body.appendChild(target);
  render(board, target, y);

  // intervalLoop(render, board, target, y);
  rafLoop(render, board, target, y);
};

export {
  main
};
