# Strategies

## Understand the problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What outputs should come from the solution to the problem?
4. Do I have enough info to solve the problem ?
5. How should I label the important pices of data that are a part of the problem?

### Explore exampels

1. Start with simple exampels
2. progress to more complex exampels
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

> **Example**  
> "Write a function wich takes in a string and returns counts of each character in the string"
>
> ```javascript
> charCount("aaaa"); // {a:4} or {a:4, b:0, c:0.....}
> charCount("Hello I have 10 monitors"); // do I want to count uppercase sepratley, count spaces?, numbers?
>
> const charCount = (str) => {
>   // do stuff
>   //return an object with keys that are lowercase alphanumeric charactrers, values for those characters
> };
> const charCount = (str) => {
>   // make obj to return
>   let result = {};
>   // loop over string, for each char
>   for (let i = 0; i < str.length; i++) {
>     let char = str[i].toLowerCase();
>     //if the char is a letter/number AND key in obj, add one to count
>     if (result[char] > 0) {
>       result[char]++;
>       //if char is a letter/number not add it, set value to 1
>     } else {
>       result[char] = 1;
>     }
>   }
>   //if char is somthing else (space, dot etc) do nothing
>   // return obj
>   return result;
> }; //charCount("Hello there") => { h: 2, e: 3, l: 2, o: 1, ' ': 1, t: 1, r: 1 } 90% done
>
> const charCount = (str) => {
>   // make obj to return
>   let result = {};
>   // loop over string, for each char
>   for (let i = 0; i < str.length; i++) {
>     let char = str[i].toLowerCase();
>     //if the char is a letter/number AND key in obj, add one to count
>     if (/[a-z0-9]/.test(char)) {
>       if (result[char] > 0) {
>         result[char]++;
>         //if char is a letter/number not add it, set value to 1
>       } else {
>         result[char] = 1;
>       }
>     }
>   }
>   //if char is somthing else (space, dot etc) do nothing
>   // return obj
>   return result;
> }; //charCount("Hello there") => { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 }
>
> //refactored works with non english letters åäöæø
> const charCount = (str) => {
>   let result = {};
>   for (let char of str) {
>     if (char.toLowerCase() != char.toUpperCase() || /[0-9]/.test(char)) {
>       char = char.toLowerCase();
>       result[char] = ++result[char] || 1;
>     }
>   }
>   return result;
> };
> ```
