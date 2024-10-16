const intersectionElemnt = (arr1, arr2) => {
  let firstArrPointer = 0;
  let secondArrPointer = 0;
  let intersectionResult = [];

  while (firstArrPointer < arr1.length && secondArrPointer < arr2.length) {
    if (arr1[firstArrPointer] < arr2[secondArrPointer]) {
      firstArrPointer++;
    } else if (arr1[firstArrPointer] > arr2[secondArrPointer]) {
      secondArrPointer++;
    } else {
      intersectionResult.push(arr1[firstArrPointer]);
      firstArrPointer++;
      secondArrPointer++;
    }
  }
  return intersectionResult;
};

console.log(intersectionElemnt([1, 2, 4, 5, 6], [2, 4, 6, 8]));
