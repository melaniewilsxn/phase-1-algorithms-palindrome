function isPalindrome(word) {
  // Write your algorithm here
  let palindrome = true
  for(i=0; i<word.length; i++){
    if(word.charAt(i) === word.charAt(word.length-(i+1))){
      palindrome = true;
    } else {
      palindrome = false
    }
   } return palindrome
}

/* 
  iterate over each letter of the word, comparing first and last, second and second to last, etc.
  
  if palindrome, return true; if not, return false
*/

/*
  isPalindrome will except a string and return true if palindrome or false if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
