/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  // Your code here.
  let stringLength = string.length;

  if (string === '') {
    return '';
  }

  const result = [];
  var recursive = (count, combination) => {
    //base case
    if (count === 0) {
      result.push(combination);
    } else {
    //recursive case
    for (let i = 0; i < string.length; i++) {
      recursive(count-1, combination+string[i]);
    }
    }
  }

  recursive(stringLength, '');

  var isDuplicate = (string) => {
    var obj = {};
    string.split('').forEach((element) => {
      if (obj[element] === undefined) {
        obj[element] = 1;
      } else {
        obj[element] += 1;
      }
    })

    for (var key in obj) {
      if (obj[key] > 1) {
        return true;
      }
    }
    return false
  };

  result.forEach((element) => {
    if (isDuplicate(element)) {
      result.splice(result.indexOf(element) , 1);
    }
  })

  return result;
};




/*


I : string.
O : array with all possible anagrams.
C : No duplicate in the array.
E : if string is empty, return empty string.


*/


