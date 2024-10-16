// We need to found the pair of element in array whose sum would be zero;

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -1, 0, 1, 3, 7]));

// [1,1,1,2,3,3,4,5,6,6,6,7,8,9,10]

const uniqueValues = (arr) => {
    if(arr.length===0) return 0;
  let first = 0;
  for (let second = 1; second < arr.length; j++) {
    if (arr[first] !== arr[second]) {
      first++;
      arr[i] = arr[j];
    }
  }
  return i+1;
};
