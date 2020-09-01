# Problem Solving Patterns

### Frequency Counter Pattern

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
validAnagram("anagram", "nagram"); //true
validAnagram("rat", "car"); //false

validAnagram(str1, str2);
// check if the strings have the same length
//if not return false
//create two objects
// loop through strings and count the frequenzy of each char and save in to obj
// compare the two obj
//return if check fails
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
```
