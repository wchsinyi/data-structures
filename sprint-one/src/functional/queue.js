var Queue = function() {
  var i = {};
  var storage = {};
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
    var ditem  = i.index==0 ?   i.storage[0] : 0 ;
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
  };
  return i;
};
