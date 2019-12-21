let address1 = new Address('a','b','c');
let address2 = new Address('aa','b','c');

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// Goes through 2 objects and returns 1 if they are equal, 0 otherwise
function areEqual(address1, address2) {
  for(let key in address1)
    if(address1[key] !== address2[key])
      return 0;

  return 1;
}

console.log(areEqual(address1, address2));