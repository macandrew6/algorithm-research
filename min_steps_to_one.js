function minStepsToOne(n) {
  function traverse(current) {
    if (current === 1) {
      return 0;
    }

    //subtract 1
    let option = traverse(current - 1);

    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }
    
    return option + 1;
  }

  return traverse(n);
}

// 1. create cache
// 2. check cache
// 3. write to cache

function minStepsToOneMemo(n) {
  let cache = {};
  function traverse(current) {
    if (current in cache) {
      return cache[current];
    }
    
    if (current === 1) {
      return 0;
    }

    //subtract 1
    let option = traverse(current - 1);

    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }
    cache[current] = option + 1;
    return option + 1;
  }

  return traverse(n);
}

function minStepsToOneTab(n) {
  let result = new Array(n + 1);
  result[1] = 0;

  for (let i = 2; i < result.length; i++) {
    // subtract 1
    let option = result[i - 1];

    // divide by 3
    if (i % 3 === 0) {
      let divide3 = result[i / 3];
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (i % 2 === 0) {
      let divide2 = result[i / 2];
      option = Math.min(option, divide2);
    }

    result[i] = option + 1;
  }
  return result[n];
}

console.time("RECURSION: ");
console.log(minStepsToOne(500));
console.timeEnd("RECURSION: ");




console.time("MEMOIZATION: ");
console.log(minStepsToOneMemo(500));
console.timeEnd("MEMOIZATION: ");




console.time("TABULATION: ");
console.log(minStepsToOneTab(500));
console.timeEnd("TABULATION: ");