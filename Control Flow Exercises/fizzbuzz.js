// Returns Fizz if a number is divisible by 3
// Retuns Buzz if a number is divisible by 5
// Returns FizzBuzz if a number is divisible by both 3 & 5
const output = fizzBuzz(3)
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN; // Not a Number
    
    if ((input % 3 == 0) && (input % 5 == 0)) 
        return 'FizzBuzz';
    
    if (input % 3 == 0)   
        return 'Fizz'
    
    if (input % 5 == 0)
        return 'Buzz';
    
    return input;
}