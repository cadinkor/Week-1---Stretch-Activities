// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
function palindrome(str) {
  let change = /[^A-Za-z0-9]/g;
  console.log(change)
  str = str.toLowerCase().replace(change, '');
  let len = str.length;

  for (let i = 0; i < len/2; i++) {
    if (str.length <= 1){
      return false;
    }
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
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
assertPalindrome('p', false);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertPalindrome('Kayak', true);
assertPalindrome('a santa at NASA', true);
