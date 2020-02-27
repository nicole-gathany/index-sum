var twoSum = function(nums, target) {
  let result = [];
  let diffArr = nums.map(x => target - x);

  for (let i = 0; i < diffArr.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (diffArr[i] === nums[j] && i !== j) {
        result.push(i, j);
      }
    }
  }
  result.pop();
  result.pop();

  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
