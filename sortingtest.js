function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let currentMin = arr[i];
    let currentMinIdx = i;

    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < currentMin) {
        currentMin = arr[j];
        currentMinIdx = j;
      }
    }

    if(currentMinIdx !== i) {
      arr[currentMinIdx] = arr[i];
      arr[i] = currentMin;
    }
  }
  return arr;
}

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    current = arr[i];
    let j = i - 1;

    while(j > -1 && arr[j] > current) {
      arr[j+1] = arr[j];
      j--;
    }

    arr[j+1] = current;
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];

  while(left.length && right.length) {
    if(left[0] > right[0]) {
      merged.push(right.shift())
    } else {
      merged.push(left.shift())
    }
  }

  return merged.concat(left.concat(right));
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length < 1) return;

  let index = partition(arr, left, right);
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }

  if(right > index) {
    quickSort(arr, index, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2);
  let pivot = arr[middle];

  while(left <= right) {
    while(arr[left] < pivot){
      left++;
    }

    while(arr[right] > pivot){
      right--;
    }

    if(left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}


module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort
}