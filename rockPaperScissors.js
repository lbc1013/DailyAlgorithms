/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (number = 3) {

  // create an array of rock-paper-scissors.
  const storage = ['R', 'P', 'S'];
  const result = [];

  // recursive func
  var getSequences = function (roundsleft, playedSoFar) {
    // base function
    if (roundsleft === 0) {
      result.push(playedSoFar);
    } else {
      for (let i = 0; i < storage.length; i++) {
        getSequences(roundsleft - 1, playedSoFar.concat('', storage[i]));
      }
    }
  }
  getSequences(number, '');
  return result;
}


/*

I: number
O: every squence of throws when a single player could throw for number of rounds.
C:
E: if number is undefined,
throw over a three-round.

*/