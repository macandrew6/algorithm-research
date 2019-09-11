/*
Given a paragraph and a list of banned words, return the most frequent word that
is not in the list of banned words.  It is guaranteed there is at least one word
that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of 
punctuation.  Words in the paragraph are not case sensitive.  The answer is in 
lowercase.



Example:

Input:
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent 
non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.


Note:

1 <= paragraph.length <= 1000.
0 <= banned.length <= 100.
1 <= banned[i].length <= 10.
The answer is unique, and written in lowercase (even if its occurrences in 
paragraph may have uppercase symbols, and even if it is a proper noun.)
paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.
*/

/*
currently fails 

input:
"Bob. hIt, baLl"
["bob", "hit"]

output:
ball

but instead gets: ""
*/

// find optimal solution
var mostCommonWord = function (paragraph, banned) {
  debugger;
  let mostCommon = '';
  let mostCommonCount = 0;
  let words = paragraph.split(/[ !?',;.]/).map(word => word.toLowerCase());
  let wordCounts = {};
  for (let i = 0; i < words.length; i++) {
    !wordCounts[words[i]] ? wordCounts[words[i]] = 1 : wordCounts[words[i]]++;
  }

  let noBanns = Object.keys(wordCounts).filter(word => !banned.includes(word) && word.length > 0);

  noBanns.forEach(word => {
    if (wordCounts[word] > mostCommonCount) {
      mostCommonCount = wordCounts[word];
      mostCommon = word;
    }
  });
  return mostCommon;
};

console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));