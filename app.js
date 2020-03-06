const width = 5;
const height = 4;

// Make deadstate board - all cells are 0
let deadState = (width, height) => {
  let board = [];
  for (let h = 0; h < height; h++) {
    board.push([]);
    for (let w = 0; w < width; w++) {
      board[h][w] = 0;
    }
  }
  return board;
};

// Build data structure to store the board state
let randomState = (width, height) => {
  let board = [];
  for (let h = 0; h < height; h++) {
    board.push([]);
    for (let w = 0; w < width; w++) {
      let randomNumber = Math.random();
      board[h][w] = randomNumber > 0.6 ? 1 : 0;
    }
  }
  return board;
};

// Pretty print
let render = state => {
  let lines = "";
  for (let h = 0; h < height; h++) {
    let line = "";
    for (let w = 0; w < width; w++) {
      if (state[h][w] === 0) {
        line += " ";
      } else {
        line += "#";
      }
    }

    lines += line + "\n";
  }
  console.log(lines);
  return lines;
};

// Find sum of neighbor cells
let findNeighborSum = (i, j, board) => {
  try {
    return board[i][j] === 1 ? 1 : 0
  } catch {
    return 0;
  }
};

// Calculate the next move to find the next state of the board
let iterateBoard = board => {
  render(board);
  let copyBoard = deadState(width, height);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let sum =
        findNeighborSum(i - 1, j - 1, board) +
        findNeighborSum(i - 1, j + 0, board) +
        findNeighborSum(i - 1, j + 1, board) +
        findNeighborSum(i - 0, j - 1, board) +
        findNeighborSum(i - 0, j + 1, board) +
        findNeighborSum(i + 1, j - 1, board) +
        findNeighborSum(i + 1, j + 0, board) +
        findNeighborSum(i + 1, j + 1, board);

      if (board[i][j] === 0) {
        if (sum === 3) {
          copyBoard[i][j] = 1;
        } else {
          copyBoard[i][j] = 0;
        }
      } else {
        if (sum === 0 || sum === 1) {
          copyBoard[i][j] = 0;
        }
        if (sum === 2 || sum === 3) {
          copyBoard[i][j] = 1;
        } else {
          copyBoard[i][j] = 0;
        }
      }
    }
  }
  render(copyBoard);
};

let randomBoard = randomState(width, height);
iterateBoard(randomBoard);
