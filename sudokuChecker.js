/*
Given a full sudoku board, return 'solved' if the board is solved,
or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row,
and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Your code here.

  var newBoard = [];
  var container = [];
  var boardWithOnlyNumber = board.split('').filter(function (element) {
    if (element !== '\n') {
      newBoard.push(Number(element));
    }});

  if (newBoard.length !== 81) {
    return 'invalid';
  }

  for (let i = 0; i < 81; i +=9) {
    container.push(newBoard.slice(i,i+9))
  }

  var row = function (arr) {
    var check = 'solved';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].reduce(( a, b ) => ( a + b )) !== 45) {
        check = 'invalid';
      }
    }
    return check;
  }

  var column = function (arr) {
    var check = 'solved';
    for (let i = 0; i < arr.length; i++) {
      var sum = 0;
      arr.forEach((element) => (
        sum += element[i]
      ))
      if (sum !== 45) {
        check = 'invalid';
      }
    }

    return check;
  }

  if (row(container) === 'solved' && column(container) === 'solved') {
    return 'solved';
  } else {
    return 'invalid';
  }
}

//row :
  // check i to i+8

//column :
  // check i, i+9, i+9(2) ..



/*
I: board with each 9 lines in column and row.
O: If the board is valid, return 'solved', else return 'invalid'
C: none
E: if the input board's length is not 81, then return 'invalid'.

*/