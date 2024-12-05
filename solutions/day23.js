/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  let tempObj = {}

  for (let i = 0; i < this.length; i++) {
    let tempKey = fn(this[i]);
    tempObj[tempKey] ||= [];
    tempObj[tempKey].push(this[i]);
  }
  return tempObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */