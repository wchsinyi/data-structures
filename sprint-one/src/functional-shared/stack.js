var Stack = function() {
	var newinst = {};
	var stor = {};
	var index = 0;
	newinst.stor = stor;
	newinst.index = index;
	debugger;
	newinst.pop = pop; 
	newinst.push = push; 
	newinst.size = size; 
	return newinst;
};

var pop = function(){
	console.log(this.index)
    if (this.index>0){
      var popitem = this.stor[this.index-1];
	  console.log(popitem)
      delete this.stor[this.index-1];
      this.index=this.index-1;    
      return popitem;
    }
    else{
      return ; 
    }
  };
var push = function(value){
	this.stor[this.index]=value;
	this.index= this.index+1;
}
var size = function(){
	return this.index;
}


