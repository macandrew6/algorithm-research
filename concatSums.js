function concatenateSums(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += parseInt("" + a[i] + a[i]);
    for (let j = i + 1; j < a.length; j++) {
      result += parseInt("" + a[i] + a[j]);
      result += parseInt("" + a[j] + a[i]);
    }
  }
  return result;
}
console.log(concatenateSums([10, 2]));
console.log(concatenateSums([1, 10, 100, 1000, 100000, 1000000]));

function concatenateSums2(a) {
  let result = 0, digits = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * a.length;
    digits += 10 ** String(a[i]).length;
  }
  for (let j = 0; j < a.length; j++) {
    result += a[j] * digits;
  }
  return result;
}

function concatenateSums3(a) {
  let result = 0, digits = 0;
  for (let num of a) {
    result += num * a.length;
    digits += 10 ** String(num).length;
  }
  for (let num of a) {
    result += num * digits;
  }
  return result;
}