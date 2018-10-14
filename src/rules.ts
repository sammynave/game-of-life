const rules = (cell: Cell, livingNeighbors: number): Cell => {
  let [coordinates, alive] = cell;
  let newCell = [coordinates, alive] as Cell;

  /* RULES */
  if (newCell[1]) {
    /* Any live cell with fewer than two live neighbors dies, as if by underpopulation. */
    if (livingNeighbors < 2) {
      newCell[1] = false;
      return newCell;
    }

    if (livingNeighbors === 2 || livingNeighbors === 3) {
      /* Any live cell with two or three live neighbors lives on to the next generation. */
      return newCell;
    }

    if (livingNeighbors > 3) {
      /* Any live cell with more than three live neighbors dies, as if by overpopulation. */
      newCell[1] = false;
      return newCell;
    }
  } else if (livingNeighbors === 3) {
    /* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction. */
    newCell[1] = true;
    return newCell;
  }

  return newCell;
};

export default rules;
