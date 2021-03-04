function printInFrame(list) {
  list = list.split(' ');
  let longest = longestStr(list).length;
  let border = repeat('*', longest+3);

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  let result = str;

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  let longest = list[0];

  for (let i = 0;i < list.length;i++) {

    if (longest.length < list[i].length){
      longest = list[i];
    }

  }

  return longest;
}


// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
printInFrame('Here we goooooooooooooooooooooooooooooooooooo')


