// we are given with the array and a digit we need to find the sum of sub array whose sum is maximum
// [1,2,4,5,6,7,4,3,9] n=3 so the sub array would be [5,6,7] and sum is 18

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum)
  return maxSum;
}

// maxSubarraySum([1,3,2,4,5,0,8,2,9,3,4,5,6,9,1,1,2,3],2)

// We are given an array and window size k we need to move the window to the right position and everytime we need to find the largest element and push into the result array
// [1,3,-1,-3,5,3,6,7] k=3 output = [3,3,5,5,6,7]

function maxSlidingWindowNaive(arr,k){
    let resultArry = []
    for(let i=0; i<=arr.length - k ;i++){
        let max=arr[i]
        for(let j=1; j<k;j++){
            console.log(j,arr[j+i])
            if(arr[j+i]>max){
                max=arr[j+i]
            }
            
        }
        resultArry.push(max)
    }
    console.log(resultArry)
}

maxSlidingWindowNaive([1,3,-1,-3,5,3,6,7],3)

