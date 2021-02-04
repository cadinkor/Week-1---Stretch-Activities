const args2 = process.argv.slice(2);
let string = '';

function pigIt(str){
  str = str.split(' ');
  for(let i = 0;i<str.length;i++){
    if(/[a-zA-Z]/.test(str[i])){
      str[i] = str[i].slice(1) + str[i][0] + 'ay';
    } 

  }
  return str.join(' ');
}
console.log(pigIt('Pig latin is cool'));