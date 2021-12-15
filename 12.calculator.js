"use strict";
//Task 12. Create a function that takes infinite count of elements, operator and prints their sum. If there's no operator, then default should be +.

function printSum() {
  let arr = [...arguments];
  if (arr[0] === "-") {
    let result = arr[1];
    for (let i = 2; i < arr.length; i++) {
      result = result - arr[i];
    }
    return result;
  } else if (arr[0] === "*") {
    let result = arr[1];
    for (let i = 2; i < arr.length; i++) {
      result = result * arr[i];
    }
    return result;
  } else if (arr[0] === "/") {
    let result = arr[1];
    for (let i = 2; i < arr.length; i++) {
      result = result / arr[i];
    }
    return result;
  } else if (arr[0] === "**") {
    let result = arr[1];
    for (let i = 2; i < arr.length; i++) {
      result = result ** arr[i];
    }
    return result;
  } else if (arr[0] === "+") {
    let result = arr[1];
    for (let i = 2; i < arr.length; i++) {
      result = result + arr[i];
    }
    return result;
  } else {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = result + arr[i];
    }
    return result;
  }
}
//console.log(printSum("*", 1, 2, 3));
//console.log(printSum(1, 2, 3, 4, 5));
//console.log(printSum("-", 1, 2, 3, 6, 7));
//console.log(printSum("**", 2, 3, 2));
