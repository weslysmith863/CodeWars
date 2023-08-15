function sumArray(array) {
  // function to be used in reduce method
  let sumNums = (acc, cur) => acc + cur;
  // check if input is an array, and has 2+ elements. Then reduce the array, and subtract the highest and lowest values
  return Array.isArray(array) && array.length > 1
    ? array.reduce(sumNums, 0) - Math.min(...array) - Math.max(...array)
    : 0;
}

// if conditions are not met then just return 0
