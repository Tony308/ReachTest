/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */


/** Average and worst case time complexity (Big-O) of my function is: O(n log(n)), O(n^2)
  * Explain: Bubble sort used which has average O(n log(n)) and worst O(n^2). 
  * Initial loop checking for integers is O(n) based on array size and 
  * doesn't impact time complexity too much compared to the bubble sort. 
 */
module.exports = function sortArray(arr) {
  // TODO

  arr.forEach((integer) => {
    const isNotInteger = !Number.isInteger(integer);
    if (isNotInteger) {
      throw new TypeError("wtf");
    }

  });

  for (let x = 0; x < arr.length; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[x]) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
};  