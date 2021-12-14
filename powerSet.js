/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {

  if (str === '') {return '';}
  str = Array.from(new Set(str.split(''))).join('');

  var result = [];
  var findSubSets = function (index, string) {
    result.push(string);
    for (let i = index; i < str.length; i++) {
      findSubSets(i + 1, string+str[i]);
    }
  }

  findSubSets(0, '');
  return result;
};


/*


I : a String
O : an array with all possible subsets including the empty set.
C : if the input string has duplicate alphabet, I need to get ride of one of them.
E : if the input string is empty, it will return the empty string.



*/