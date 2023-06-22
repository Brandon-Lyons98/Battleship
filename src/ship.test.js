const Ship = require('./shipFactory');

// let battleship = new Ship('Battleship', 5);

beforeEach(function () {
  battleship = new Ship('Battleship', 5)
})

test('Checks that calling the ship name will return battleship = {5, 5, false}', () => {
  expect(battleship).toEqual({name: 'Battleship', length: 5, hits: 0, sunk: false});
})

test('Checks that hit increments to 1', () => {
  battleship.hit();
  expect(battleship.hits).toEqual(1);
})

test('Checks if battleship is sunk', () => {
  battleship.setHits(5);
  battleship.isSunk();
  expect(battleship.sunk).toEqual(true);
})

test('getName() returns "Battleship"', () => {
  expect(battleship.getName()).toEqual('Battleship');
})

test('Checks that current number of lives accurately updates', () => {
  battleship.setHits(2);
  expect(battleship.getLives()).toEqual(3);
})