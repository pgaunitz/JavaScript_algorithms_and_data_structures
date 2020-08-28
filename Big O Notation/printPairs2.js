const printPairs2 = (n) => {
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
};
// loop in a loop in a loop => O(n) operation inside an O(n) operation inside O(n) operation <=> O(n*n*n) <=> O(n³)
printPairs(2);
