const without = function(source, itemsToRemove) {
  let result = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]);

console.log(result); // Output: ["hello", "world"]

// Make sure the original array was not altered
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
