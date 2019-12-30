// Function Declaration
function walk() {
  console.log("walk");
}
// Function declarations can be called before or after it's created

// Anonymous Function Expression
let run = function() {
  console.log("running");
};
let move = run;
move();
// Function expressions can only be called after declaration

// Hoisting means JavaScript moves all function declarations to the top

// Every function in js has an arguments object that has all the arguments passed
// to a function stored as keys

function sum() {
  let total = 0;
  for (value of arguments) total += value;
  return total;
}

// Doing the same thing with the rest operator
// Rest operator converts a varying amount of arguments and put them all
// in to an array
function sumWithRest(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);

  return total * (1 - discount);
}

console.log(sumWithRest(0.1, 20, 30));

// Default Parameters
// Once you give one parameter a default value, give all the remaining
// parameters default values
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

// Getters and Setters with Error Handling
const person = {
  firstName: "Mujahid",
  lastName: "Jaffer",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not  a string.");
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = "First Last";
} catch (e) {
  console.log(e);
}
