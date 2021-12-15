# Lesson 10 Objects Destructuring Assignment

> > [<img src="https://blog.alexdevero.com/wp-content/uploads/2020/08/03-08-20-how-destructuring-assignment-in-javascript-works-blog.jpg" width="300" height="200" />](https://blog.alexdevero.com/wp-content/uploads/2020/08/03-08-20-how-destructuring-assignment-in-javascript-works-blog.jpg)

> ## Objects

- Task

```
let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;
const { name, country, job } = person;
console.log(name);
```

[SEE Solution](./1.checkTask.js)

- Get name, country and jod using destructuring

```
let person = { name: "Sarah", country: "Armenia", job: "Developer" };

console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
```

[SEE Solution](./2.getObjValue.js)

- Concatenate the two arrays

```
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

[SEE Solution](./3.concatArr.js)

- How to take arguments in sum function?

```
function sum() {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}

sum(1, 2); // prints 3
sum(1, 2, 3); // prints
```

[SEE Solution](./4.sum.js)

- How to pass arguments in sum function?

```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum()); // prints 6

```

[SEE Solution](./5.sumArguments.js)

- Swapping Values using the Destructuring Assignment

```
let a = 3;
let b = 6;

console.log(a); //6
console.log(b); //3
```

[SEE Solution](./6.swapping.js)

- Get name, country and job using destructuring

```
let person = { name: "Sarah", country: "Armenia", job: "Developer" };

console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
```

[SEE Solution](./7.getValues.js)

- Task

```
let person = { name: "Sarah", country: "Nigeria", job: "Developer" };

let name, country, job;
const { name, country, job } = person;

console.log(name);
```

[SEE Solution](./8.checkTask.js)

- Upvotes and Downvotes
  Given an object containing counts of both upvotes and downvotes, return what vote count should be
  displayed. This is calculated by subtracting the number of downvotes from upvotes.

```
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

[SEE Solution](./9.UpDownVotes.js)

- 50, 30, 20
  The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
  needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
  Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
  object that shows how much a person needs to spend on needs, wants, and savings.

```
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":2690 }
```

[SEE Solution](./10.percent.js)

- Create a one-liner function

Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties:

```
name
population
continent
```

The string should have the following format: X has a population of Y and is situated in Z (where X is the city
name, Y is the population and Z is the continent the city is situated in).

```
cityFacts({name: "Paris", population: "2,140,526",continent: "Europe"}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({ name: "Tokyo", population: "13,929,286", continent: "Asia"}); // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
```

[SEE Solution](./11.oneLine.js)

- Create a function that takes infinite count of elements, operator and prints their sum. If there's no
  operator, then default should be +.

```
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64
```

[SEE Solution](./12.calculator.js)

- Write object.keys, object.values and object.entries methods using for..in

[SEE Solution](./13.forIn.js)
