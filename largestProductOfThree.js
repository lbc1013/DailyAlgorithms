/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  //pick the largest number among the array.
  //sort the input array from largest number to smallest number
  //create result variable
  //mutiply the three largest number to result
  //return result

  //if there's negative number
  //if two negative number's absolute value is greater than the two second larget positive numbers.
  //then we can use one largest positive number and two negative numbers.

  let result = 1;
  const newArray = array.sort((a,b) => b-a);

  let i = 0;
  let newArrayLength = newArray.length;


  if (newArray[0] < 0) {
    while (i < 3) {
      result *= newArray[i];
      i++;
    }
  } else if (newArray[1]*newArray[2] >= newArray[newArrayLength-1]*newArray[newArrayLength-2]) {
    while (i < 3) {
      result *= newArray[i];
      i++;
    }
  } else {
    result *= newArray[0] * newArray[newArrayLength-1] * newArray[newArrayLength-2];
  }

  return result;
};

/*
I: Array with number
O: the largest number with three number.
C:
E: handle negative numbers.
*/
