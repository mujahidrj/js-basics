// Initialize an address with both a factory function
// and a constructor

let address = {
  street: '123 New Found Love', 
  city: 'Plymouth', 
  zipCode: 45678
};

// Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// Constructor
let factoryAddress = createAddress('1234 America Drive', 'San Fran', 78416);
let constructedAddress = new Address('1234 America Drive', 'San Fran', 78416);
