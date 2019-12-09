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