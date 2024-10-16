// Count characters of given string

function charCount(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  let lowerCaseStr = str.toLowerCase();
  let output = {};
  for (let i = 0; i < lowerCaseStr.length; i++) {
    let char = lowerCaseStr[i];
    if (/[a-z0-9]/.test(char)) {
      if (output[char] > 0) {
        output[char]++;
      } else {
        output[char] = 1;
      }
    }
    // if(!Object.keys(output).includes(lowerCaseStr[i])){
    //     output[lowerCaseStr[i]]= 1;
    // }
    // else if(Object.keys(output).includes(lowerCaseStr[i])){
    //     output[lowerCaseStr[i]] = output[lowerCaseStr[i]] + 1
    // }
  }
  return output;
}

function optimizedCharCount(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  let output = {};
  for (let char of str) {
    // if (/[a-z0-9]/.test(char)) {
    //   output[char] > 0 ? output[char]++ : (output[char] = 1);
    // }
    if(isAlphaNumeric(char)){
        char=char.toLowerCase()
        output[char] > 0 ? output[char]++ : (output[char] = 1);
    }
  }
  return output;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
const output = optimizedCharCount("hipoi my name is && ^% shiv!!!!!");
console.log(output);
