const Board = require('./engine/state/Board.js').Board;
const CardBase = require('./cards/CardBase.js').CardBase;

let board = new Board();
board.insertAt(new CardBase("Name"))

console.log(board.toString());
