var Stack = function() {
// =======
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};
  instance.amount = 0;

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
      return this.storage[this.amount--];
    }
  },
  size() {
    return this.amount;
  }
};



// var Stack = function() {
//  var newinst = {};
//  var stor = {};
//  var index = 0;
//  newinst.stor = stor;
//  newinst.index = index;
//  newinst.pop = pop; 
//  newinst.push = push; 
//  newinst.size = size; 
//  return newinst;
// };

// var pop = function(){
//  // console.log(this.index)
//     if (this.index>0){
//       var popitem = this.stor[this.index-1];
//    // console.log(popitem)
//       delete this.stor[this.index-1];
//       this.index=this.index-1;    
//       return popitem;
//     }
//     else{
//       return ; 
//     }
//   };
// var push = function(value){
//  this.stor[this.index]=value;
//  this.index= this.index+1;
// }
// var size = function(){
//  return this.index;
// }
