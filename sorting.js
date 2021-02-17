function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    
    let currentMin = arr[i];
    let currentMinIndex = i;

    //find the smallest first
    for (let j = i + 1; j < arr.length; j++) {
      if (currentMin > arr[j]) {
        currentMin = arr[j];
        currentMinIndex = j;
      }
    }

    if (currentMinIndex !== i) {
      arr[currentMinIndex] = arr[i];
      arr[i] = currentMin;
    }
  }
  return arr;
}


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; //33
    let j = i - 1; //14

    while(i > -1 && (arr[j] > current) ) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
  return arr;
}

//#region MERGE SORT
// uses recursion
function mergeSort(arr) {
  if(arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle, arr.length));
  console.log('LEFT', left)
  return mergeRecursion(left, right);
}

function mergeRecursion(left, right) {
  let merged = [];
  // console.log('LEFTY LEFT', left);
  while (left.length && right.length) {
    if(left[0] < right[0]) {
      merged.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }
  return merged.concat(left.concat(right));
}
//#endregion MERGE SORT END

function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    let index = partition(arr, left, right);
    console.log('index', index - 1)
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if(index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2);
  let pivot = arr[middle];
    
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
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


// TODO Iterator pattern

function bucketSort(arr) {

}

// TODO Iterator pattern

module.exports = {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  quick_Sort
}