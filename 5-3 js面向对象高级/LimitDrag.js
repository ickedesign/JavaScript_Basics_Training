function LimitDrag(id){
	Drag.call(this,id);
}
for(var i in Drag.prototype){
	LimitDrag.prototype[i]=Drag.prototype[i];
}
LimitDrag.prototype.fnMove=function(ev){
	var oEv=ev||event;
	var l=oEv.clientX-this.disX;
	var i=oEv.clientY-this.disY;
	if(l<0){
		l=0;
	}
	else if(l>document.documentElement.clientWidth-this.oDiv1.offsetWidth){
		l=document.documentElement.clientWidth-this.oDiv1.offsetWidth;
	}

	if(i<0){
		i=0;
	}
	else if(i>document.documentElement.clientHeight-this.oDiv1.offsetHeight){
		i=document.documentElement.clientHeight-this.oDiv1.offsetHeight;
	}
	this.oDiv1.style.left=l+'px';
	this.oDiv1.style.top=i+'px';//只能写成oDiv1不能写成oDiv2，因为后者没有定义
}
