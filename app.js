// 1. build data structure to store board state
// 2. pretty print board into terminal
// 3. given a starting board state, calc the next one
// 4. run the game forever

// Build data structure to store the board state
let width = 2;
let height = 6;

// This is deadstate - all cells are 0
let deadState = (width, height) => {
  const board = [];
  for (let h = 0; h < height; h++) {
    board.push([]);
    for (let w = 0; w < width; w++) {
      board[h][w] = 0;
    }
  }
  return board;
};
// console.log(deadState(width, height));

// This is random state with 70% chance that cell state is 1
let randomState = (width, height) => {
  const board = [];
  for (let h = 0; h < height; h++) {
    board.push([]);
    for (let w = 0; w < width; w++) {
      let randomNumber = Math.random();
      let cellState = 0;
      if (randomNumber > 0.7) {
        cellState = 1;
      }
      //   board[h][w] = Math.floor(Math.random() * 2);
      board[h][w] = cellState;
    }
  }
  return board;
};

// console.log(randomState(width, height));

// 2. pretty print
let render = state => {
  let lines = [];
  for (let h = 0; h < height; h++) {
    let line = [];
    for (let w = 0; w < width; w++) {
      if (state[h][w] === 0) {
        line.push(" ");
        console.log("hi");
      } else {
        line.push("#");
      }
    }
    lines.push(line);
  }
  return lines;
};

let test = randomState(width, height);
console.log(test);
console.log(render(test));

// 3. calculate next move
