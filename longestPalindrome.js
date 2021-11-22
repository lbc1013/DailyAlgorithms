/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {

  if (string === '') {
    return '';
  }

  const result = [];
  const splittedString = string.split('');

  for (let i = 0; i < splittedString.length; i++) {
      var palindromeLetter = splittedString[i];
      for (let j = i+1; j < splittedString.length; j++) {
        palindromeLetter += splittedString[j];
        if (palindromeLetter === palindromeLetter.split('').reverse().join('')) {
            result.push(palindromeLetter);
        }
      }
  }
  // create a new array for result.
  // split the string by ' ';
  // iterate the new arr and
  // when each element get reverse(), if it's same and has same length
  // then push to the array.

  var length = 0;
  var resultIndex = 0;
  for (let i = 0; i < result.length; i++) {
    if (length < result[i].length) {
      resultIndex = i;
      length = result[i].length;
    }
  }
  if (result[0] === undefined) {
    return '';
  } else {
    return result[resultIndex];
  }

 };


//I : string.
//O : a longest palindrome.
//C :
//E : when the input string is '', return '';