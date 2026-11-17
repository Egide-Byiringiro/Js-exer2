 function arrayStats(array) {
  let sum = array.reduce((acc, curr) => acc + curr);
  let average = sum / array.length;
  let min = Math.min(...array);
  let max = Math.max(...array);

  return { sum, average, min, max };
}

console.log(arrayStats([1, 3, 4, 6]));