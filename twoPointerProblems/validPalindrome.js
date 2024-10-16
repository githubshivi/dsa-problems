const validPalindrome = (str) => {
  const filteredString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = filteredString.length - 1;
  while (start < end) {
    if (filteredString.charAt(start) !== filteredString.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
