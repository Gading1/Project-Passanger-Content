let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from myPoints variable

function add3Points() {
  myPoints += 1;
}

function remove1Point() {
  myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
remove1Point();
// call the functions to that the line below logs out 10
console.log(myPoints);
