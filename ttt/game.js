var Board = require("./board");

var Game = function (reader) {
  this.board = new Board();
  this.currentPlayer = 'X';
  this.reader = reader;
};

Game.prototype.nextTurn = function () {
  this.currentPlayer = (this.currentPlayer === 'X' ? 'O' : 'X');
};

Game.prototype.run = function (completionCallback) {
  var that = this;
  
  this.promptMove( function (pos) {
    if (!that.board.placeMark(pos, that.currentPlayer)) {
      console.log("FLAGRANT SYSTEM ERROR ABORT ABORT ABORT!!!!");
    }
    if (!that.board.isWon()) {
      that.nextTurn();
      that.run(completionCallback);
    } else {
      console.log('WINNER === YOU');
      completionCallback();
    }
  });
};

Game.prototype.promptMove = function (callback) {
  this.board.print();
  console.log("It is now " + this.currentPlayer + "'s turn.");
  this.reader.question("Enter the coordinates where you want to move" + 
  " (e.g. 'row,col')", function(pos) {
    pos = pos.split(",");
    pos = pos.map(Number);
    callback(pos);
  });
};

module.exports = Game;