/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) { return init }
  else {
    let newArr = [];
    let accum = init;
    for (let i = 0; i < nums.length; i++) {
      newArr.push(parseInt(fn(accum, nums[i])));
      accum = parseInt(fn(accum, nums[i]));
    }
    return newArr[newArr.length - 1];
  }
};

// test case
let fnx = function sum(accum, curr) { return accum + curr; }
console.log(reduce([1, 2, 3, 4], fnx, 0)); // 10