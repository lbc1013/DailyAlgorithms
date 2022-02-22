// Without using .flat(), create a function to flatten an array
// const exampleArray = [1,2,[3,4,[5,6,7],8],9,10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]


function flatten (arr) {
  let falttenArr = arr.reduce ((acc, curVal) => {
    if (Array.isArray(curVal)) {
      acc = acc.concat(flatten(curVal));
    } else {
      acc.push(curVal);
    }

    return acc;
  }, []);
  return (falttenArr)
}

//flatten([1,2,[3,4,[5,6,7],8],9,10]);