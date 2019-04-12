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
      this.storage[this.end++] = val;
    },
    dequeue() {
      if (this.start < this.end) {
        let temp = this.storage[this.start];
        delete this.storage[this.start++]
        return temp;
      }
    },
    size() {
      return this.end - this.start;s
    }
};
// var Queue = function() {
// 	var i = {};
// 	var storage = {};
// 	var index =0;
// 	i.storage = storage;
// 	i.index = index;
// 	i.enqueue = enqueue; 
// 	i.dequeue = dequeue; 
// 	i.size = size; 
// 	return i;
// };

// var enqueue = function(value) {
//     this.storage[this.index] = value; 
//     this.index=this.index+1; 
// };

// var dequeue = function() {
//     var ditem  = this.index==0? 0:this.storage[0] ;
//     if(this.index>0){
//       for (var keys in this.storage){
//         this.storage[keys-1] = this.storage[keys];
//       } 
//       this.index =this.index-1;
//     }else{
//     }
//     return ditem;
// };

// var size = function() {
//     return this.index;
// };



