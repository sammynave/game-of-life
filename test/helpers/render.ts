const cellSpanTemplate = (id: string, alive: true | false) => `<span id=${id} class="cell ${alive ? 'alive' : ''}"></span>`;

const render = (board: Board, target: Element, cols: number, rerender: true | false = false): void => {
  if (rerender) {
    for (let c of board.cells) {
      if (board.livingCells.includes(c[0])) {
        document.getElementById(c[0]).className = 'cell alive';
      } else {
        document.getElementById(c[0]).className = 'cell';
      }
    }
  } else {
    let markup = '';
    let i = 0;

    for (let c of board.cells) {
      if (i === cols) {
        i = 0;
        markup += '<br>';
      }

      markup += cellSpanTemplate(c[0], board.livingCells.includes(c[0]));
      i++;
    }

    target.innerHTML = markup;
  }
};

export { render };
