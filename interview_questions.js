// find the maximum value of arr[j] - arr[i] for all i, j where 0 <= i < j < n and arr[i] < arr[j]
// const maxDiff = arr => {
//   let result = 0;
//   for (let i = 0 ; i < arr.length -1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const diff = arr[j] - arr[i];
//       if (diff > 0 && diff > result) {
//         result = diff;
//       }
//     }
//   }
//   return result || -1;
// };
// console.log(maxDiff([1,2,6,4])); // => 5 
// console.log(maxDiff([4,3,2,1])); // => -1
// console.log(maxDiff([1,1,1,1])); // => -1
// "[{(({)})}]" => false
//  "{z}[x]" => true
//  "{z}[]x" => true
//  "[" => false
//  "][" => false
// "(((())))" => true;
// "[{}" => false;
// "[{{]" => false;
// const validBrackets = str => {
//   const stack = [];
//   const brackets = {
//     "{": "}",
//     "[": "]",
//     "(": ")"
//   };
//   for(let char of str) {
//     if ("{[(".includes(char)) {
//       stack.push(char);
//     } else if ("}])".includes(char)) {
//       if (brackets[stack.pop()] !== char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };
//         puzzle
//         /\
//   move 1  move 2
//   /\
// move 3   move 4   move 5 move 6  
// levelcount = 4
// level 2
// stack = [move3, move4, move5, move6]
// curr = move2
// if no valid moves return -1
const slidingPuzzle = puzzle => {
  const sol =  findSolution(puzzle);
  if (isSolved(flatten(puzzle),sol)) { return 0; }
  const queue = [puzzle];
  const seen = {};
  const dirs = [[1,0],[0,1],[-1,0],[0,-1]];
  let numMoves = 0;
  let levelCount = 1;
  while (queue.length) {
    const puzCurrent = queue.shift();
    seen[serialize(flatten(puzCurrent))] = true;
    const posZero = findPosZero(puzCurrent);
    for(let dir of dirs) {
      const puzCopy = dupPuzzle(puzCurrent);
      const x = posZero[0] - dir[0], y = posZero[1] - dir[1];
      if (puzCopy[x] && puzCopy[x][y]) {
        puzCopy[posZero[0]][posZero[1]] = puzCopy[x][y];
        puzCopy[x][y] = 0;
        if (!seen[serialize(flatten(puzCopy))]) {
          if (isSolved(flatten(puzCopy), sol)) {
            return numMoves + 1;
          }  
          queue.push(puzCopy);
        }
      }
    }
    levelCount--;
    if (!levelCount) {
      numMoves++;
      levelCount = queue.length;
    }
  }
  return -1;
};
const findPosZero = puzzle => {
  for(let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[0].length; j++) {
      if (!puzzle[i][j]) {
        return [i,j];
      }
    } 
  }
};
const dupPuzzle = puzzle => {
  return puzzle.map(row => {
    return row.slice();
  });
};
const isSolved = (puz, sol) => {
  return serialize(puz) === serialize(sol);
};
const findSolution = puzzle => {
  return flatten(puzzle).sort();
};
const serialize = puzzle => {
  return puzzle.join("");
};
const flatten = arr => {
  let flattened = [];
  arr.forEach(innerArr => {
    flattened.push(...innerArr);
  });
  return flattened;
};
let puzzle = [
  [2, 1],
  [3, 0]
];
console.log(slidingPuzzle(puzzle));
puzzle = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];
console.log(slidingPuzzle(puzzle));
puzzle = [
  [2, 7, 1],
  [6, 3, 5],
  [0, 4, 8]
];
console.log(slidingPuzzle(puzzle));
puzzle = [
  [3, 2, 5],
  [4, 1, 8],
  [6, 0, 7]
];
console.log(slidingPuzzle(puzzle));