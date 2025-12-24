/**
 * Problem: Flatten an Array
 * Input: [1,2,[3,4],5]
 * Output: [1,2,3,4,5]
 *
 * Approach: Recursion
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

let array = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];

const flattenArray = (arr) => {
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item));
        }else{
            result.push(item);
        }
    }
    return result;
}

const flattened = flattenArray(array);
console.log(flattened); // [1,2,3,4,5,6,7,8,9]