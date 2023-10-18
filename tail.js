const head = function(arr) {
  return arr[0];
};

const tail = function(arr) {
  return arr.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([]), undefined);