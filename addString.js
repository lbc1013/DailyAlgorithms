/*

Q.
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  //declare a variable for each parameter as a number.
  //create a variable sum as the sum of the parameters.
  //make sum as string.
  //return sum;
  var num1Value = 0;
  var num1Length = num1.length;
  for (let i = 0; i < num1.length; i++) {
      num1Value += Number(num1[i]) * 10**(num1Length-1);
      num1Length--;
  }

  var num2Value = 0;
  var num2Length = num2.length;
  for (let i = 0; i < num2.length; i++) {
      num2Value += Number(num2[i]) * 10**(num2Length-1);
      num2Length--;
  }

  var sum = num1Value + num2Value;
  return sum.toString();
};