/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return (x) => {
    let i = functions.length - 1;
    while(i >= 0 ){
      x = functions[i](x);
      i--;
    }
    return x;
  }
};



/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */