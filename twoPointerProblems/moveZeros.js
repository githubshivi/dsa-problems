const moveZeros = (arr) => {
  let lastNonZeroElementFoundAt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[lastNonZeroElementFoundAt] = arr[i];
      lastNonZeroElementFoundAt++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = lastNonZeroElementFoundAt; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

console.log(moveZeros([1,2,3]));
