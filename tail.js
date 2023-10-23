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

// TEST CASES
assertEqual(tail([5,6,7]).toString(), [6, 7].toString());
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail(["a", "b", "c"]).toString(), ["b", "c"].toString());
assertEqual(tail([]).toString(), [].toString());