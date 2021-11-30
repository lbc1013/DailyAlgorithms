/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

//Array.isSubsetOf(arr);
Array.prototype.isSubsetOf = function (arr) {
  //make arr as non duplicate one using set()
  //and make it array again using array from
  //iterate the context array,
  //if the input arr includes the element of context array
  //return push into result array

  const result= [];

  for (let i = 0; i < this.length; i++) {
    let check = arr.includes(this[i]);
    result.push(check);
  }

  if (result.includes(false)) {
    return false;
  } else {
    return true;
  }
};


/*
I : array
O : true if context array is a subset of an input array, otherwise false.
C : when there's duplicates in the set, we can disregard.
E : none
*/