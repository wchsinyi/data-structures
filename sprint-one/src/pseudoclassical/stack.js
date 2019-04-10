var Stack = function() {
	this.stor = {};
	this.index = 0;
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





