// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
function palindrome(str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  // Step 2. Create a variable that hosts the original string
  // Step 3. Create a variable that hosts a reverse of the original
  // Step 4. Compare the two
  let changes = /[\W_]/g; 
  var lowRegStr = str.toLowerCase().replace(changes, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

//  https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing palindrome(\"${word}\"):`);
  const actual = palindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
}


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertPalindrome('Kayak', true);
assertPalindrome('a santa at NASA', true);
