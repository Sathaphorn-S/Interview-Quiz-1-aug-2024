function max(inputs) {
  if (inputs.length === 0) {
    throw new Error("Input can't be empty");
  }
  let maxValue = inputs[0];
  for (let i = 1; i < inputs.length; i++) {
    if (inputs[i] > maxValue) {
      maxValue = inputs[i];
    }
  }
  return maxValue;
}
console.log(max([-1, 4, 30, 2, -4]));
console.log(max([3, 4, 5, 6, 7]));
