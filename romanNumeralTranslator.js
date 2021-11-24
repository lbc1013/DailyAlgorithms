
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

 var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!

  if (typeof (romanNumeral) !== 'string') {
    return null;
  } else if (romanNumeral === '') {
    return 0;
  }

  let sum = 0;
  romanNumeral.split('').forEach(function (element) {
    sum += DIGIT_VALUES[element];
  })

  for (let i = 0; i < romanNumeral.length; i++) {
    if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]) {
      sum -= DIGIT_VALUES[romanNumeral[i]]*2;
    }
  }

  // using given digit_values, compare the value
  // create a variable called sum
  // add every number into sum
  // if first element of the input's value is smaller than the next one,
  // substract 2 times of the first element's value from sum
  // return sum

  return sum;
};

/*

I: roman numeral.
O: a number of roman numeral.
C:
E: if the input is not a string, output should be null.

*/