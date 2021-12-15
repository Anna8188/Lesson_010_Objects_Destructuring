"use strict";
// Task 9.
/* Upvotes and Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
*/
function getVoteCount(obj) {
  const { upvoites, downvoites } = obj;
  if (downvoites - upvoites < 0) {
    return `The number of upvoites, being ${upvoites}, exceeds `;
  }
  if (downvoites - upvoites > 0) {
    return `The number of downvoites, being ${downvoites}, exceeds `;
  }
  if (downvoites - upvoites === 0) {
    return `The numbers of downvoites and upvoites are equal ${downvoites}:${upvoites}`;
  }
}
//console.log(getVoteCount({ upvoites: 13, downvoites: 0 }));
//console.log(getVoteCount({ upvoites: 2, downvoites: 33 }));
//console.log(getVoteCount({ upvoites: 10, downvoites: 10 }));
