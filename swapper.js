


// In this exercise, you will write a function that will swap values between two objects. Your function will receive four parameters:

// key1, a string
// object1, an object
// key2, a string
// object2, an object
// Your function should:

// fetch the value stored in key1 in object1, and then store that value in key2 of object2.
// take the original value stored in key2 of object2, and store that in key1 of object1.
// not need to return anything.

// Declare a function that receives four params

// 
const swapper = function (key1, object1, key2, object2) {
  
  // fetch the value stored in key1 in object1, and then store that value in key2 of object2.
  // Check if both keys exist within their objects:
  if (object1.hasOwnProperty(key1) && object2.hasOwnProperty(key2)) {

    const originalVal1 = object1[key1];
    const originalVal2 = object2[key2];

    object1[key1] = originalVal2;
    object2[key2] = originalVal1;
  }
console.log("Swap!");
console.log("object1: ", object1);
console.log("object2: ", object2);

};


// Test assertions:

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

// Expected output:
/* Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 } */