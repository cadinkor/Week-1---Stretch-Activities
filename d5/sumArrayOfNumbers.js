function sum(arr) {
  return arr.flat(Infinity).reduce((a,b) => a+b, 0)
}

console.log(sum([1, 2, 3, 4, 5]))
console.log(sum([[1, 2, [[3], 4]], 5, []]	))
console.log(sum([[[[[[[[[[[[[1]]]]]]]]]]]]]))


//to solve if there are things outside of numbers in the array:
// function sum(arr) {

//   return arr.flat(Infinity).filter(item=>{
//       if(typeof item === "number"){
//           return item
//       }
//   }).reduce((a,b)=>a+b,0);

// }