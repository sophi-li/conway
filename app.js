const width = 5
const height = 4

// Make deadstate board - all cells are 0
let deadState = (width, height) => {
  let board = []
  for (let h = 0; h < height; h++) {
    board.push([])
    for (let w = 0; w < width; w++) {
      board[h][w] = 0
    }
  }
  return board
}

// Build data structure to store the board state
let randomState = (width, height) => {
  let board = []
  for (let h = 0; h < height; h++) {
    board.push([])
    for (let w = 0; w < width; w++) {
      let randomNumber = Math.random()
      board[h][w] = randomNumber > 0.6 ? 1 : 0
    }
  }
  return board
}

// Pretty print
let render = state => {
  let lines = ''
  for (let h = 0; h < height; h++) {
    let line = ''
    for (let w = 0; w < width; w++) {
      if (state[h][w] === 0) {
        line += ' '
      } else {
        line += '#'
      }
    }

    lines += line + '\n'
  }
  console.log(lines)
  return lines
}

// Find sum of neighbor cells
let findNeighborSum = (h, w, board) => {
  try {
    return board[h][w] === 1 ? 1 : 0
  } catch (er) {
    console.log(er)
    return 0
  }
}

// Calculate the next move to find the next state of the board
let iterateBoard = board => {
  render(board)
  let copyBoard = deadState(width, height)
  for (let h = 0; h < board.length; h++) {
    for (let w = 0; w < board[0].length; w++) {
      let sum =
        findNeighborSum(h - 1, w - 1, board) +
        findNeighborSum(h - 1, w + 0, board) +
        findNeighborSum(h - 1, w + 1, board) +
        findNeighborSum(h - 0, w - 1, board) +
        findNeighborSum(h - 0, w + 1, board) +
        findNeighborSum(h + 1, w - 1, board) +
        findNeighborSum(h + 1, w + 0, board) +
        findNeighborSum(h + 1, w + 1, board)

      if (board[h][w] === 0) {
        if (sum === 3) {
          copyBoard[h][w] = 1
        } else {
          copyBoard[h][w] = 0
        }
      } else {
        if (sum === 0 || sum === 1) {
          copyBoard[h][w] = 0
        }
        if (sum === 2 || sum === 3) {
          copyBoard[h][w] = 1
        } else {
          copyBoard[h][w] = 0
        }
      }
    }
  }
  render(copyBoard)
}

let randomBoard = randomState(width, height)
iterateBoard(randomBoard)
