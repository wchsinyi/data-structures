var Queue = function() {
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
      let temp = this.storage[this.start];
      delete this.storage[this.start++]
      return temp;
    }
  },
  size() {
    return this.end - this.start;
  }
};



// var Queue = function() {
//  var newinst= Object.create(Queue.prototype);
//  var storage ={};
//  var index = 0;
//  newinst.storage = storage;
//  newinst.index = index;
//  return newinst;
// };



// Queue.prototype.enqueue=  function(value) {
//     this.storage[this.index] = value; 
//     this.index=this.index+1; 
// };

// Queue.prototype.dequeue= function() {
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

// Queue.prototype.size = function(){
//  return this.index;
// }
