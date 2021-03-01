//Exercise 1

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;

  return function() {
    var rollResult = list[i];
    i++;
    return rollResult;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

//Exercise 2

var countdownGenerator = function(x) {
  var timeToBlast = x;
  return function() {
    if (!timeToBlast) {
      timeToBlast--;
      return "Blast Off!";
    }
    if (timeToBlast < 0) {
      timeToBlast--;
      return "Rockets already gone, bub!";
    }
    timeToBlast--;
    return `T-minus ${timeToBlast}...`;
  }
};

var countdown = countdownGenerator(3);

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!