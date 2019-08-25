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

function newYearGame() {
  
}