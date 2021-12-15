"use strict";
// Task 10.
/*
50, 30, 20
The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
object that shows how much a person needs to spend on needs, wants, and savings.
*/
function fiftyThirtyTwenty(tax) {
  const need = tax * 0.5,
    want = tax * 0.3,
    save = tax * 0.2;
  return { Needs: need, Wants: want, Savings: save };
}
//console.log(fiftyThirtyTwenty(10000));
//console.log(fiftyThirtyTwenty(50000));
//console.log(fiftyThirtyTwenty(13450));
