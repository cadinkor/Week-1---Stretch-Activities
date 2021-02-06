const args2 = process.argv.slice(2);
let string = '';

for (let i = 0; i < args2.length; i++) {
  string += args2[i];
}

console.log(string.trim() + "ay" );

function reverseString(str) {
  let newString = "";
  for (let i = 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString + "ay";
}

console.log(reverseString('elephant'));
