class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.isVertical = false;
  }
  
  getName() {
    return this.name;
  }
  
  getLength() {
    return this.length;
  }

  setHits(num) {
    this.hits = num;
  }
  
  hit() {
    this.hits ++;
  }
  
  getLives() {
    return this.length - this.hits;
  }

  isSunk() {
    if (this.hits === this.length) {
      return this.sunk = true;
    }
  }

  setVertical() {
    this.isVertical = true;
  }
}

module.exports = Ship;