/**
 * Problem: Flatten an Array
 * Input: [1,2,[3,4],5]
 * Output: [1,2,3,4,5]
 *
 * Approach: Recursion
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

let arr = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];

const flattenArray = (inputArray) => {
    let newArray = [];
    for(let item of inputArray){
        if(Array.isArray(item)){
        newArray.push(...flattenArray(item));
        }else{
            newArray.push(item);
        }
    }
    return newArray;
}

console.log(flattenArray(arr));