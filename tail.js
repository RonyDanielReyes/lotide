const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  if (input.length >= 1) {
    const arrTail = input.slice(1);
    return arrTail;
  } else {
    return [];
  }
};

module.exports = tail;
module.exports = assertEqual;
// TEST CASES
