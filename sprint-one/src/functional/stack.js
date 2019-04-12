var Stack = function() {
  var someInstance = {};
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    if (size > 0) {
      return storage[size--];
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


// var Stack = function() {

//   var i = {};


//   i.storage = {};
//   i.index = 0;

//   // Implement the methods below
//   // debugger;
//   i.push = function(value){
//     i.storage[i.index] = value; 
//     i.index=i.index+1;
//   };

//   i.pop = function(){
//     // debugger;
//     if (i.index>0){
//       var popitem = i.storage[i.index-1];
//       delete i.storage[i.index-1];
//       i.index=i.index-1;    
//       return popitem;
//     }
//     else{
//       return; 
//     }
    
//   };

//   i.size = function(){
//     return i.index;
//   };
//   return i;
// }