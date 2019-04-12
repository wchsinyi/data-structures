var Stack = function() {
// <<<<<<< HEAD
// 	this.stor = {};
// 	this.index = 0;
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
  this.storage = {};
  this.amount = 0;
};

Stack.prototype.push = function(val) {
  this.amount++;
  this.storage[this.amount] = val;
}
Stack.prototype.pop = function() {
  if (this.amount > 0) {
    return this.storage[this.amount--];
  }
}
Stack.prototype.size = function() {
  return this.amount;
}
// >>>>>>> 320ebabcd5ac7dbfeb79b438367e37e872279fe5
