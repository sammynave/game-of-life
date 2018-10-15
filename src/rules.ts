const rules = (cell: Cell, livingNeighbors: number): Cell => {
  let [coordinates, alive] = cell;
  let newCell = [coordinates, alive] as Cell;

  /* RULES */
  if (newCell[1]) {
    /* Any live cell with fewer than two live neighbors dies, as if by underpopulation. */
    if (livingNeighbors < 2) {
      return [coordinates, false];
    }

    if (livingNeighbors === 2 || livingNeighbors === 3) {
      /* Any live cell with two or three live neighbors lives on to the next generation. */
      return [coordinates, alive];
    }

    if (livingNeighbors > 3) {
      /* Any live cell with more than three live neighbors dies, as if by overpopulation. */
      return [coordinates, false];
    }
  } else if (livingNeighbors === 3) {
    /* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction. */
    return [coordinates, true];
  }

  return [coordinates, false];
};

export default rules;
