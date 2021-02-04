// const flatten = function(array) {
//   let newArray = []
//   array.forEach(function(element) {
//     if (Array.isArray(element)) {
//       element.forEach(function(element2) {
//         newArray.push(element2);
//       });
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// };

// module.exports = flatten;

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

module.exports = flatten;