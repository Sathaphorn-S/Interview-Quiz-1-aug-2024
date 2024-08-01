function maxSumOfConsecutiveElements(arr, k) {
  if (arr.length < k) {
    throw new Error("Length must be at lest K");
  }
  let maxSum = -Infinity;
  let curSum = 0;
  for (let i = 0; i < k; i++) {
    curSum += arr[i];
  }
  maxSum = curSum;
  for (let i = k; i < arr.length; i++) {
    curSum = curSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}
console.log(maxSumOfConsecutiveElements([1, 4, -1, 2, 3], 3));
console.log(maxSumOfConsecutiveElements([1, 4, -1, 2, 3], 2));
