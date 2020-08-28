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
// 5n+2 operations

console.log(addUpTo(1000000));
