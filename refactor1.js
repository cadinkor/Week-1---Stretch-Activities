//Joining
const joinList = function(arr) {
  let joinedNames = '';
  
  for (let item of arr) {
    if (arr.indexOf(item) === 0) {
      joinedNames += `${item}`;
    // } else if (arr.indexOf(item) === arr.length-1) {
    //   joinedNames += ` and ${item}`;
    } else {
      joinedNames += `, ${item}`;
    }
  }
  return joinedNames;
}

// from 
// const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

// to 
// gists, types, operators, iteration, problem solving.
