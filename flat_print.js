
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

const flatPrint2 = (arr) => {
  let flag = true;
  let counter1 = 0;
  let counter2 = 0;

  while (flag) {
    if (arr[counter1].length !== 0) {
      console.log(arr[counter1].shift());
      counter2 = 0;
    } else if (arr[counter1].length === 0) {
      counter2++;
    }
    counter1++;
    if (counter1 === arr.length) {
      counter1 = 0;
    }
    if (counter2 === arr.length) {
      flag = false;
    }
  }
}

const arr = [
  [1, 2, 3, 4],
  ['a', 'b', 'c', 'd', 'e'],
  [5, 6, 7],
  ['f', 'g', 'h', 'i', 'j', 'k'],
  [8, 9, 10, 11, 12]
];

console.log(flatPrint(arr));