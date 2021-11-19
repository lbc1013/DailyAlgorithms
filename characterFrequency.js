/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  // create a result array;
  // create a new obj
  // iterate the string, and assign into a obj as a key.
  // and make its value as 1 at the first time.
  // if there's already key assigned, we add +1 to its value.
  // find it's biggest value and store in a temp variable.
  // if the obj's value is greater or same as the biggest value,
  // we change the value in the temp variable.

  var result = [];
  var obj = {};

  if (string === '') {
    return [];
  }
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]] += 1;
    }
  }

  var objKeySorted = Object.keys(obj).sort();
  for (let element of objKeySorted) {
    var tempArr = [];
    tempArr.push(element, obj[element]);
    result.push(tempArr);
  }

  result.sort((a,b) => b[1] - a[1]);

  return result;
};
