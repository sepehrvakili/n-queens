/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// Assuming 3x3 board
// Total permutations = 9 * 8 * 7 = 504
// Total combinations = 9!/6!/3! = 84
// Total rooks = 3
// Base case = when we have 3 rooks
// count of rooks
/*[
  [0, 0, 0], Math.floor(3 / 3) = 1 array
  [0, R, 0], 5 % 3 = 2
  [0, 0, 0]
]*/ 

/*[
  [0, 1, 2], Math.floor(2 / 3) = 0 array. 2 % 3 = 2
  [3, 4, 5], 5 % 3 = 2
  [6, 7, 8]
]*/ 

// var board.length = n
// 

// addRooks Function (board, # of rooks)
  // Fail case: Test if column and row pass

    // Base case:
      // When board has 3 rooks
      // return current board
    // Recursive case:
      // Add a rook to the board
      // addRooks(board, # of rooks)


// Kick off recursion formula


window.findNRooksSolution = function(n) {
  
  // var board.length = n 
  var emptyBoard = new Board({n: n});
  var spaces = n * n;
  var length = n;

  // addRooks Function (board, # of rooks)
  var addRook = function(board, rookCount, position) {
    // Fail case: Test if column and row pass
    if ( !board.hasAnyRooksConflicts() ) {
      // Base case:
      if (rookCount === n) {
        // When board has 3 rooks
        // return current board
        // console.log('returned');
        // console.log(board.rows());
        return board.rows();
      } else {
      // Recursive case:
        // Add a rook to the board
        while (position < spaces) {
          var y = Math.floor(position / n);
          var x = position % n;
          var boardArrays = board.rows();  
          boardArrays[y][x] = 1;
          console.log(boardArrays);
          var flatBoard = _.flatten(boardArrays);
          rookCount = _.reduce(flatBoard, function(sum, num) { return sum + num; });
          position++;
          addRook(board, rookCount, position);
        }
        
        // addRooks(board, # of rooks, number)
        // addRook(emptyBoard, 0, 0);
      } 
    }
  };

  addRook(emptyBoard, 0, 0);
  
  //var solution = addRook(emptyBoard, 0, 0);
// Kick off recursion formula

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
