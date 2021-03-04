// const flatten = function(array) {
//   let flatArr = [];
//   for (let element of array) {
//     if (Array.isArray(element)) {
//       flatArr = flatArr.concat(flatten(element));
//    } else {
//       flatArr.push(element);
//     }
//   }
//   return flatArr;
// };

//or

flatten = (array) => {
  return array.flat(Infinity)
}

//or

// flatten = (array) => {
//   arrays = array.reduce((a, b) => a.concat(b), []);
// }



// how would i be able to use this?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays

console.log(flatten([1, 2, [[[3], 4]], 5, [[[[[[[[[[6]]]]]]]]]]]))

