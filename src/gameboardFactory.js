const Ship = require('./shipFactory');

let carrier = new Ship('carrier', 5);
let battleship = new Ship('battleship', 4);
let sub = new Ship('sub', 3);
let cruiser = new Ship('cruiser', 3);
let destroyer = new Ship('destroyer', 2);

class Gameboard {
  constructor() {
    this.board = [];
    this.shipCoords = [];
  }
  
  getBoard() {
    for (let i = 0; i < 100; i++) {
      this.board[i] = [];
    }
    return this.board;
  }
  
  placeShip(ship, start, isVertical = false) {
    let newShip = {
      name: ship.name,
      coords: [],
    };
    let length = ship.length;
    if (isVertical === true) {
      for (let i = start; i < start + (10 * length); i += 10) {
        this.board[i] = 'O';
        newShip.coords.push(i);
      }
    } else {
      for (let i = start; i < start + length; i++) {
        this.board[i] = 'O';
        newShip.coords.push(i);
      }
    }
    this.shipCoords.push(newShip);
    return newShip
  }

  receiveAttack(coord) {
    if (this.board[coord] === 'O') {
      this.board[coord] = 'X';
      
      let name = this.updateShipCoords(coord);
      this.updateShipCoords(coord);

      switch (name) {
        case 'sub':
          sub.hit();
          if (sub.isSunk() === true) {
            return sub.isSunk();
          }
          break;
        case 'carrier':
          carrier.hit();
          if (carrier.isSunk() === true) {
            return carrier.isSunk();
          }
          break;
        case 'destroyer':
          destroyer.hit();
          if (destroyer.isSunk() === true) {
            return destroyer.isSunk();
          }
          break;
        case 'battleship':
          battleship.hit();
          if (battleship.isSunk() === true) {
            return battleship.isSunk();
          }
          break;
        case 'cruiser':
          cruiser.hit();
          if (cruiser.isSunk() === true) {
            return cruiser.isSunk();
          }
          break;
        default:
          console.log('ERROR...');
      }
    } else if (this.board[coord] === 'X') {
      console.log('This spot has already been hit!');
      return false;
    } else {
      this.board[coord] = 'M';
      console.log('Miss!');
      return false;
    }
  }
  
  updateShipCoords(coord) {
    for (let i = 0; i < this.shipCoords.length; i++) {
      if (this.shipCoords[i].coords.includes(parseInt(coord))) {
        for (let j = 0; j < this.shipCoords[i].coords.length; j++) {
          if (this.shipCoords[i].coords[j] === parseInt(coord)) {
            this.shipCoords[i].coords[j] = 'X';
            return this.shipCoords[i].name;
          }
        }
      }
    }
  }
  
  checkAllSunk() {
    if (sub.sunk === true && carrier.sunk === true && destroyer.sunk === true && battleship.sunk === true && cruiser.sunk === true) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Gameboard;