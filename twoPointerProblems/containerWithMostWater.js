const containerWithMostWater = (arr) => {
  let lp = 0;
  let rp = arr.length - 1;

  let maxWater = 0;
  while (lp < rp) {
    let width = rp - lp;
    let height = Math.min(arr[rp], arr[lp]);
    let currentWater = width * height;
    maxWater = Math.max(maxWater, currentWater);

    if (arr[lp] < arr[rp]) {
      lp++;
    } else {
      rp--;
    }
  }

  return maxWater;
};

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
