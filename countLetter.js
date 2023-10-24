const countLetters = function(sentence) {
  const letterCounts = {};

  for (const char of sentence) {
    if (char !== ' ') { // Exclude spaces from counting
      if (letterCounts[char]) {
        letterCounts[char] += 1;
      } else {
        letterCounts[char] = 1;
      }
    }
  }

  return letterCounts;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = countLetters('LHL');
console.log(result); // Output: { L: 2, H: 1 }
