const twoSumInSortedArray = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];

    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      return [start, end];
    }
  }
  return null;
};

const twoSumClosestPair = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  let closetSum = Infinity;
  let closetPair = [];

  while (start < end) {
    let sum = arr[start] + arr[end];

    if (Math.abs(target - sum) < Math.abs(target - closetSum)) {
      console.log(
        "Iteration",
        Math.abs(target - sum),
        Math.abs(target - closetSum)
      );
      closetSum = sum;
      closetPair = [arr[start], arr[end]];
    }

    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return closetPair;
};
console.log(twoSumClosestPair([1, 4, 5, 7, 10, 12],15))
// console.log(twoSumInSortedArray([-3, 2, 3, 3, 6, 8], 14));
