const printPairs = (n) => {
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
};
// loop in a loop, O(n) operation inside an O(n) operation <=> O(n*n) <=> O(n²) 
printPairs(100)