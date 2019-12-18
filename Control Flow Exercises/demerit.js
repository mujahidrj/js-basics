// Function to determine how many points a person gets on his 
// license for speeding

// Speed Limit = 70mph
// 5-> 1 point
// Math.floor(1.3)
// 12 points = suspended;

console.log(Math.floor(71));
console.log(checkSpeed(180));

function checkSpeed(speed) {
    const speedLimit = 70;
    const milesPerPoint = 5;
    let points = 0;

    if (speed <= speedLimit)
        return 'Ok';
    points += Math.floor((speed - speedLimit) / milesPerPoint);

    if (points >= 12) 
        return 'License Suspended';
    
    return 'Number of Points: ' + points;
}