const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr[0];
};




// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([]), undefined);