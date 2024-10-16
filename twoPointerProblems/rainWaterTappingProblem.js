const rainWaterTapping = (arr) => {
  let leftMax = [];
  leftMax[0] = arr[0];
  let rightMax = [];
  let totalWater = 0;
  rightMax[arr.length - 1] = arr[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    leftMax.push(Math.max(leftMax[i - 1], arr[i]));
  }

  console.log(leftMax)

  for (let i = arr.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
  }

  console.log(rightMax)

  for (let i = 0; i < arr.length; i++) {
    const waterAtIndex = Math.min(leftMax[i], rightMax[i]) - arr[i];
    console.log(waterAtIndex)
    if (waterAtIndex > 0) {
      totalWater += waterAtIndex;
    }
  }

  return totalWater;
};

console.log(rainWaterTapping([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
