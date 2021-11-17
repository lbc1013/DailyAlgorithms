/*
Q.
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 *
 * example usage:
 *
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  //create new object
  //create new result array
  //iterate the input arr
  //add the element of the arr as a key of the object
  //add value of the object as much as +1
  //push the element into result
  //iterate the result and find the one has even number as value of the object
  //return the first one.

  var obj = {};
  var result = [];
  var finalResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      result.push(arr[i]);
      obj[arr[i]] += 1;
    }
  }

  if (result[0] === undefined || arr[0] === undefined) {
    return null;
  }

  var objKeys = Object.keys(obj);

  for (let i = 0; i < arr.length; i++) {
    objKeys.forEach(function (element) {
      if (arr[i].toString() === element && obj[element] % 2 === 0) {
        finalResult.push(arr[i]);
      }
    })
  }

  if (finalResult[0] === undefined) {
    return null;
  } else {
    return finalResult[0];
  }};

//input : resultay of numbers
//output : the first item that occurs an even number of times in the resultay.
//constraint :
//edge case : if there's no item having even number times in array, return null.