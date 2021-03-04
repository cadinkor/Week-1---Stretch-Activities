const args2 = process.argv.slice(2);
console.log(args2)
let string = '';

for (let i = 0; i < args2.length; i++) {
  for (let j = (args2[i].length - 1); j >= 0; j--) {
    string += args2[i][j];
  }
}

// console.log(string);

// const args2 = process.argv.slice(2);
// let string = '';

//   for (let j = -1; j >= 0; j--) {
//     string += args2[j];
//   }


// console.log(string);

// reverse = (string) => {
//   return 
// }

// Why does this sort of solution not work here?
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript 
