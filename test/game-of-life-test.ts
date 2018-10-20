import {
  createBoard,
  liveOrDie,
  neighbors,
  tick,
  xAdd
} from 'game-of-life';

import {
  render
} from './helpers/render';

import {
  main
} from './helpers/main';

import {
  addIndex,
  compose,
  map,
  chain,
  sum,
  xprod,
  zip
} from 'ramda';

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

QUnit.test('?', assert => {
  assert.equal(1, 1);
});

const seed = ['21,19', '20,20', '21,20', '22,20', '22,21'];

main(100, 100, render, seed);
