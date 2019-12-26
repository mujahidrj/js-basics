// To Duplicate Line: Use Alt Shift DownArrow

const numbers = [3, 4];

// Adding to beginning
numbers.unshift(1, 2);

// Adding to middle
numbers.splice(2, 0, "a", "b");

// Adding to end
numbers.push(5, 6);
console.log(numbers);

// Finding Elements for Primitive Types
const numbers1 = [1, 2, 3, 4, 1];
numbers.indexOf(10);
numbers.lastIndexOf(1);
numbers.includes(1);

// Finding Elements for Reference Types
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" }
];

console.log(courses);

// Uses callback function
const course = courses.find(function(course) {
  return course.name === "a";
});

const courseAlternate = courses.findIndex(function(course) {
  return course.name === "b";
});

console.log(course);
console.log(courseAlternate);

// Arrow Functions
// Whenever you want to use a callback function, use arrow function syntax
const courseAlternate2 = courses.find(course => course.name === "b");
console.log(courseAlternate2);

// Removing Elements from Beginning of Array
const first = numbers.shift();
console.log(first);

// Removing Elements from Middle of Array
numbers.splice(2, 1);

// Removing Elements from End of Array
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Emptying array
let num = [1, 2];
let another = num;

// Only works if there are no other references to the array
num = [];

// Second solution
numbers.length = 0;

// Third Solution
numbers.splice(0, numbers.length);

// Combining and Slicing Arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combined = firstArray.concat(secondArray);
const slided = combined.slice(2, 4);
/* Primitive types in arrays are copied by value, Reference Types by Reference */

// Spread Operator in ES6
const combinedAlternate = [...firstArray, "a", ...secondArray, "b"];
const copy = [...combined];

// Iterating through array
const numberArray = [1, 2, 3, 4, 5, 6, 7];
numberArray.forEach((number, index) => console.log(index, number));

// Joining Arrays
const newNumArray = [1, 2, 3];
const joined = newNumArray.join(", ");
console.log(joined);
// .join goes hand in hand with .split for strings

// Sorting Arrays
const unsorted = [2, 3, 1];
unsorted.sort();
unsorted.reverse();

const unsortedCourses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JS" }
];

unsortedCourses.sort(function(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(unsortedCourses);

// Testing Elements of an array
const numberArr = [1, 2, 3];
const allPositive = numbers.every(function(value) {
  return value >= 0;
});

// Filtering an Array
const manyNumbers = [1, -1, 2, 3];

// Gets number where nmber >= 0
const filtered = manyNumbers.filter(number => number >= 0);

// Mapping an Array
// Can map each element in an array to something else
const items = filtered.map(number => "<li>" + number + "</li>");
console.log(items);

const html = "<ul>" + items.join("") + "</ul>";

// Reducing an Array
const elementsToBeSummed = [2, 25, 51];

// let sum = 0;
// for (let n of elementsToBeSummed)
// sum += n;

const sum = elementsToBeSummed.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
