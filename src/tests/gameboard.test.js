const Gameboard = require('../gameboardFactory');
const Ship = require('../shipFactory');

beforeEach(function () {
  myBoard = new Gameboard();
  myShip = new Ship('Carrier', 5);
})

test('Does this make a board with 100 squares', () => {
  myBoard.getBoard();
  expect(myBoard.board.length).toEqual(100);
})

test('Makes a ship of length 5', () => {
  expect(myShip.length).toEqual(5);
})

test('myBoard[0] - myBoard[4] should contain myShip horizontally', () => {
  myBoard.placeShip(myShip, 0);
  expect(myBoard.board[0]).toBe('O');
  expect(myBoard.board[1]).toBe('O');
  expect(myBoard.board[2]).toBe('O');
  expect(myBoard.board[3]).toBe('O');
  expect(myBoard.board[4]).toBe('O');
})

test('myBoard[0] myBoard[10] myBoard[20] myBoard[30] myBoard[40] should contain myShip vertically', () => {
  myBoard.placeShip(myShip, 0, true);
  expect(myBoard.board[0]).toBe('O');
  expect(myBoard.board[10]).toBe('O');
  expect(myBoard.board[20]).toBe('O');
  expect(myBoard.board[30]).toBe('O');
  expect(myBoard.board[40]).toBe('O');
})

test('receiveAttack on an occupied space should be true', () => {
  myBoard.placeShip(myShip, 1);
  expect(myBoard.receiveAttack(1)).toBeTruthy();
})

test('receiveAttack on an empty space should be false', () => {
  myBoard.placeShip[myShip, 0];
  expect(myBoard.receiveAttack(20)).toEqual(false);
})

test('receiveAttack on an already selected space should return false', () => {
  myBoard.placeShip(myShip, 1);
  myBoard.receiveAttack(1);
  expect(myBoard.receiveAttack(1)).toEqual(false);
})

test("checkAllSunk should return false when all ships aren't sunk", () => {
  carrier = new Ship('carrier', 5);
  battleship = new Ship('battleship', 4);
  sub = new Ship('sub', 3);
  cruiser = new Ship('cruiser', 3);
  destroyer = new Ship('destroyer', 2);

  myBoard.placeShip(sub, 1);
  myBoard.receiveAttack(1);
  myBoard.receiveAttack(2);
  myBoard.receiveAttack(3);

  myBoard.placeShip(carrier, 20);
  myBoard.receiveAttack(20);
  myBoard.receiveAttack(21);
  myBoard.receiveAttack(22);
  myBoard.receiveAttack(23);
  myBoard.receiveAttack(24);

  myBoard.placeShip(battleship, 30);
  myBoard.receiveAttack(30);

  myBoard.placeShip(cruiser, 40);
  myBoard.receiveAttack(40);

  myBoard.placeShip(destroyer, 50);
  myBoard.receiveAttack(50);

  expect(myBoard.checkAllSunk()).toEqual(false);
})

test('checkAllSunk should return true when all ships are sunk', () => {
  carrier = new Ship('carrier', 5);
  battleship = new Ship('battleship', 4);
  sub = new Ship('sub', 3);
  cruiser = new Ship('cruiser', 3);
  destroyer = new Ship('destroyer', 2);

  myBoard.placeShip(sub, 1);
  myBoard.placeShip(carrier, 27);
  myBoard.placeShip(battleship, 5);
  myBoard.placeShip(cruiser, 65);
  myBoard.placeShip(destroyer, 85);

  myBoard.receiveAttack(1);
  myBoard.receiveAttack(2);
  myBoard.receiveAttack(3);

  myBoard.receiveAttack(27);
  myBoard.receiveAttack(28);
  myBoard.receiveAttack(29);
  myBoard.receiveAttack(30);
  myBoard.receiveAttack(31);

  myBoard.receiveAttack(5);
  myBoard.receiveAttack(6);
  myBoard.receiveAttack(7);
  myBoard.receiveAttack(8);

  myBoard.receiveAttack(65);
  myBoard.receiveAttack(66);
  myBoard.receiveAttack(67);

  myBoard.receiveAttack(85);
  myBoard.receiveAttack(86);

  expect(myBoard.checkAllSunk()).toEqual(true);
})