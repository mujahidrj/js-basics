// This function constructs an array and populates it with the given range

const numbers = arrayFromRange(-10, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
