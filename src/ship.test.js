const Ship = require('./shipFactory');

let battleship = new Ship('Battleship', 5);

test('battleship = {5, 5, false}', () => {
  expect(battleship).toEqual({name: 'Battleship', length: 5, lives: 5, sunk: false})
})

test('battleship = {5, 5, false}', () => {
  battleship.hit();
  expect(battleship).toEqual({name: 'Battleship', length: 5, lives: 4, sunk: false})
})