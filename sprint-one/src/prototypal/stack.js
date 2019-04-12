var Stack = function() {
// <<<<<<< HEAD
// 	var newinst= Object.create(Stack.prototype);
// 	var stor ={};
// 	var index = 0;
// 	newinst.stor = stor;
// 	newinst.index = index;
// 	return newinst;
// };

// Stack.prototype.pop=  function(){
//     if (this.index>0){
//       var popitem = this.stor[this.index-1];
//       delete this.stor[this.index-1];
//       this.index=this.index-1;    
//       return popitem;
//     }
//     else{
//       return ; 
//     }
// }
// Stack.prototype.push= function(value){
//   	this.stor[this.index]=value;
// 	this.index= this.index+1;
// }

// Stack.prototype.size = function(){
// 	return this.index;
// }



// =======
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.amount = 0;
// >>>>>>> 320ebabcd5ac7dbfeb79b438367e37e872279fe5

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