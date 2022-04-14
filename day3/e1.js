/**
 * 4. Write a JS Function to get the first index of the 3rd largest element in an array.
 */

const thirdLargest = (arr) => {
  arraySet = [...new Set(arr)]
  arraySet.sort((a,b) => a-b);
  element = arraySet[arraySet.length-3]
  return arr.indexOf(element)
}
arr = [8,8,8,2,2,2,9,6,5,7,2,5,4,7,7,3,5,9,9,9,2,3,4]
console.log(thirdLargest(arr))

/**
 * 5. Write a JavaScript function to find the unique elements from two arrays
 */

const intersection = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])]
}

console.log(intersection([1,2,3,4], [3,4,5,6]))