// Factory Function
function createCircle(radius, location) {
  return {
    radius, // equal to radius = radius
    location,
    draw() { // same as draw: function () {
    console.log('draw');
    }
  };
}

const circle1 = createCircle(1, 5);
// console.log(circle1); 

// Constructor Functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new Circle(5);
console.log(circle);

// Every object has an internal constructor

// Dynamic Nature
// Even though circle is constant, we can modify 
// it's contents just not reassign it
circle.color = 'blue';
circle.draw = function() {};
circle.radius = 3;
delete circle.draw;
console.log(circle);

// Every function is an object

// Reference Types
let x = {value: 10};
let y = x;

x.value = 20;
// Primitives are copied by value
// Objects are copied by reference

function increase(x) {
  x.value++;
}
increase(x)

// Objects are not iterables

// Object.keys() converts all the keys of an object to an array
// Object.entries() gives us keys and values
// To see if something exists in an object you can say:
  if('color' in circle) console.log('yes');

// Cloning an object
const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

const cloned = {}; // empty object

for (let key in circle) 
  cloned[key] = circle[key];

const cloned1 = Object.assign({}, circle);
const cloned2 = { ...circle }; 
