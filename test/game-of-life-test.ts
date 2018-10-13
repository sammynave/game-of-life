import hello from 'game-of-life';

QUnit.module('game-of-life tests');

QUnit.test('hello', assert => {
  assert.equal(hello(), 'Hello from game-of-life');
});
