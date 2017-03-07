window.onload=function(){
	var oBox=document.getElementById('box');
	//第一个球
	var oBtn1=document.getElementById('btn1');
	var oBtn2=document.getElementById('btn2');
	var oCircle=oBox.getElementsByTagName('div')[0];
	var timer=null;
	oBtn1.onclick=function(){
		clearInterval(timer);//防止多次重复点击按钮而使球加速；
		timer=setInterval(function(){
			if(oCircle.offsetLeft>=oBox.offsetWidth-2){
				oCircle.style.left=-50+'px';//区分数字和字符串的区别
			}
			else{
				oCircle.style.left=oCircle.offsetLeft+3+'px';
			}
		},30)
	}
	oBtn2.onclick=function(){
		clearInterval(timer);//另一个函数里面的timer被引用了
	}
	//第二个球
	var oUl1=oBox.getElementsByTagName('Ul')[0];
	var aLi=oBox.getElementsByTagName('li');
	var oBtn3=document.getElementById('btn3');
	var oBtn4=document.getElementById('btn4');
	var timer2=null;
	oUl1.innerHTML=oUl1.innerHTML+oUl1.innerHTML;//内容变成两个
	oUl1.style.width=aLi[0].offsetWidth*16+'px';//'800px';//ul的长度也变成原来的两倍
	oBtn3.onclick=function(){
		clearInterval(timer2);
		timer2=setInterval(function(){
			if(oUl1.offsetLeft>0){
				oUl1.style.left=-oUl1.offsetWidth/2+'px';//边框的左边有一个隐藏的一个ul
			}
			else{
				oUl1.style.left=oUl1.offsetLeft+2+'px';
			}
		},30)
	}
	oBtn4.onclick=function(){
		clearInterval(timer2);
	}
}
