var Queue = function() {
	var i = {};
	var storage = {};
	var index =0;
	i.storage = storage;
	i.index = index;
	i.enqueue = enqueue; 
	i.dequeue = dequeue; 
	i.size = size; 
	return i;
};

var enqueue = function(value) {
    this.storage[this.index] = value; 
    this.index=this.index+1; 
};

var dequeue = function() {
    var ditem  = this.index==0? 0:this.storage[0] ;
    if(this.index>0){
      for (var keys in this.storage){
        this.storage[keys-1] = this.storage[keys];
      } 
      this.index =this.index-1;
    }else{
    }
    return ditem;
};

var size = function() {
    return this.index;
};



