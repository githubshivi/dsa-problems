const reverseString = (str) => {
  let start = 0;
  let end = str.length - 1;
  let arr = str.split("");

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr.join("");
};

console.log(reverseString("hello shiv"))
