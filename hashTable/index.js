class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.dataMap.length;
    }

    return hash; // return the index of hash table where key value pair resides.
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this.hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return { key: this.dataMap[index][i][1] };
        }
      }
    }
    return undefined;
  }
}

let myHash = new HashTable();
myHash.set("name", "shiv");
myHash.set("age", 19);
// myHash.dataMap.forEach((el) => console.log(el));
// console.log(myHash.get("age"));

// Problem item in common between two arrays.

function itemInCommon(arr1, arr2) {
  const obj = {};
  for (let item of arr1) {
    obj[item] = true;
  }
  for (let item of arr2) {
    if (obj[item]) {
      return true;
    }
  }
  return false;
}

// console.log(itemInCommon([1,2,3],[7,1,5]))

function returnDuplicate(arr) {
  let results = new Set();
  let obj = {};
  for (let item of arr) {
    if (obj[item]) {
      results.add(item);
    } else {
      obj[item] = 1;
    }
  }
  return results;
}

// console.log(returnDuplicate([1,2,3,2,2,2,2,1,8,8,8,9,0,0]))

function towSum(nums, target) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let compliment = target - num;
    if (numObj.hasOwnProperty(compliment)) {
      return [numObj[compliment], i];
    }
    numObj[num] = i;
  }
  return []
}


console.log(towSum([1,2,2,6],7))