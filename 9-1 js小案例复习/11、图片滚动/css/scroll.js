window.onload=function(){
	var oContent=document.getElementById('content');
	var oUl=oContent.getElementsByTagName('ul')[0];
	var aLi=oContent.getElementsByTagName('li');
	var oLeftArrow=document.getElementById('leftArrow');
	var oRightArrow=document.getElementById('rightArrow');
	var timer=null;
	var speed=2;
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	function move(){
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left=0+'px';
		}
		if(oUl.offsetLeft>0){
			oUl.style.left=-oUl.offsetWidth/2+'px';
		}
		else{		
			oUl.style.left=oUl.offsetLeft-speed+'px';
		}	
	}
	timer=setInterval(move,30);
	oLeftArrow.onclick=function(){
		speed=2;
	}
	oRightArrow.onclick=function(){
		speed=-2;
	}
	oContent.onmouseover=function(){
		clearInterval(timer);
	}
	oContent.onmouseout=function(){
		timer=setInterval(move,30);
	}
}