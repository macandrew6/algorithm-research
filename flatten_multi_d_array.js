

Array.prototype.flat = function() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result = result.concat(this[i].flat());
    } else {
      result.push(this[i]);
    }
  }

  return result;
};

let arr1 = [1, 2, 3, [4, 5, [6, 7]]];
console.log(arr1.flat());