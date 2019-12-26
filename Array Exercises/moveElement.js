// Function that takes an array and moves an element from one index to another
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 0);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position < 0 || position >= array.length) {
    console.error("Can't go out of bounds");
    return;
  }

  const output = [...array];
  const num = output.splice(index, 1)[0];
  output.splice(index + offset, 0, num);
  return output;
}
