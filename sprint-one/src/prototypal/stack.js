var Stack = function() {
	var newinst= Object.create(Stack.prototype);
	var stor ={};
	var index = 0;
	newinst.stor = stor;
	newinst.index = index;
	return newinst;
};

Stack.prototype.pop=  function(){
	    if (this.index>0){
	      var popitem = this.stor[this.index-1];
	      delete this.stor[this.index-1];
	      this.index=this.index-1;    
	      return popitem;
	    }
	    else{
	      return ; 
	    }
}
Stack.prototype.push= function(value){
	  	this.stor[this.index]=value;
		this.index= this.index+1;
}

Stack.prototype.size = function(){
	return this.index;
}





