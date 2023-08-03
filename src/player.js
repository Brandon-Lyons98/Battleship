class Player {
  constructor(name) {
    this.name = name;
    this.isTurn = true;
  }

  setTurn(value) {
    this.isTurn = value;
  }
}

module.exports = Player;