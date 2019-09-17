/*
[-1, 2, -1] => [-1, 2]
[4, -3] => [4]
[1, 2, -3] => [-3]
*/

var asteroidCollision = function(asteroids) {
  let collided = collision(asteroids);

  if (JSON.stringify(collided) === JSON.stringify(collision(collided))) {
    console.log("finished");
    return collided;
  } else {
    console.log("running");
    return asteroidCollision(collided);
  }
};

let collision = asteroids => {
  if (!asteroids.length) return [];
  let stack = [asteroids[0]];
  for (let i = 1; i < asteroids.length; i++) {
    let top = stack[stack.length - 1];
    let curr = asteroids[i];
    if (Math.sign(top) === Math.sign(curr)) {
      stack.push(curr);
    } else {
      if (Math.abs(top) > Math.abs(curr)) {
        continue;
      } else if (Math.abs(top) < Math.abs(curr)) {
        stack.pop();
        stack.push(curr);
      } else if (Math.abs(top) === Math.abs(curr)) {
        stack.pop();
      }
    }
  }
  return stack;
};

console.log(collision([]));
