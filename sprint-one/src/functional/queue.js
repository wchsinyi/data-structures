var Queue = function() {
  var i = {};
  var storage = {};
// <<<<<<< HEAD
  var index =0;
  i.storage = storage;
  i.index = index;
  // {0:0, 1:1, 2:2, 3:3, 4:4, 5:5}
  // {0:1, 1:2, 2:3, 3:4, 4:5}

  // Implement the methods below
  i.enqueue = function(value) {
    i.storage[i.index] = value; 
    i.index=i.index+1; 
  };

  i.dequeue = function() {
    // if there is no item, return undefined. if index ==0 
    // else: set a new variable 'lookup' equal to the first item in place
    // for (var keys in i){
        // i[keys-1] = i[keys]
    // } 
    // debugger;
    var ditem  = i.index==0 ?  0: i.storage[0]  ;
    if(i.index!=0){
      for (var keys in i.storage){
        i.storage[keys-1] = i.storage[keys]
      } 
      i.index =i.index-1
    }else{
    }
    return ditem
  };

  i.size = function() {
    return i.index
// =======
//   var start = 0;
//   var end = 0;

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage[end++] = value;
//   };

//   someInstance.dequeue = function() {
//     if (start !== end) {
//       let temp = storage[start];
//       delete storage[start++]
//       return temp;
//     }
//   };

//   someInstance.size = function() {
//     return end - start;
// >>>>>>> 320ebabcd5ac7dbfeb79b438367e37e872279fe5
  };
  return i;
};
