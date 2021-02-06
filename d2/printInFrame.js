//declaring the variables and the framework of the page
const printInFrame = function(list) {
  list = list.split(' ');
  const longest = longestStr(list).length;
  //this controls the length of the border
  const border = repeat('*', longest + 3);

  //controlling the dots around the border
  console.log(border);
  for (const word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length + 1)}*`);
  }
  console.log(border);
};

//
const repeat = function(str, times) {
  let result = str;

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

//
const longestStr = function(list) {
  let longest = list[0];

  for (const str of list) {
    longest = str;
  }

  return longest;
};



function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var border = repeat('*', longest+3);

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longest = list[0];

  for (var i = 0;i < list.length;i++) {

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


