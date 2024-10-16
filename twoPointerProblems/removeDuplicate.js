const removeDuplicate = (num) => {
  if (num.length === 0) return 0;
  let lastUniqueElementFoundAt = 0;

  for (let i = 1; i < num.length; i++) {
    if (num[i] !== arr[lastUniqueElementFoundAt]) {
      lastUniqueElementFoundAt++;
      arr[lastUniqueElementFoundAt] = arr[i];
    }
  }
  return lastUniqueElementFoundAt + 1;
};

const removeElement = (nums, val) => {
  let lastOccusringIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[lastOccusringIndex] = nums[i];
      lastOccusringIndex++;
    }
  }
  return lastOccusringIndex;
};
