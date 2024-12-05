class TimeLimitedCache {
  cacheObj = new Map();
  constructor() {
  }
  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const isExist = this.cacheObj.get(key);
    if (isExist) {
      clearTimeout(isExist.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.cacheObj.delete(key);
    }, duration);

    this.cacheObj.set(key, { value, timeoutId });

    return !!isExist;
  }
  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    if (this.cacheObj.has(key)) {
      return this.cacheObj.get(key).value;
    } else {
      return -1;
    }
  }
  /**
   * @return {number} count of non-expired keys
   */
  count() {
    return this.cacheObj.size;
  }
}




/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */