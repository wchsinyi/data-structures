class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(val) {
    this.storage[this.end++] = val;
  }

  dequeue() {
    if (this.end > this.start) {
      return this.storage[this.start++];
    }
  }

  size() {
    return this.end - this.start;
  }
}
