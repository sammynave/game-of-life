import {
  createBoard,
  tick
} from 'game-of-life';

const main = (x: number, y: number, render: Render, seed: number[] = []) => {
  let board = createBoard(x, y);
  if (seed.length > 0) {
    let i = 0;
    for (let c of board.cells) {
      if (seed.indexOf(i) !== -1) {
        board.livingCells.push(c[0]);
      }
      i++;
    }
  }

  let target = document.createElement('div');
  document.body.appendChild(target);
  render(board, target, y);
  let loop = setInterval(() => {
    board = tick(board);
    render(board, target, y, true);
  }, 60);
  setTimeout(() => clearInterval(loop), 6000);
};

export {
  main
};
