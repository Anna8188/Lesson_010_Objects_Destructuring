"use strict";
/*
 Task 11. Create a one-liner function
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties. 
The string should have the following format: X has a population of Y and is situated in Z (where X is the city
name, Y is the population and Z is the continent the city is situated in).
*/
function giveInformation(obj) {
  const { X, Y, Z } = obj;
  return `${X} has a population ${Y} and situated in ${Z}`;
}
const obj = { name: "Yerevan", population: 1068300, continent: "Asia" };

//console.log(giveInformation(obj));
