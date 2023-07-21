const Player = require('../player');
const Gameboard = require('../gameboardFactory');
const Ship = require('../shipFactory');

beforeEach(function () {
  playerOne = new Player('Brandon');
  playerOneBoard = new Gameboard();
})

test('playerOne turn should equal false', () => {
  expect(playerOne.isTurn).toEqual(true);
})

test('playerOne name should be Brandon', () => {
  expect(playerOne.name).toEqual('Brandon');
})

test('playerOne board should have length 100', () => {
  playerOneBoard.getBoard();
  expect(playerOneBoard.board.length).toEqual(100);
})

test('playerOneBoard[0] should contain a ship O', () => {
  playerOneBoard.getBoard();
  
  sub = new Ship('sub', 3);
  playerOneBoard.placeShip(sub, 0);
  
  expect(playerOneBoard.board[0]).toEqual('O');
  expect(playerOneBoard.board[1]).toEqual('O');
  expect(playerOneBoard.board[2]).toEqual('O');
})