import {
  createBoard,
  tick
} from 'game-of-life';
import {
  map,
  prop
} from 'ramda';

let r = (render, board, target, y) => {
  performance.mark(`render-start-${loopI}`);
  board = tick(board);
  render(board, target, y, true)
  performance.mark(`render-end-${loopI}`);
  performance.measure(
    'render',
    `render-start-${loopI}`,
    `render-end-${loopI}`
  );
}

let loopI = 50;

const rafLoopRecurse = (render, board, target, y) => {
  r(render, board, target, y, true);
  loopI--;
  if (loopI > 0) {
    window.requestAnimationFrame(() => rafLoopRecurse(render, board, target, y, true));
  } else {
    const measures = performance.getEntriesByName('render');
    window.m = map(prop('duration'), measures);
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
