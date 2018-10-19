import {
  createBoard,
  liveOrDie,
  tick
} from 'game-of-life';

import {
  render
} from './helpers/render';

import {
  main
} from './helpers/main';

QUnit.module('game-of-life tests');

// QUnit.test('createBoard', assert => {
//   const expected = [
//     [0, 0],
//     [0, 1],
//     [0, 2],
//     [1, 0],
//     [1, 1],
//     [1, 2]
//   ];
// 
//   let board = createBoard(2, 3);
//   assert.deepEqual(Array.from(board.cells), expected, 'Creates a board that is 2 x 3');
// });
// 
// QUnit.test('liveOrDie - is dead with no neighbors', assert => {
//   const expected = [];
// 
//   const board = createBoard(3, 3);
//   const first = board.cells.values().next().value;
//   board.livingCells.add(first);
// 
//   assert.deepEqual(liveOrDie(first, board), expected, 'a cell dies');
// });
// 
// QUnit.test('liveOrDie - is dead with four neighbors', assert => {
//   const expected = ['1,1', false];
// 
//   const board = createBoard(3, 3);
//   board.set('0,0', true);
//   board.set('0,1', true);
//   board.set('0,2', true);
//   board.set('1,0', true);
// 
//   const cell = ['1,1', true] as Cell;
//   assert.deepEqual(liveOrDie(cell, board), expected, 'a cell lives');
// });
// 
// QUnit.test('liveOrDie - is alive with two neighbors', assert => {
//   const expected = ['1,1', true];
// 
//   const board = createBoard(3, 3);
//   board.set('0,0', true);
//   board.set('0,1', true);
// 
//   const cell = ['1,1', true] as Cell;
//   assert.deepEqual(liveOrDie(cell, board), expected, 'a cell lives');
// });
// 
// QUnit.test('liveOrDie - is alive with 3 neighbors', assert => {
//   const expected = ['1,1', true];
// 
//   const board = createBoard(3, 3);
//   board.set('0,0', true);
//   board.set('0,1', true);
//   board.set('0,2', true);
// 
//   const cell = ['1,1', true] as Cell;
//   assert.deepEqual(liveOrDie(cell, board), expected, 'a cell lives');
// });
// 
// QUnit.test('tick', assert => {
//   const expected = [
//     ['0,0', true],
//     ['0,1', true],
//     ['0,2', false],
// 
//     ['1,0', true],
//     ['1,1', true],
//     ['1,2', false],
// 
//     ['2,0', false],
//     ['2,1', false],
//     ['2,2', false]
//   ];
// 
//   const board = createBoard(3, 3);
//   board.set('0,0', true);
//   board.set('0,1', true);
//   board.set('1,0', true);
// 
//   const updatedBoard = tick(board);
// 
//   assert.deepEqual(Array.from(updatedBoard), expected, 'Board is updated with new cell');
// });
QUnit.skip('tick', assert => {
  assert.expect(0);
});

main(200, 200, render, [
  100, 111, 110, 112, 102, 131, 133, 132,
  122, 141, 140, 142, 132, 171, 173, 172,
  162, 180, 191, 190, 192, 182, 211, 213,
  212, 202, 221, 220, 222, 212, 251, 253,
  252, 242, 200, 211, 210, 212, 202, 231,
  233, 232, 222, 241, 240, 242, 232, 271,
  273, 272, 262, 280, 291, 290, 292, 282,
  311, 313, 312, 302, 321, 320, 322, 312,
  351, 353, 352, 342
]);
