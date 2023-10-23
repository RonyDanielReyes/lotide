const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([5,6,7]).toString(), [6, 7].toString());
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail(["a", "b", "c"]).toString(), ["b", "c"].toString());
 