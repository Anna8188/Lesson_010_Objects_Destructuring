"use strict";
// Task 4.
function sum() {
  const args = [...arguments];
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
//sum(1, 2); // prints 3
//sum(1, 2, 3); // prints 6
