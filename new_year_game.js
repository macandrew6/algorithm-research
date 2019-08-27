/*
It's New Year's Day, and Balsa and Koca are stuck inside watching the rain. They
decide to invent a game, the rules for which are described below.

Given array a containing n integers, they take turns making a single move. Balsa
always moves first, and borth players are moving optimally (playing to win and
making no mistakes).

During each move, the current player chooses one element from a, adds it to
their own score, and deletes the element from a; because the size of a decreases
by 1 after each move, a's size will be 0 after n moves and the game ends (as all
elements were deleted from a). We refer to Balsa's score as Sb and Koca's score
as Sk. Koca wins the game if |Sb - Sk| is divisible by 3; otherwise Balsa wins.

Given a, determine the winner.

Output Format:

For each test case, print the winner's name on a single line; if Balsa wins 
print Balsa, otherwise print Koca.

Sample Input:

2
3
7 6 18
1
3

Sample Output:

Balsa
Koca
*/

function newYearGame(arr) {
  // grab hold of a element in the array
  // save the value to a placeholder
  // remove that value from the array
  // remember to sort the array from largest values to smallest
  // see if the value sum at the end of turns is divisible by 3 evenly
  // determine winner
  let BalsaScore = 0;
  let KocaScore = 0;

  let optimizedArr = arr.sort((a, b) => b - a);
  console.log(optimizedArr);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      BalsaScore += arr[i];
    } else {
      KocaScore += arr[i];
    }
  }

  if (Math.abs(BalsaScore - KocaScore) % 3 === 0) {
    console.log('Koca');
  } else {
    console.log('Balsa');
  }
}

let arr = [1, 2, 2, 1, 3, 3, 3, 2, 3, 2];

console.log(newYearGame(arr));
