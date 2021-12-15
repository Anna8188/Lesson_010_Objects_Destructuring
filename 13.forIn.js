"use strict";
//Task 13. Write object.keys, object.values and object.entries methods using for..in.

let obj = { a: 1, b: 2, c: 3 };

for (let keys in obj) {
  console.log(keys);
}
for (let keys in obj) {
  console.log(obj[keys]);
}

for (let keys in obj) {
  console.log([keys, obj[keys]]);
}
