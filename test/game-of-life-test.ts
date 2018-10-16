import {
  createBoard,
  liveOrDie,
  main,
  tick
} from 'game-of-life';

QUnit.module('game-of-life tests');

QUnit.test('createBoard', assert => {
  const expected = [
    ['0,0', false],
    ['0,1', false],
    ['0,2', false],
    ['1,0', false],
    ['1,1', false],
    ['1,2', false]
  ];

  assert.deepEqual(Array.from(createBoard(2, 3)), expected, 'Creates a board that is 2 x 3');
});

QUnit.test('liveOrDie - is dead with no neighbors', assert => {
  const expected = ['1,1', false];

  const board = createBoard(3, 3);
  const cell = ['1,1', true];
  assert.deepEqual(liveOrDie(cell, board), expected, 'a cell dies');
});

QUnit.test('liveOrDie - is dead with four neighbors', assert => {
  const expected = ['1,1', false];

  const board = createBoard(3, 3);
  board.set('0,0', true);
  board.set('0,1', true);
  board.set('0,2', true);
  board.set('1,0', true);

  const cell = ['1,1', true];
  assert.deepEqual(liveOrDie(cell, board), expected, 'a cell lives');
});


QUnit.test('liveOrDie - is alive with two neighbors', assert => {
  const expected = ['1,1', true];

  const board = createBoard(3, 3);
  board.set('0,0', true);
  board.set('0,1', true);


  const cell = ['1,1', true];
  assert.deepEqual(liveOrDie(cell, board), expected, 'a cell lives');
});

QUnit.test('liveOrDie - is alive with 3 neighbors', assert => {
  const expected = ['1,1', true];

  const board = createBoard(3, 3);
  board.set('0,0', true);
  board.set('0,1', true);
  board.set('0,2', true);

  const cell = ['1,1', true];
  assert.deepEqual(liveOrDie(cell, board), expected, 'a cell lives');
});

QUnit.test('tick', assert => {
  const expected = [
    ['0,0', true],
    ['0,1', true],
    ['0,2', false],

    ['1,0', true],
    ['1,1', true],
    ['1,2', false],

    ['2,0', false],
    ['2,1', false],
    ['2,2', false]
  ];

  const board = createBoard(3, 3);
  board.set('0,0', true);
  board.set('0,1', true);
  board.set('1,0', true);

  const updatedBoard = tick(board);

  assert.deepEqual(Array.from(updatedBoard), expected, 'Board is updated with new cell');
});

main([
  '1,1', '1,0', '1,2', '0,2',
  '3,1', '3,3', '3,2', '2,2',
  '4,1', '4,0', '4,2', '3,2',
  '7,1', '7,3', '7,2', '6,2'
], 10, 10);
