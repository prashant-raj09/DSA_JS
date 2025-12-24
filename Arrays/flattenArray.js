/**
 * Problem: Flatten an Array
 * Input: [1,2,[3,4],5]
 * Output: [1,2,3,4,5]
 *
 * Approach: Recursion
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/*
    We don’t use map() because flattening an array is NOT a “map” operation.
    👉 map() cannot change array size logically

    🔥 Interview-level Explanation (memorize this)
            map() is for same-length transformations.
            Flattening changes structure and size, so reduce() or recursion is the correct tool.
*/

let arr = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];

// Recursive function to flatten an array
const flattenArray = (inputArray) => {
  let newArray = [];
  for (let item of inputArray) {
    if (Array.isArray(item)) {
      newArray.push(...flattenArray(item));
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

// built-in method 
console.log(arr.flat(Infinity)); 

// custom method
console.log(flattenArray(arr));
