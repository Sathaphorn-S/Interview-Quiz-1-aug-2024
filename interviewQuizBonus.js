function secondMax(inputs) {
  if (inputs.length < 2) {
    throw new Error("Input must contain at least two value");
  }
  let maxValue = -Infinity;
  let secondMaxValue = -Infinity;
  let maxCount = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] > maxValue) {
      secondMaxValue = maxValue;
      maxValue = inputs[i];
      maxCount = 1;
    } else if (inputs[i] === maxValue) {
      maxCount++;
    } else if (inputs[i] > secondMaxValue) {
      secondMaxValue = inputs[i];
    }
  }
  if (maxCount > 1) {
    return maxValue;
  }
  if (secondMaxValue === -Infinity) {
    throw new Error("No second max value");
  }
  return secondMaxValue;
}
console.log(secondMax([-1, 4, 30, 2, -4]));
console.log(secondMax([3, 4, 5, 6, 7]));
console.log(secondMax([3, 4, 5, 6, 7, 7]));
