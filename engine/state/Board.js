CardBase = require('../../cards/CardBase.js').CardBase;

function Board() {
  this.left = [];
  this.right = [];
}

Board.prototype.insertAt = function (card, side, index) {
  let selSide;
  if (side === 'left') {
    selSide = this.left;
  } else {
    selSide = this.right;
  }

  for (let i = selSide.length; i != index; i--) {
    selSide[i] = selSide[i - 1];
  }
  selSide[i] = card;
};

Board.prototype.toString = function () {
  val = "";
  val += "left: " + this.left.toString() + '\n';
  val += "right: " + this.right.toString() + '\n';
  return val;
}

module.exports = {
  Board: Board
}
