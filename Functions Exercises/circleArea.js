// Function to calculate the area of a circle

const circle = {
  radius: 2,
  get area() {
    return this.radius * this.radius * Math.PI;
  }
};

console.log(circle.area);
