// import Ship from "../shipFactory";
const Ship = require('../shipFactory');

beforeEach(function () {
  battleship = new Ship('Battleship', 5); 
})

test('Checks that calling the ship name will return battleship = {5, 5, false, false}', () => {
  expect(battleship).toEqual({name: 'Battleship', length: 5, hits: 0, sunk: false, isVertical: false});
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

test('Battleship is vertical', () => {
  battleship.setVertical();
  expect(battleship.isVertical).toBeTruthy();
})