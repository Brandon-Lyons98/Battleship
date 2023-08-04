const Ship = require('./shipFactory');
const Gameboard = require('./gameboardFactory');
const Player = require('./player');
const playerGameBoard = document.getElementById('gameboard');
const cpuGameBoard = document.getElementById('cpu-board');
const winner = document.getElementById('winner');
let carrier = new Ship('carrier', 5);
let battleship = new Ship('battleship', 4);
let sub = new Ship('sub', 3);
let cruiser = new Ship('cruiser', 3);
let destroyer = new Ship('destroyer', 2);
let name = prompt('Enter your name: ');
let player = new Player(name);
let computer = new Player('Computer');
let playerBoard = new Gameboard();
let computerBoard = new Gameboard();

playerBoard.getBoard();
computerBoard.getBoard();
computerBoard.placeShip(sub, 0);
computerBoard.placeShip(carrier, 22);
computerBoard.placeShip(battleship, 4);
computerBoard.placeShip(cruiser, 65);
computerBoard.placeShip(destroyer, 85);

for (let i = 0; i < 100; i++) {
  let button = document.createElement('button');
  button.classList.add('boardSquares');
  button.classList.add('blank');
  button.setAttribute('value', i);
  playerGameBoard.appendChild(button);
}

for (let i = 0; i < 100; i++) {
  let button = document.createElement('button');
  button.classList.add('boardSquares');
  button.classList.add('blank');
  button.setAttribute('value', i);
  cpuGameBoard.appendChild(button);
}

playerBoard.placeShip(carrier, parseInt(prompt('Enter the start coordinate for your carrier: ') - 1));
playerBoard.placeShip(battleship, parseInt(prompt('Enter the start coordinate for your battleship: ') - 1));
playerBoard.placeShip(sub, parseInt(prompt('Enter the start coordinate for your sub: ') - 1));
playerBoard.placeShip(cruiser, parseInt(prompt('Enter the start coordinate for your cruiser: ') - 1));
playerBoard.placeShip(destroyer, parseInt(prompt('Enter the start coordinate for your destroyer: ') - 1));

playerBoard.board.forEach(() => {
  for (let i = 0; i < 100; i++) {
    if (playerBoard.board[i] === 'O') {
      playerGameBoard.children[i].textContent = '';
      playerGameBoard.children[i].classList.add('ship');
    }
  }
});

let cpuAttacks = [];
function validAttack(coord) {
  while (cpuAttacks.includes(coord)) {
    coord = Math.floor(Math.random() * 100);
  }
  cpuAttacks.push(coord);
  return coord;
}

let cpuChildren = Array.from(cpuGameBoard.children);
cpuChildren.forEach((element) => {
  element.addEventListener('click', () => {
    let gameOver = false;
    let coord = element.value;
    while (!gameOver) {
      if (coord < 0) {
        gameOver = true;
      } else if (computerBoard.board[coord] === 'X' || computerBoard.board[coord] === 'M') {
        return;
      } else if (computerBoard.board[coord].length === 0) {
        cpuGameBoard.children[coord].classList.add('miss');
        computerBoard.board[coord] = 'M';
        player.setTurn(false);
        computer.setTurn(true);
      } else {
        computerBoard.receiveAttack(coord);
        cpuGameBoard.children[coord].classList.add('hit');
        player.setTurn(false);
        computer.setTurn(true);
        if (computerBoard.checkAllSunk() === true) {
          gameOver = true;
          winner.textContent = `${name} wins!`;
        }
      }

      let validCpuCoord = validAttack(Math.floor(Math.random() * 100));
      if (playerBoard.board[validCpuCoord] === 'X' || playerBoard.board[validCpuCoord] === 'M') {
        return;
      } else if (playerBoard.board[validCpuCoord].length === 0) {
        playerGameBoard.children[validCpuCoord].classList.add('miss');
        player.setTurn(true);
        computer.setTurn(false);
      } else {
        playerBoard.receiveAttack(validCpuCoord);
        playerGameBoard.children[validCpuCoord].classList.add('hit');
        computer.setTurn(false);
        player.setTurn(true);
        if (playerBoard.checkAllSunk() === true) {
          gameOver = true;
          winner.textContent = 'Computer won!';
        }
      }

      if (gameOver === true) {
        console.log('GAME OVER!!!');
      }
    }
  })
})