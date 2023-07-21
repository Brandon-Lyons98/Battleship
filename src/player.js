class Player {
  constructor(name) {
    this.name = name;
    this.isTurn = true;
  }

  setTurn(value) {
    this.isTurn = value;
  }
}

// let playerBoard = new Gameboard();
// let computerBoard = new Gameboard();
// let playerTurn = true;
// let computerTurn = false;

// if (playerTurn === true) {
//   let coord = prompt('Enter a coordinate you want to attack: ');
//   computerBoard(recieveAttack(coord));
//   playerTurn = false;
//   computerTurn = true;
//   return;
// } else {
//   let coord = Math.floor(Math.random() * 100);

//   if (playerBoard.board[coord] === 'X' || playerBoard.board[coord] === 'M') {
//     return;
//   } else {
//     playerBoard(recieveAttack(coord));
//     computerTurn = false;
//     playerTurn = true;
//     return;
//   }
// }

module.exports = Player;