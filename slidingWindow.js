function slidingWindow(arr, k) {
  let max = 0;
  let windowSum = 0;

  for(let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  for(let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k];

    max = Math.max(max, windowSum);
  }

  return max;
}

function subMaxLength (arr = [3, 1, 2, 1], k) {
  let sum = 0;
  let count = 0;
  let maxCount = 0;

  for(let i = 0; i < arr.length; i++) {
    if((sum + arr[i]) <= k) {
      sum += arr[i];
      count++;
    } else if(sum != 0) {
      sum = sum - arr[i - count] + arr[i];
      if(sum <= k) {
        
      }
    }

    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
}

module.exports = {slidingWindow, subMaxLength};