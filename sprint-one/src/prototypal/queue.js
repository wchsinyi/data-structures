var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;

  return instance;
};

var queueMethods = {
  enqueue(val) {
    this.storage[this.end++] = val;
  },
  dequeue() {
    if (this.start < this.end) {
      return this.storage[this.start++];
    }
  },
  size() {
    return this.end - this.start;
  }
};


