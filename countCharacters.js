/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character 
can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 
5 + 5 = 10.
 

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
*/

function countCharacters(words, chars) {
  // set up a res variable
  let res = 0;
  // iterate through the words array
  words.forEach(word => {
    // init Match flag default true
    let isMatch = true;
    // init tempChars
    let tempChars = chars;
    // iterate through the word array
    for (let i = 0; i < word.length; i++) {
      // init letter variable
      let letter = word[i];
      // index = init temp character index of current letter
      let charIndex = tempChars.indexOf(letter) ;
      // if (flag > -1)
      if (charIndex > -1) {
        tempChars = tempChars.slice(0, charIndex) + 
        tempChars.slice(charIndex + 1);
        console.log(tempChars);
      } else {
        isMatch = false;
        break;
      }
      // match flag is true
    }
    if (isMatch) {
      // res += word.length
      res += word.length;
    }
  });
  return res;
  // return res
}

let words = ["hello", "world", "leetcode"], chars = "welldonehoneyr";

console.log(countCharacters(words, chars));