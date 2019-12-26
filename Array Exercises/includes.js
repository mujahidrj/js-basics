// Function to search an array for a given element

const numbers = [1, 2, 3, 4];

console.log(include(numbers, 5));

// Uses a for loop
function include(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement)
      return `Found the ${searchElement} at index ${i}`;
  }
  return `Sorry could not find ${searchElement} in the array`;
}

// Uses a for of loop
function includeAlternate(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }
  return false;
}
