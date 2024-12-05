/**
 * @param {Object} obj
 * @return {Object}
 */

var compactObject = function (obj) {
  // Base Cases
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);


  let compactedObj = {};
  Object.keys(obj).forEach((key) => {
    let value = compactObject(obj[key]);
    if (Boolean(value)) {
      compactedObj[key] = value;
    }
  });

  return compactedObj;
};