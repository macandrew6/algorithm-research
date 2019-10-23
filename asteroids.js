/*
[-1, 2, -1] => [-1, 2]
[4, -3] => [4]
[1, 2, -3] => [-3]
*/

/*
pseudo code:

loop the array from left to right, keep valid elements in the stack
if the stack is empty push the element into the stack
4 cases with top of stack and curr element:
  * top of stack positive and curr element positive > push to stack
  * top of stack negative and curr element negative > push to stack
  * top of stack negative and curr element positive > push to stack
  * top of stack positive and curr element negative => most tricky
    * case 4 has 3 small cases:
      * if |curr| === top of stack => destroy both, pop top of stack and move on
                                      the next element
      * if |curr| < top of stack   => destroy curr, skip current and move to the
                                      next element   
      * if |curr| > top of stack   => destroy top of stack, and still need to 
                                      compare the curr with the next top of the 
                                      stack, (do not increase the array index)

*/
let asteroidCollision = function(asteroids) {
  // new implementation
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let top = stack[stack.length - 1];
    let curr = asteroids[i];
    if (!stack.length) stack.push(asteroids[i]);
    if (Math.sign(top) === 1 && Math.sign(curr) === 1) {
      stack.push(curr);
    } else if (Math.sign(top) === -1 && Math.sign(curr) === -1) {
      stack.push(curr);
    } else if (Math.sign(top) === -1 && Math.sign(curr) === 1) {
      stack.push(curr);
    } else {
      if (Math.abs(curr) === top) {
        stack.pop();
        continue;
      } else if (Math.abs(curr) < top) {
        continue;
      } else if (Math.abs(curr) > top) {
        // if |curr| > top of stack   => destroy top of stack, and still need to 
        //                               compare the curr with the next top of the 
        //                               stack, (do not increase the array index)
        
      }
    }
  }
};


let asteroids1 = [-1, 2, -1]; // => [-1, 2]
let asteroids2 = [4, -3]; // => [4]
let asteroids3 = [1, 2, -3]; // => [-3]

console.log(asteroidCollision(asteroids1));
