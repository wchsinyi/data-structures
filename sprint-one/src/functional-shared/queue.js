var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
    enqueue(val) {
      this.storage[this.end] = val;
      this.end++;
    },
    dequeue() {
      if (this.start < this.end) {
        this.start++;
        return this.storage[this.start - 1];
      }
    },
    size() {
      return this.end - this.start;s
    }
};


