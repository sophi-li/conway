// 1. build data structure to store board state
// 2. pretty print board into terminal
// 3. given a starting board state, calc the next one
// 4. run the game forever

let width = 2;
let height = 6;

let deadState = (width, height) => {
  const board = [];
  for (let h = 0; h < height; h++) {
    board.push([]);
    for (let w = 0; w < width; w++) {
      let randomNumber = Math.random();
      let cellState = 0;
      if (randomNumber > 0.7) {
        cellState = 1;
      }
      //   console.log(randomNumber);
      //   board[h][w] = Math.floor(Math.random() * 2);
      board[h][w] = cellState;
    }
  }
  return board;
};

console.log(deadState(width, height));
