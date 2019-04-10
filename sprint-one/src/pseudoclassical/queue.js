var Queue = function() {
	this.stor = {};
	this.index = 0;
};


Queue.prototype.enqueue= function(value) {
    this.storage[this.index] = value; 
    this.index=this.index+1; 
};


Queue.prototype.dequeue= function() {
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

Queue.prototype.size = function(){
	return this.index;
}
