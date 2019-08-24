/*
Output Format:
Print a staircase of size  using # symbols and spaces.

Sample input:
6

Sample output:
     #
    ##
   ###
  ####
 #####
######
*/

function staircase(n) {
     for (let i = 0; i < n; i++) {
          let row = '';
          for (let j = 0; j < n - i - 1; j++) {
               row += ' ';
          }
          console.log(row + '#'.repeat(i + 1));
     }
}

console.log(staircase(6));