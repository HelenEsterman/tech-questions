// function asLi(item) {
//   return $("<li>").text(item);
// }

// function showItem(item) {
//   $("ul").append(asLi(item));
// }

//define the function, 'array' and 'sum' as parameters
function findSumPair(array, sum) {
  // indicator to check if pair is found
  let pairFound = false;
  // initialize empty object to track checked numbers
  let numbersChecked = {};
  // iterates each item in array
  for (let index = 0; index < array.length; index++) {
    // stores difference between sum and current array index item in variable
    let difference = sum - array[index];
    // checks if the difference is already in the 'numbersChecked' object
    if (numbersChecked[difference] === undefined) {
      // if the difference is not yet recorded, store the array element and its index as key value pair
      numbersChecked[array[index]] = index;
    } else {
      // if pair is found (meaning the difference is a number in 'numbersChecked' obj), display pair of found numbers in console log
      console.log(array[index], difference);
      // sets pairFound indicator to true
      pairFound = true;
      // exists for loop after first pair is found
      // *to find multiple pairs, remove return statement
      return;
    }
  }
  // this ensures that "no such pair exists" only shows up once if a pair is not found
  if (pairFound === false) {
    console.log("no such pair exists");
  }
}

//define the array
let array = [5, 7, 30, 3, 9, 1];
//define target sum
let sum = 12;

// pass array and sum as arguments
findSumPair(array, sum);

// document.addEventListener("DOMContentLoaded", function () {
//   findNumbers();
// });
