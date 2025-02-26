let players = ['x', 'o'];
let activePlayer = 0;
let board = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
];

function startGame() {
  board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ];
  activePlayer = 0;
  renderBoard(board);
}

function click(str, col) {
  board[str][col] = players[activePlayer];
  renderBoard(board);
  const result = checkWinner(board);
  if (result) {
    showWinner(activePlayer);
  } else {
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  }
}

function checkWinner(board) {
  const boardSize = board.length;
  for (let i = 0, counter = 0; i < boardSize; i++) {
    if (board[i][i] === players[activePlayer]) {
      counter += 1;
    }
    if (counter === boardSize) return true;
  }

  for (let i = 0, j = boardSize - 1, counter = 0; i < boardSize; i++, j--) {
    if (board[i][j] === players[activePlayer]) {
      counter += 1;
    }
    if (counter === boardSize) return true;
  }

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0, counter = 0; j < boardSize; j++) {
      if (board[i][j] === players[activePlayer]) {
        counter += 1;
      }
      if (counter === boardSize) return true;
    }
  }

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0, counter = 0; j < boardSize; j++) {
      if (board[j][i] === players[activePlayer]) {
        counter += 1;
      }
      if (counter === boardSize) return true;
    }
  }

  return false;
}
