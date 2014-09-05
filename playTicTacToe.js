var TTT = require("./ttt/index.js");

var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new TTT.Game(reader);
game.run(function () {
  reader.close();
});