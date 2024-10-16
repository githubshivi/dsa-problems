function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([-2, 45, 0, -9, 11]));

function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// console.log(selectionSort([8,0,5,10,67,1,2]))

function insertionSort(arr) {
  for (let i = 1; i < arr.length+1; i++) {
    let key = arr[i]; // Set the key to the current element

    // Start from the element before i and move backwards while shifting elements
    for (let j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j]; // Shift the element to the right
      arr[j] = key; // Place the key at the correct position
    }
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
