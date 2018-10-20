import {
  append
} from 'ramda';

// const cellSpanTemplate = (id: string, alive: true | false) => `<span id=${id} class="cell ${alive ? 'alive' : ''}"></span>`;
const cellSpanTemplate = (id: string, alive: true | false) => {
  let s = document.createElement('span');
  s.id = id;
  s.className = alive ? 'cell alive' : 'cell';
  return s;
}

const cellCache = {};

const render = (board: Board, target: Element, cols: number, rerender: true | false = false): void => {
  if (rerender) {
    for (let c of board.cells) {
      let span = cellCache[c[0]];
      if (board.livingCells.includes(c[0])) {
        // document.getElementById(c[0]).className = 'cell alive';
        span.className = 'cell alive';
      } else {
        // document.getElementById(c[0]).className = 'cell';
        span.className = 'cell';
      }
    }
  } else {
    // let markup = '';
    let i = 0;

    for (let c of board.cells) {
      if (i === cols) {
        i = 0;
        // markup += '<br>';
        let br = document.createElement('br');
        target.appendChild(br);
      }

      // markup += cellSpanTemplate(c[0], board.livingCells.includes(c[0]));

      let span = cellSpanTemplate(c[0], board.livingCells.includes(c[0]));
      cellCache[c[0]] = span;
      target.appendChild(span);
      i++;
    }

    // target.innerHTML = markup;
  }
};

export { render };
