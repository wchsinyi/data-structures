var Stack = function() {
  var i = {};

  // Use an object with numeric keys to store values
  // var storage = {};
  // var index =0;

  i.storage = {};
  i.index = 0;

  // Implement the methods below
  // debugger;
  i.push = function(value){
    i.storage[i.index] = value; 
    i.index=i.index+1;
  };

  i.pop = function(){
    // debugger;
    if (i.index>0){
      var popitem = i.storage[i.index-1];
      delete i.storage[i.index-1];
      i.index=i.index-1;    
      return popitem;
    }
    else{
      return; 
    }
    
  };

  i.size = function(){
    return i.index;
  };


  return i;
};
