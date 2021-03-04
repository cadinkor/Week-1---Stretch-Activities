const args2 = process.argv.slice(2);
console.log(args2)
let string = '';

for (let i = 0; i < args2.length; i++) {
  for (let j = (args2[i].length-1); j >= 0; j--){
    string += args2[i][j];
  }
    string += 'ay '
}

console.log(string);
//currently the problem is that this is not printing all the words nor is it returning the spaces

// function reverseString(str) {
//   let newString = "";
//   for (let i = 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString + "ay";
// }

// console.log(reverseString('elephant'));

// for (let i = 0; i < args2.length; i++) {
//   for (let j = (args2[i].length - 1); j >= 0; j--) {
