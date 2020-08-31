const charCount = (str) => {
  let result = {};
  for (let char of str) {
    
    if (char.toLowerCase() != char.toUpperCase() || /[0-9]/.test(char) ) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
};
console.log(charCount("Året är 2020!!!"));
