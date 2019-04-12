var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end++] = value; 
  };

  someInstance.dequeue = function() {
    if (start !== end) {
      let temp = storage[start];
      delete storage[start++]
      return temp;
    }
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};


// var Queue = function() {
//   var i = {};
//   i.storage = {};
//   i.index = 0;
//   i.enqueue = function(value) {
//     i.storage[i.index++] = value; 
//     // does the same thing 
//     // i.storage[i.index] = value; 
//     // i.index=i.index+1; 
//   };

//   i.dequeue = function() {
//     // if there is no item, return undefined. if index ==0 
//     // else: set a new variable 'lookup' equal to the first item in place
//     // for (var keys in i){
//         // i[keys-1] = i[keys]
//     // } 
//     // debugger;
//     var ditem  = i.index==0 ?  0: i.storage[0]  ;
//     if(i.index!=0){
//       for (var keys in i.storage){
//         i.storage[keys-1] = i.storage[keys]
//       } 
//       i.index =i.index-1
//     }else{
//     }
//     return ditem
//   };

//   i.size = function() {
//     return i.index;
//   }
// }