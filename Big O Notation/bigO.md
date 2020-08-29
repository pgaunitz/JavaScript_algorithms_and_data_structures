# Big O Notation

## Time complexety
1. Arithmetic operations are constand
2. Variable assagment is constant
3. Accessing elemts in an array or object(by index or key) is constant
4. In a loop, complexety is the lenght of the loop times the complexety of whats happends in the loop

#### Exampels
5n+2 operations => O(n)
```javascript
const addUpTo = (n) => {
  // 1 assaignment
  let total = 0;
  // 1 assignment, n comparisons, n additions, n assignments
  for (let i = 1; i <= n; i++) {
    //  n assignments n additions
    total += i;
  }
  return total;
};
```  
O(n)  
```javascript
function min5Times(n) {
  for (let i =1; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}
```  
3 simple operations, 1 multiplication, 1 addition, 1 division => O(3) => O(1)  
```javascript
const addUpTo = (n) => {
  return (n * (n + 1)) / 2;
};
```
O(1)  
```javascript
function max5Times(n) {
  for (let i =1; i <= Math.min(5, n); i++) {
    console.log(i)
  }
}
```
O(n²)
```javascript
const printPairs = (n) => {
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
};
```
O(n³)
```javascript
const printPairs2 = (n) => {
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
};
```

### Constans and smaller terms don't matter

O(1000) => O(1)

O(2n) => O(n)  

O(10n²) => O(n²)

O(n+100) => O(n)

O(n²+10n+10) => O(n²)


## Space complexety

O(1) space
```javascript
function sum(arr) {
  let total = 0
  for (let i =1; i <= arr.length; i++) {
    total += arr[i)];
  }
  return total;
}
// two numbers, total and i
```
O(n) space
```javascript
function sum(arr) {
  let newArr = 0
  for (let i =1; i <= arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
// n numbers 
```