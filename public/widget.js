var SpinPool = new Array();


function custom(start,increment,id){
    this.start = start;
    this.increment = increment;
    this.id = id;

    SpinPool[id] = this;
 

}

custom.prototype.render = function(id){
    var html = "<input type ='text' value='"+this.start+"' id='" + this.getFieldId() + "' ></input> ";
    html+= "<input type='button' value='+' onclick='spin_next(\"" + this.id + "\")'></input>";
    document.getElementById(id).innerHTML = html
}

custom.prototype.getFieldId = function(){
	return this.id + "_textfield";
}

custom.prototype.increment1 = function(){
    console.log(this.getFieldId());
    
    this.start+=this.increment;
    document.getElementById(this.getFieldId()).innerHTML = this.start;
    
}


function spin_next(id){
	SpinPool[id].increment1();
}

