// Function that returns an array that excludes a given set of
// numbers from a passed array

const numbers = [1, 2, 3, 4, -1, 1, 3];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);

  return output;
}
