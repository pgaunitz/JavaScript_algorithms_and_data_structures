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
console.log(validAnagram("anagram", "nagaram"))
console.log(validAnagram("car", "cat"))