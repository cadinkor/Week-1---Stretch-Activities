const flatten = function(array) {
  let flatArr = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(flatten(element));
   } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};
console.log(flatten([1, 2, [[3], 4], 5, [6]]))
module.exports = flatten;