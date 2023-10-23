const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`🙂🙂🙂 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😭😭😭 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }

  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

// Test cases
module.exports = eqArrays;
module.exports = assertArraysEqual;
module.exports = middle; s