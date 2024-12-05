/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  const myStack = [...arr.map(elem => [elem, n])];
  let result = [];

  while (myStack.length > 0) {
    const [elem, n] = myStack.pop();
    if (Array.isArray(elem) && n > 0) {
      myStack.push(...elem.map(subElem => [subElem, n - 1]))
    } else {
      result.push(elem);
    }
  }

  return result.reverse();
};