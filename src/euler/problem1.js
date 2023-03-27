var multiples_3_5 = function () {
  var nums = new Set();

  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
      nums.add(i);
    }
    if (i % 5 == 0) {
      nums.add(i);
    }
  }

  const numsToArray = Array.from(nums);

  const result = numsToArray.reduce(
    (accumulator, currentValue, index) => accumulator + currentValue
  );

  return result;
};

console.log(multiples_3_5());
