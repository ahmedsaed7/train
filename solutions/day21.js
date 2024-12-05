/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let newArr = [];
  let index = 0;
  while (index < arr.length) {
    newArr.push(arr.slice(index, index + size));
    index += size;
  }
  return newArr;
};