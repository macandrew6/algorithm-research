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
  // iterate through the words array
    // init Match flag default true
    // init tempChars
    // iterate through the word array
      // init letter variable
      // index = init temp character index of current letter
      // if (flag > -1)
        // tempChars = tempChars.substring(-1, index) + tempChars.substring(index + 1)
      // else 
        // change Match flag to false
        // break out of for loop
    // match flag is true
      // res += word.length
  // return res
}

let words = ["hello", "world", "leetcode"], chars = "welldonehoneyr";

console.log(countCharacters(words, chars));