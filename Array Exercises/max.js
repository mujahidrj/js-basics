const numbers = [1, 2, 1, 3, 4, -2];

const count = getMax(numbers, 1);

console.log(count);

function getMax(array, searchElement) {
  return array.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  });
}
