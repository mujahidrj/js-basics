// This program creates an Address Object and 
// displays its content

let address = {
  street: '123 New Found Love', 
  city: 'Plymouth', 
  zipCode: 45678
};

function showAddress(address) {
  for (key in address)
  console.log(key, address[key]);
}

showAddress(address);