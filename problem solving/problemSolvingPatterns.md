# Problem Solving Patterns

## Frequency Counter Pattern

Write a function that accepts two arrays.  
The function sould return true if every value in the array has it's correspondig value squared in the second array. The frequency of values must be the same.

```javascript
same([1, 2, 3], [4, ,1 ,9] //true)
same([1], [1, 2]) //false
same([1, 2, 1], [4, 4, 1]) //false
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
//O(n²)
```

```javascript
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};
//O(3n)
```

**Anagram Challange**
Given to strings, write a function to determind if the second string is an anagram of the first.

```javascript
validAnagram('anagram', 'nagaram'); //true
validAnagram('rat', 'car'); //false

validAnagram(str1, str2);
// check if the strings have the same length
//if not return false
//create two objects
// loop through strings and count the frequenzy of each char and save in to obj
// compare the two obj
//return false if check fails
//else return true

const validAnagram = (stri1, stri2) => {
  if (stri1.length !== stri2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of stri1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of stri2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

//another solution, using charCodeAt method
const validAnagram = (str1, str2) => {
  let str1Sum = 0;
  let str2Sum = 0;
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    str1Sum += str1.charCodeAt(i);
    str2Sum += str2.charCodeAt(i);
  }
  if (str1Sum !== str2Sum) {
    return false;
  }

  return true;
};
```

## Multiple Pointers Pattern

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well
**Example**
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

```javascript
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined

//naive solution
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
//Time complexity O(N²), Space Complexity O(1)

//Refactored
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
//Time complexity O(N), Space complexety O(1)
```

**Example 2**
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```javascript
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

const countUniqueValues = (arr) => {
  let i = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
};
```
