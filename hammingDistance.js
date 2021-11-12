/*
Q.
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, return the Hamming distance between them.

Example 1

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.

Example 2:

Input: x = 3, y = 1
Output: 1

*/

var hammingDistance = function(x, y) {
  var binaryX = x.toString(2);
  var binaryY = y.toString(2);
  var diffTimes = 0;

  if (binaryX.length !== binaryY.length) {
      var times = Math.abs(binaryX.length - binaryY.length);
      while (times !== 0) {
        if (binaryX.length > binaryY.length) {
            binaryY = '0' + binaryY;
            times--;
        } else {
            binaryX = '0' + binaryX;
            times--;
        }
      }
  }
  for (var i = 0; i < binaryX.length; i++) {
    if (binaryX[i] !== binaryY[i]) {
        diffTimes++;
    }
  }
  return diffTimes;
};