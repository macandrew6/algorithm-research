const arr = [
  [1, 2, 3, 4],
  ['a', 'b', 'c', 'd', 'e'],
  [5, 6, 7],
  ['f', 'g', 'h', 'i', 'j', 'k'],
  [8, 9, 10, 11, 12]
];

// [ [,2,3]
//   [] // undefined
//   [8,9]]

// 1, 4, 7
// iterate through the array
// if !subarr.length
// each sub array print and shift off the 0th element


//1, a, 5, f, 8, 2, b, 6, g, 9, 3, c, 7, h, 10, 4, d, i, 11, e, j, 12, k

const flatPrint = (array) => {
  // let emptySubarrays = arr.every(subarr => subarr.length === 0)
  while (!array.every(subarr => subarr.length === 0)) {
    // while not all sub array lengths == 0
    for (let i = 0; i < array.length; i++) {
      let subArr = arr[i];
      if (subArr.length) {
        console.log(subArr[0]);
        subArr.shift();
      }
    }
    // console.log('running')
  }
};

console.log(flatPrint(arr));