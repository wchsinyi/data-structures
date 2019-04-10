var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.end++] = val;
}
Queue.prototype.dequeue = function () {
  if (this.end > this.start) {
    return this.storage[this.start++];
  }
}
Queue.prototype.size = function () {
  return this.end - this.start;
}