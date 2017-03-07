function Drag(id){
	var _this=this;
	this.disX=0;
	this.disY=0;
	this.oDiv1=document.getElementById(id);
	this.oDiv1.onmousedown=function(ev){
		_this.fnDown(ev);
		return false;
	}	
}
Drag.prototype.fnDown=function(ev){
	var _this=this;
	var oEv=ev||event;
	this.disX=oEv.clientX-this.oDiv1.offsetLeft;
	this.disY=oEv.clientY-this.oDiv1.offsetTop;
	document.onmousemove=function(ev){
		_this.fnMove(ev);
	}	
	document.onmouseup=function(ev){
		_this.fnUp(ev);
	}	
}
Drag.prototype.fnMove=function(ev){
	var oEv=ev||event;
	this.oDiv1.style.left=oEv.clientX-this.disX+'px';
	this.oDiv1.style.top=oEv.clientY-this.disY+'px';
}	
Drag.prototype.fnUp=function(){
	document.onmousemove=null;
	document.onmouseup=null;
}
	