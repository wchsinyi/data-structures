class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.amount = 0;
  }

  push(val) {
    this.amount++;
    this.storage[this.amount] = val;
  }

  pop() {
    if (this.amount > 0) {
      return this.storage[this.amount--];
    }
  }
  
  size() {
    return this.amount;
  }
}