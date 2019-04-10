var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  var storage = {};
  var amount = 0;

  instance.storage = storage;
  instance.amount = amount;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push(val) {
    this.amount++;
    this.storage[this.amount] = val;
  },
  pop() {
    if (this.amount > 0) {
      this.amount--;
      return this.storage[this.amount + 1];
    }
  },
  size() {
    return this.amount;
  }
};
