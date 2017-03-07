// JavaScript Document
function aa(){
	var mychar=document.getElementById("text");
	mychar.style.display='block';
	}
function bb(){
	var mychar=document.getElementById("text");
	mychar.style.display="none";
	}	
function cc(){
	var mychar=document.getElementById("changeColorDiv");
	mychar.style.width="100px";
	mychar.style.height="50px";
	mychar.style.background="#000";
	}	
function dd(){
	var mychar=document.getElementById("changeColorDiv");
	mychar.style.width="200px";
	mychar.style.height="100px";
	mychar.style.background="#CFF";
	}	
function skin1(){
	var mychar=document.getElementById("changeHref");
	mychar.href="skin1.css";
	}
function skin2(){
	var mychar=document.getElementById("changeHref");
	mychar.href="skin2.css";
	}	
function skin3(){
	var mychar=document.getElementById("changeHref");
	mychar.href="capacityCoporation.css";
	}	
function ee(){
	var mychar=document.getElementById("changeText");
	mychar.value="这是改动后的文字";
	mychar.title="这是改动后的文字";
	}	
function ff(){
	var mychar=document.getElementById("appear-box");
	if(mychar.style.display=="block"){//if后面为逻辑语句
		mychar.style.display="none";
		}
	else{
		mychar.style.display="block";
		}	
	}
function gg(){
	var mychar=document.getElementById("red-box");
	if(mychar.className=="none-box"){
		mychar.className="red-box";
		}
	else{
		mychar.className="none-box";
		}	
	}
function hh(color){
	var mychar=document.getElementById("change-color-box");
	mychar.style.background=color;
	}	
function ii(name,value){
	var mychar=document.getElementById("second-color-box");
	mychar.style[name]=value;
	}	
window.onload=function(){
	//14.getElementsByTagName("")的运用
	var aa=document.getElementById("black");
	var bb=aa.getElementsByTagName("h3");
	for(i=0;i<bb.length;i++){
		bb[i].style.color='green';
		}
	//15.全选、反选、不选	
	var cc=document.getElementById("btn2");
	var ff=document.getElementById("btn3");
	var gg=document.getElementById("btn4");
	var dd=document.getElementById("check-box");
	var ee=dd.getElementsByTagName("input");
	cc.onclick=function(){
		for(i=0;i<ee.length;i++){
			ee[i].checked=true;//或者用ee[i].checked='checked';
			}
		}	
	ff.onclick=function(){
		for(i=0;i<ee.length;i++){
			ee[i].checked=false;
			}
		}	
	gg.onclick=function(){
		for(i=0;i<ee.length;i++){
			if(ee[i].checked==true){
				ee[i].checked=false;
				}
			else{
				ee[i].checked=true;
				}	
			}
		}
	//16.选项卡的制作
	var hh=document.getElementById("tabControl");
	var hha=hh.getElementsByTagName("input");
	var hhb=hh.getElementsByTagName("div");
	   //选项卡的颜色变换
	for(i=0;i<hha.length;i++){
		    hha[i].index=i;
	   		hha[i].onmouseover=function(){
				for(i=0;i<hha.length;i++){
		          hha[i].className="";//style.background='';
				  hhb[i].style.display="none"; //选项卡内容的切换		
				}
				  this.className="nationalDay";//style.background='blue';	
				  hhb[this.index].style.display="block"; //选项卡内容的切换		
		    }
			  
		 }
	//17.innerHTML的练习
	//var ii=document.getElementById("innerHTML-practice");不是数组类，不能使用这种方式
	var iia=document.getElementById("inner-text");
	var iib=document.getElementById("inner-btn");	
	var iic=document.getElementById("inner-div");	
	iib.onclick=function(){
		iic.innerHTML=iia.value;//value是给input使用的，对于input不要使用innerHTML.
		}
	//18.简易日历的练习
	var jj=document.getElementById("calender");
	var jja=jj.getElementsByTagName("li");
	var jjb=jj.getElementsByTagName("div")[0];//只有一个div得标注
	var arr=['前往珠海参加实习','去北京参观天安门','回访广工','探访食堂','进行摄影','参加深圳的回访活动','到益力多进行实习','进行代码的二次训练','兴建住房','与爱人前往西藏','加朋友微信','回到第一重梦境']
	for(var i=0;i<jja.length;i++){
		jja[i].index=i;
		jja[i].onmouseover=function(){
			for(var i=0;i<jja.length;i++){
				jja[i].className="";
				}
			this.className="show-calender";	
			jjb.innerHTML='<h2>'+(this.index+1)+'月事件</h2><p>'+arr[this.index]+'</p>';
			}
		}
	//21.parseInt:将字符串转化为number,转化为整数的类型
	var kk=document.getElementById("caculationTextOne");	
	var kk1=document.getElementById("caculationTextTwo");
	var kk2=document.getElementById("caculationBtn");	
	kk2.onclick=function(){
		alert(parseInt(kk.value)+parseInt(kk1.value));
		}	
	//22.文本框中的计算,无NaN	
	var ll=document.getElementById("caculationTextThree");	
	var ll1=document.getElementById("caculationTextFour");
	var ll2=document.getElementById("caculationBtnOne");	
	ll2.onclick=function(){
		var n1=parseInt(ll.value);
		var n2=parseInt(ll1.value);
		if(isNaN(n1)){
			alert("第一个数字输入错误");
			}
		else if(isNaN(n2)){
			alert("第二个数字输入错误");
			}	
		else{
			alert(n1+n2);
			}	
		}
	//27.隔行变色
	var mm=document.getElementById('color-line');
	var mm1=mm.getElementsByTagName('li');
	for(i=0;i<mm1.length;i++){
		if(i%2==0){//0,2,4
			mm1[i].style.background="blue";
		}
	}	
	//37.函数传参:2.css函数，与jQuery有关
	var nn=document.getElementById('cssDiv');
	//alert(css(nn,'width'));//显示的是行间样式
	css(nn,'background','red');//设置的是行间样式
	//38.函数传参:3.取非行间样式，先来提取行间样式
	//alert(cssDiv.style['height']);//提取行间样式
	//38.函数传参:3.取非行间样式，提取非行间样式
	var oo=document.getElementById('notCssDiv');
	//alert(oo.currentStyle.width);//该currentStle方法是在IE中使用的
	//alert(getComputedStyle(oo,false).width);//该方法可以在chrome、ff、opera等中使用
	//做一个判断语句来使这个获取非行间样式的方法兼容
	/*if(oo.currentStyle){
		alert(oo.currentStyle.width);//在IE下面为真
	}
	else{
		alert(getComputedStyle(oo,false).width);//在其它浏览器为假,因为对象为undefined
	}*/
	//38.函数传参:3.取非行间样式，提取非行间样式，为了兼容性的问题，将这个函数进行封装的操作
	var oo1=document.getElementById('notCssDivBtn'); 
	oo1.onclick=function(){
		alert(getStyle(oo,'height'));
	}
	//41.定时器的使用:开始和结束定时器
	var pp1=document.getElementById('start');
	var pp2=document.getElementById('close');
	var timer=null;
	pp1.onclick=function(){
		timer=setInterval(function(){alert("aaa");},1000);//使用匿名函数
	}
	pp2.onclick=function(){
		clearInterval(timer);
	}
	//42.制作数码时钟，首先我们来做一个数码时钟
	var rr3=document.getElementById('year');
	var aImg1=rr3.getElementsByTagName('img');
	var rr1=document.getElementById('dieDigitalClock');
	var aImg=rr1.getElementsByTagName('img');
	/*var str=[1,3,5,7,3,4];//或者用var str='135734';这是基本的第一步的思路*/
	/*var oDate=new Date();
	var str=toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());//这样相加的都为字符串，而不是数字相加
	//alert(str);
	for(i=0;i<aImg.length;i++){
		aImg[i].src='img/'+str[i]+'.png';
	}*///这是第二步的思路，接下来来设置一个定时器；
	function rr2(){
		var oDate=new Date();
		//以下为年月日的设置；
		var str1=toDouble(oDate.getFullYear())+toDouble(oDate.getMonth()+1)+toDouble(oDate.getDate());
		//以下是钟点的设置；
		var str=toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());//这样相加的都为字符串，而不是数字相加
			for(var a=0;a<aImg1.length;a++){
				aImg1[a].src='img/'+str1.charAt(a)+'.png';
			}
			for(var i=0;i<aImg.length;i++){
				//aImg[i].src='img/'+str[i]+'.png';这个str[i]在低版本的浏览器里面不兼容
				aImg[i].src='img/'+str.charAt(i)+'.png';
	    }
	}    
	setInterval(rr2,1000);
	rr2();//使得一开始网页就出现了时刻
	//43.做一个延时提示框.
	var ss1=document.getElementById('delayPromptBox1');
	var ss2=document.getElementById('delayPromptBox2');
	var ss3=null;
	ss1.onmouseover=function(){
		clearTimeout(ss3);
		ss2.style.display='block';
	}
	ss1.onmouseout=function(){
		ss3=setTimeout(function(){ss2.style.display='none';},500);
	}
	ss2.onmouseover=function(){
		clearTimeout(ss3);
	}
	ss2.onmouseout=function(){
		ss3=setTimeout(function(){ss2.style.display='none';},500);
	}
	//延时提示框也可以进行合并；在本题中，onmousemover都可以合并在一起，onmouseout也是这样子；
	//44.做一个无缝滚动,向左
	/*var oDiv=document.getElementById('positionBox1');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	//接下来 要使ul里面的li为原来的2倍，而且长度变成原来的2倍；
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	setInterval(function(){
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left='0';
		}
		oUl.style.left=oUl.offsetLeft-2+'px';
	},30);*/

	/* 1. style.left 返回的是字符串，如28px，offsetLeft返回的是数值28，如果需要对取得的值进行计算，
	还用offsetLeft比较方便。2. style.left是读写的，offsetLeft是只读的，所以要改变div的位置，只能修
	改style.left;3.offsetLeft获取盒子的左边距*/
	//设置左边距的话，一定用style.left;获取的话用offsetLeft;*/
	var oDiv=document.getElementById('positionBox1');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var timerSecond=null;
	var oA1=document.getElementById('aLeft');
	var oA2=document.getElementById('aRight');
	var speed=2;
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';//把ul里面的图片撑起来，不然会掉下去
	function move(){//便于后面引用该函数；
		if(oUl.offsetLeft<-oUl.offsetWidth/2){//用了两个if；
			oUl.style.left='0';
		}
		if(oUl.offsetLeft>0){
			oUl.style.left=-oUl.offsetWidth/2+'px';//记住要在后面加上'px';
		}
		else{
			oUl.style.left=oUl.offsetLeft-speed+'px';
		}
	}
	timerSecond=setInterval(move,40);
//鼠标移动到div上时，图片停止滚动。
	oDiv.onmouseover=function(){
		clearInterval(timerSecond);
	}
	oDiv.onmouseout=function(){
		timerSecond=setInterval(move,40);
	}
	oA1.onclick=function(){
		speed=2;
	}
	oA2.onclick=function(){
		speed=-2;
	}
//46.DOM的操作元素的简单运用
	var oAtTxt=document.getElementById('atTxt');
	var oAtBtn=document.getElementById('atBtn');	
	oAtBtn.onclick=function(){
		//oAtTxt.value="afffhajafff";
		oAtTxt.setAttribute('value','adjgjhdgha');
	}
//48.DOM节点的创建
/*var oCreateTxt=document.getElementById('createTxt');
var oCreateBtn=document.getElementById('createBtn');
var oCreateUl=document.getElementById('createUl');
oCreateBtn.onclick=function(){
	var oLi=document.createElement('li');
	var aLi=oCreateUl.getElementsByTagName('li');
	//oLi.innerHTML='abc';
	oLi.innerHTML=oCreateTxt.value;
	//oCreateUl.appendChild(oLi);
	//48.插入DOM节点
	if(aLi.length>0){
		oCreateUl.insertBefore(oLi, aLi[0]);
	}
	else{
		oCreateUl.appendChild(oLi);
	}	
}*/
var oCreateTxt=document.getElementById('createTxt');
var oCreateBtn=document.getElementById('createBtn');
var oCreateUl=document.getElementById('createUl');
oCreateBtn.onclick=function(){
	var oLi=document.createElement('li');
	var aLi=oCreateUl.getElementsByTagName('li');
	oLi.innerHTML=oCreateTxt.value;
	if(aLi.length>0){//必须是aLi，因为是数组
		oCreateUl.insertBefore(oLi,aLi[0]);
	}
	else{
		oCreateUl.appendChild(oLi);
	}
}		
//48.DOM节点的删除
var oRemoveUl=document.getElementById('removeUl');
var aRemoveA=oRemoveUl.getElementsByTagName('a');
for(var i=0;i<aRemoveA.length;i++){
	aRemoveA[i].onclick=function(){
		oRemoveUl.removeChild(this.parentNode);
	}
}
//49.DOM的文档碎片. document.createDocumentFragment();
/*var oFragmentUl=document.getElementById('fragmentUl');
var oFrag=document.createDocumentFragment();
for(var i=0;i<1000;i++){
	var oLi=document.createElement('li');
	oFrag.appendChild(oLi);
	
}
oFragmentUl.appendChild(oFrag);*/
//50.DOM操作应用高级：表格；
var oDomTable=document.getElementById('domTable');
//alert(oDomTable.tBodies[0].rows[0].cells[1].innerHTML)
//隔行变色
var oldColor=null;
for(var i=0;i<oDomTable.tBodies[0].rows.length;i++){
	oDomTable.tBodies[0].rows[i].onmouseover=function(){
		oldColor=this.style.background;
		this.style.background="red";
	}
	oDomTable.tBodies[0].rows[i].onmouseout=function(){
		this.style.background=oldColor;
	}
	if(i%2==0){//偶数
		oDomTable.tBodies[0].rows[i].style.background="#ccc";
	}
	else{
		oDomTable.tBodies[0].rows[i].style.background="";
	}
}
//增添和删除表格行
var oNameTxt=document.getElementById('nameTxt');
var oAgeTxt=document.getElementById('ageTxt');
var oIncreaseBtn=document.getElementById('increaseBtn');
var oDomId=oDomTable.tBodies[0].rows.length+1;//使其id增加得有效
oIncreaseBtn.onclick=function(){
	var oTr=document.createElement('tr');

	var oTd=document.createElement('td');
	//oTd.innerHTML=oDomTable.tBodies[0].rows.length+1;
	oTd.innerHTML=oDomId++;
	oTr.appendChild(oTd);

	var oTd=document.createElement('td');
	oTd.innerHTML=oNameTxt.value;
	oTr.appendChild(oTd);//后面不用加上引号

	var oTd=document.createElement('td');
	oTd.innerHTML=oAgeTxt.value;
	oTr.appendChild(oTd);

	//做一个删除的a链接
	var oTd=document.createElement('td');
	oTd.innerHTML="<a href='javascript:;'>删除</a>";//注意''和""两个符号不要同时使用；
	oTr.appendChild(oTd);
	oTd.getElementsByTagName('a')[0].onclick=function(){
		oDomTable.tBodies[0].removeChild(this.parentNode.parentNode);//记住父级是oDomTable.tBodies[0]
	}

	oDomTable.tBodies[0].appendChild(oTr);
}
//表格的比较1：直接比较：2:不区分大小写的比较;
var oSearchBtn=document.getElementById('searchBtn');
var oSearchTxt=document.getElementById('searchTxt');
oSearchBtn.onclick=function(){
	for(var i=0;i<oDomTable.tBodies[0].rows.length;i++){
		/*var str1=oSearchTxt.value;
		var str2=oDomTable.tBodies[0].rows[i].cells[1].innerHTML;
		if(str1.toLowerCase()==str2.toLowerCase()){
			oDomTable.tBodies[0].rows[i].style.background='yellow';
		}
		else{
			oDomTable.tBodies[0].rows[i].style.background='';
		}*/
		//第三种：search的运用
		/*var str1=oSearchTxt.value.toLowerCase();
		var str2=oDomTable.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
		if(str2.search(str1)!=-1){
			oDomTable.tBodies[0].rows[i].style.background='yellow';
		}
		else{
			oDomTable.tBodies[0].rows[i].style.background='';
		}*/
		//第四种：split的运用，多关键字搜索
		var str1=oSearchTxt.value.toLowerCase();
		var str2=oDomTable.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
		var arr=str1.split(' ');
		oDomTable.tBodies[0].rows[i].style.background='';//display='none';//为什么一定要将这个东西放在这里才能让它有效果
		for(var j=0;j<arr.length;j++){
			if(str2.search(arr[j])!=-1){
				oDomTable.tBodies[0].rows[i].style.background='yellow';//display='block';
			}
			
		}	
		//筛选的时候，应用display：none的方法等即可。



	}
}
//search()的运用
/*var strsr="abcdef";
alert(strsr.search('bc'));//显示的结果是1，表示在第二位出现；
alert(strsr.search('a'));//显示的结果是0。表示在第一位出现；
alert(strsr.search('g'));//显示的结果是-1,表示没有找到；
alert(strsr.search('bck'));//显示的结果是-1,表示没有找到；*/
//51.DOM操作应用高级：表格的排序,从ul开始研究
var oSortUl1=document.getElementById('sortUl1');
var oSortUl2=document.getElementById('sortUl2');
var oSortBtn=document.getElementById('sortBtn');
var oSortLi=oSortUl1.getElementsByTagName('li');
oSortBtn.onclick=function(){
	oSortUl2.appendChild(oSortLi[0]);//1.先把元素从原有的父级上删掉；2.再添加到新的父级；
}

//在ul自身里面移动
var oSortUl3=document.getElementById('sortUl3');
var oSortBtn1=document.getElementById('sortBtn1');
var oSortLi1=oSortUl3.getElementsByTagName('li');
oSortBtn1.onclick=function(){
	oSortUl3.appendChild(oSortLi1[0]);//1.先把元素从原有的父级上删掉；2.再添加到新的父级；
}

//在ul里面进行排序
var oSortUl4=document.getElementById('sortUl4');
var oSortBtn2=document.getElementById('sortBtn2');
var oSortLi2=oSortUl4.getElementsByTagName('li');
oSortBtn2.onclick=function(){
	var arr=[];
	for(var i=0;i<oSortLi2.length;i++){
		arr[i]=oSortLi2[i];//将oSortLi2里面的东西传给arr[i];
	}
	arr.sort(function(li1,li2){
		var n1=parseInt(li1.innerHTML);//parseInt可加可不加
		var n2=parseInt(li2.innerHTML);
		return(n1-n2); 
	})
	//alert(arr[0].innerHTML);//会弹出9
	for(var i=0;i<arr.length;i++){
		oSortUl4.appendChild(arr[i]);//1.先把元素从原有的父级上删掉；2.再添加到父级上；
		//alert('该把'+arr[i].innerHTML+'插到最后');
	}
}

//在表格里面进行排序
var oSortBtn3=document.getElementById('sortBtn3');
var oSortTable=document.getElementById('sortTable');
var oSortId=oSortTable.tBodies[0].rows;
oSortBtn3.onclick=function(){
	var arr=[];
	for(var i=0;i<oSortId.length;i++){
		arr[i]=oSortId[i];
	}
	arr.sort(function(tr1,tr2){
		var n1=parseInt(tr1.cells[0].innerHTML);
		var n2=parseInt(tr2.cells[0].innerHTML);
		return n1-n2;
	})
	for(var i=0;i<arr.length;i++){
		oSortTable.tBodies[0].appendChild(arr[i]);
	}
}
//52.DOM操作应用高级：表单基础知识：两个事件：一个是onsubmit;一个是onreset;
var oAform=document.getElementById('aform');
oAform.onsubmit=function(){
	alert('已提交数据');
}
oAform.onreset=function(){
	alert('已重置数据');
}
//53.js运动基础
var oSportBtn=document.getElementById('sportBtn');
var oSportBox=document.getElementById('sportBox');
var timer=null;//var timer=null;要放在函数外面,不然没有效果
oSportBtn.onclick=function(){
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=4;
		if(oSportBox.offsetLeft>=300){//>=
			clearInterval(timer);//使该运动停止
		}
		else{//添加了一个else
			oSportBox.style.left=oSportBox.offsetLeft+speed+'px';
		}
		
	},30)
}
//54.js运动基础：运动框架：1.分享到侧边栏的制作
/*var oSidebar=document.getElementById('sidebar');
var timer=null;
oSidebar.onmouseover=function(){
	shareSidebar();
}
oSidebar.onmouseout=function(){
	shareSidebar1();
}
function shareSidebar(){
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=10;
		if(oSidebar.offsetLeft==0){
			clearInterval(timer);
		}
		else{
			oSidebar.style.left=oSidebar.offsetLeft+speed+'px';
		}
	},30)
}
function shareSidebar1(){
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=-10;
		if(oSidebar.offsetLeft==-100){//认的是box左边的部分
			clearInterval(timer);
		}
		else{
			oSidebar.style.left=oSidebar.offsetLeft+speed+'px';
		}
	},30)
}*/
//对以上的程序进行代码优化
/*var oSidebar=document.getElementById('sidebar');
var timer=null;
oSidebar.onmouseover=function(){
	shareSidebar(10,0);
}
oSidebar.onmouseout=function(){
	shareSidebar(-10,-100);
}
function shareSidebar(speed,target){
	clearInterval(timer);
	timer=setInterval(function(){
		
		if(oSidebar.offsetLeft==target){
			clearInterval(timer);
		}
		else{
			oSidebar.style.left=oSidebar.offsetLeft+speed+'px';
		}
	},30)
}*/
//对以上的程序进一步代码优化，这样就没有speed这个变量了
var oSidebar=document.getElementById('sidebar');
var timer=null;
oSidebar.onmouseover=function(){
	shareSidebar(0);
}
oSidebar.onmouseout=function(){
	shareSidebar(-100);
}
function shareSidebar(target){
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=0;
		if(oSidebar.offsetLeft>target){
			speed=-10;//定义的时候，一定要定义一个可以被target整除的数
		}
		else{
			speed=10;
		}
		if(oSidebar.offsetLeft==target){
			clearInterval(timer);
		}
		else{
			oSidebar.style.left=oSidebar.offsetLeft+speed+'px';
		}
	},30)
}
//55.js运动基础：运动框架：2.制作淡入淡出的图片，即用变量存储透明度。
/*var oAlphaBox=document.getElementById('alphaBox');
oAlphaBox.onmouseover=function(){
	oAlpha(100);
}
oAlphaBox.onmouseout=function(){
	oAlpha(30);
}
var timer=null;//这个要写在函数的外面
var alpha=30;
var speed=0;//变量的定义最好都写在函数的外面
function oAlpha(target){
	clearInterval(timer);
	timer=setInterval(function(){
		if(alpha<target){
			speed=10;
		}
		else{
			speed=-10;
		}
		if(alpha==target){
			clearInterval(timer);
		}
		else{
			alpha+=speed;
			oAlphaBox.style.filter='alpha(opacity:'+alpha+')';
			oAlphaBox.style.opacity=alpha/100;
		}
	},30)
}*/
//再打一次，加深印象
var oAlphaBox=document.getElementById('alphaBox');
oAlphaBox.onmouseover=function(){
	startMove(100);
}
oAlphaBox.onmouseout=function(){
	startMove(30);
}
var aspeed=0;//变量记得改名字
var alphaTimer=null;
var alpha=30;
function startMove(target){
	clearInterval(alphaTimer);//防止其重复多次地启用定时器；
	alphaTimer=setInterval(function(){
		if(alpha<target){//里面的符号也可以是<=
			aspeed=10;
		}
		else{
			aspeed=-10;
		}
		if(alpha==target){
			clearInterval(alphaTimer);
		}
		else{
			alpha+=aspeed;
			oAlphaBox.style.filter='alpha(opacity:'+alpha+')';
			oAlphaBox.style.opacity=alpha/100;
		}
	},30)
}
//56.js运动基础2:缓冲运动:距离和速度成正比
var oBufferBox=document.getElementById('bufferBox');
var oBufferBtn=document.getElementById('bufferBtn');
var btimer=null;
oBufferBtn.onclick=function(){
	clearInterval(btimer);
	btimer=setInterval(function(){
		var speed=(300-oBufferBox.offsetLeft)/10;
		//speed=Math.ceil(speed);//向上取整，比如4.5则为5,4.1也为5；-3.4为-3；
		//speed=Math.floor(speed);//向下取整
		speed=speed>0?Math.ceil(speed):Math.floor(speed);//这样就将二者结合了起来
		oBufferBox.style.left=oBufferBox.offsetLeft+speed+'px';
		document.title=oBufferBox.offsetLeft+','+speed;//记住这种表达方式
	},30)

}
window.onscroll=function(){//滚动事件
	var oBufferDiv=document.getElementById('bufferDiv');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//考虑到浏览器的兼容性问题
	//oBufferDiv.style.top=document.documentElement.clientHeight-oBufferDiv.offsetHeight+scrollTop+'px';
	starMove1(document.documentElement.clientHeight-oBufferDiv.offsetHeight+scrollTop);
	//以下是对联悬浮框
	var oRunDiv=document.getElementById('runDiv');
	starMove2(parseInt((document.documentElement.clientHeight-oBufferDiv.offsetHeight)/2+scrollTop));


}
	//以下这个东西不要写在window.onscroll里面
	var oBufferDiv=document.getElementById('bufferDiv');
	var timera=null;
	var speed=0;
	function starMove1(target){
		clearInterval(timera);
		timera=setInterval(function(){
			var speed=(target-oBufferDiv.offsetTop)/3;//修改除数可以来更改它的运动速度
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(target==oBufferDiv.offsetTop){
				clearInterval(timera);
			}
			else{
				oBufferDiv.style.top=oBufferDiv.offsetTop+speed+'px';
			}
		},30)
	}
	//对联悬浮框
	var oBTxt=document.getElementById('bTxt');
	var oRunDiv=document.getElementById('runDiv');
	var btimer=null;
	var speed=0;
	function starMove2(target){
		clearInterval(btimer);
		btimer=setInterval(function(){
			var speed=(target-oRunDiv.offsetTop)/6;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(target==oRunDiv.offsetTop){
				clearInterval(btimer);
			}
			else{
				//document.title=target;
				oBTxt.value=oRunDiv.offsetTop;
				oRunDiv.style.top=oRunDiv.offsetTop+speed+'px';
			}
		},30)
	}
//56.js运动基础2:匀速运动停止的条件:运用到Math.abs();
/*var oCcBtn1=document.getElementById('ccBtn1');
var oCcBtn2=document.getElementById('ccBtn2');
var oCcBox3=document.getElementById('ccBox3');
oCcBtn1.onclick=function(){

	clearInterval(ccTimer);
	ccTimer=setInterval(ccStart(100),30);

}function(){
	clearInterval(ccTimer);
	ccTimer=setInterval(function(){
		if(oCcBox3.offsetLeft>100){
			ccspeed=-7;
		}
		else{
			ccspeed=7;
		}
		if(Math.abs(oCcBox3.offsetLeft-100)<=7){
			
			oCcBox3.style.left=100+'px';
		}
		else{
			oCcBox3.style.left=oCcBox3.offsetLeft+ccspeed+'px';
		}
	},30)	
}
	function ccStart(target){//封装了该函数，结果出现了一顿一顿的效果...
		if(oCcBox3.offsetLeft>target){
			ccspeed=-7;
		}
		else{
			ccspeed=7;
		}
		oCcBox3.style.left=oCcBox3.offsetLeft+ccspeed+'px';
	}
oCcBtn2.onclick=function(){
	clearInterval(ccTimer);
	ccTimer=setInterval(function(){
		if(oCcBox3.offsetLeft>300){
			ccspeed=-7;
		}
		else{
			ccspeed=7;
		}
		if(Math.abs(oCcBox3.offsetLeft-100)<=7){
			
			oCcBox3.style.left=100+'px';
		}
		else{
			oCcBox3.style.left=oCcBox3.offsetLeft+ccspeed+'px';
		}	
	},30)	
}*/
/*var oCcBox3=document.getElementById('ccBox3');
var oCcBtn1=document.getElementById('ccBtn1');
var oCcBtn2=document.getElementById('ccBtn2');
var vTimer=null;
var speed=0;
oCcBtn1.onclick=function(){
	clearInterval(vTimer);
	vTimer=setInterval(overStart(100),30);
}
oCcBtn2.onclick=function(){
	clearInterval(vTimer);
	vTimer=setInterval(overStart(300),30);
}
function overStart(target){
	if(oCcBox3.offsetLeft>target){
		speed=-7;
	}
	else{
		speed=7;
	}
	if(Math.abs(oCcBox3.offsetLeft-target)<=7){
		clearInterval(vTimer);
		oCcBox3.style.left=target+'px';
	}
	else{
		oCcBox3.style.left=oCcBox3.offsetLeft+speed+'px';
	}
}*/







	}
	//对于onclick的事件要写在window.onload的外面
	var oCcBox3=document.getElementById('ccBox3');
	var ccspeed=0;
	var ccTimer=null;
	function ccStart(target){
		clearInterval(ccTimer);
		ccTimer=setInterval(function(){
		if(oCcBox3.offsetLeft>target){
			ccspeed=-7;
		}
		else{
			ccspeed=7;
		}
		if(Math.abs(oCcBox3.offsetLeft-target)<=7){
			clearInterval(ccTimer);
			oCcBox3.style.left=target+'px';
		}
		else{
			oCcBox3.style.left=oCcBox3.offsetLeft+ccspeed+'px';
		}
	},30)
}
//19、typeof的运用，输出数据类型。
function typeNumber(){
		var a=2;
		alert(typeof a);
		}
		//20、parseInt的运用
function changeNumber(){
		var a='2';
		alert(parseInt(a)+1);
		}	
//24.parseInt和ParseFloat为显式类型转换，而==,===,-为隐式类型转换		
function booleanValue(){
	alert(5=="5");
	alert(7-'3');
	var a=3;
	var b;
	b=a++;
	alert(b);//结果为3
	}
//28.秒转时间
function transportTime(){
	var a=199990;
	alert(parseInt(a/60)+'分'+a%60+'秒');
}
//29.switch简单的运用
function simpleSwitch(){
	var name="bemiu";
	var sex="boy";
	switch(sex){
		case 'boy':
			alert(name+'先生你好啊！');
			break;
		case 'girl':
			alert(name+'女孩你好啊！');
			break;
		default:
			alert('你好啊');		
	}
}
//33.Json是用来存储数据的，现在来看它的简单应用
function jsonApplication(){
	var json={k:12,b:13,c:'bbb'};//注意是花括号 哦！！！
	alert('k的值是'+json.k);
	alert('b的值是'+json['b']);
	//alert(json.length);//jason没有长度
	//所以json的循环得使用for in;
	for(var i in json){
		alert('第'+i+'个东西是'+json[i]);
	}
	//arr的循环也可以这样做
	//for(var i in arr){}
}	
//34.返回值
/*function returnPractice(){
	return 3;
}	
alert(returnPractice());*/
//35.返回值中加参数	,函数传参；
/*function returnPractice(a,b){
	return a+b;
}	
alert(returnPractice(3,4));*/
//36.函数传参:1.可变参（arguments,这是一个数组,参数的个数可变）求和	
/*function sum(){
	var result=0;
	for(i=0;i<arguments.length;i++){
		result+=arguments[i];
	}
	return result;
}
alert(sum(3,5,7,8,9));*/
//37.函数传参:2.css函数，与jQuery有关
/*function css(){//第一种方式
	if(arguments.length==2){
		return arguments[0].style[arguments[1]];//因为arguments[1]是不定参数，
		//所以要加上一个[],而不是使用.;
	}
	else{
		arguments[0].style[arguments[1]]=arguments[2];
	}
}*/
function css(obj,name,value){//第2种方式，给参数取名字，增加可读性
	if(arguments.length==2){
		return obj.style[name];//因为arguments[1]是不定参数，所以要加上一个[],而不是使用.
		//返回的是对象的行间样式
	}
	else{
		obj.style[name]=value;//设置的是obj的行间样式
	}	
}	

//38.函数传参:3.取非行间样式，先来提取行间样式
//38.函数传参:3.取非行间样式，提取非行间样式
//38.函数传参:3.取非行间样式，提取非行间样式，为了兼容性的问题，将这个函数进行封装的操作
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}
//39.定义数组	
/*var myarr=[1,3,66];//一般使用这一种构建数组的方式，比较简单
var myarr1=new Array(1,2,67,33);
alert(myarr[2]);
alert(myarr1[3]);*/
//数组的长度length
/*var myarr=[1,3,4,5,6];
myarr.length;//可以设置数组的长度,令length=0,便可以清空数组
alert(myarr);	*/
//数组的方法：添加、删除元素；
//var myarr=[1,2,3];
//myarr.push(4,5,6);//可以增添多点数
//myarr.pop();//删除一个数
//myarr.shift(2);//头部删除一个数
//myarr.unshift(1,23);//可以在头部增添多一点的数
//alert(myarr);
//运用splice方法，将数组定一个起点以及一个长度，来删掉数组的一部分
//var myarr=[1,1,3,4,5];
//alert(myarr.splice(2,2));//显示其删掉的部分；
//myarr.splice(2,0,'a','b','c');//无法调用alert方法来显示它增加的部分，它的排序方式是正常人类的排序方式
//alert(myarr);
//40.数组间的一些应用
/*var myarr1=['1','2','3'];//连接两个数组
var myarr2=['4','5','6'];
alert(myarr1.concat(myarr2));
alert(myarr1.join('- -p'));//在数组的每个元素之间添加分隔符*/
/*var myarr=['zoo','alo','ha','bemiu'];//sort(对于字符串而言)的排序运用,但是其在排数字的时候，不按数字的大小来排，认的是字符串；
alert(myarr.sort());*/
/*var myarr1=[2,4,66,88,21,13];//对于排列数字的顺序来说，应该在sort()；中间放入一个返回函数
myarr1.sort(function(n1,n2){return n1-n2});//第一种方法
myarr1.sort(function(n1,n2){//第二种方法
	if(n1<n2){
		return -1;
	}
	else if(n1>n2){
		return 1;
	}
	else{
		return 0;
	}
})
alert(myarr1);*/	
//41.定时器的使用:
/*function time(){
	alert("aaa");
}
//setInterval(time,1000);
//或者使用匿名函数
setInterval(function(){
	alert("aaa");
},1000);*/
//41.定时器的使用:开始和结束定时器
//42.制作数码时钟:<br />1.获取系统时间：用date对象
/*var oDate=new Date();
alert(oDate.getHours());
alert(oDate.getMinutes());
alert(oDate.getSeconds());
alert(oDate.getFullYear());
alert(oDate.getMonth()+1);//后面再加一；
alert(oDate.getDate());
alert(oDate.getDay());//0表示的是周日，6表示的是周六；*/
//42.制作数码时钟:首先我们来做一个数码时钟
function toDouble(n){
	if(n<10){
		return '0'+n;//使它成为字符串的类型；
	}
	else{
		return ''+n;
	}
}
//44.制作一个无缝滚动;制作无缝滚动不需要再window.onload里面设置
/*setInterval(function(){
	var posBox=document.getElementById('positionBox');
	posBox.style.left=posBox.offsetLeft+10+'px';//获取盒子的左边距，每0.5秒增加10px的左边距；
},500);*/
//另外：obj.charAt();的运用
/*
	var iii="hello!";
	alert(iii.charAt(0));
	alert(iii.charAt(iii.length-1));
 */
//45.DOM基础
var oDomUl=document.getElementById('domUl');
//在IE6到IE8中可以显示的childNodes的个数为元素节点的个数，其它的则不可以；
//alert(oDomUl.childNodes.length);//弹出来的数值是5个，有3个文本节点，2个元素节点；
/*for(var i=0;i<oDomUl.childNodes.length;i++){
	//oDomUl.childNodes[i].background="red";
	if(oDomUl.childNodes[i].nodeType==1){
		oDomUl.childNodes[i].style.background="red";//记住要 加上style哟~~~
	}
	//alert(oDomUl.childNodes[i].nodeType);显示的是 31313；
}*/
//children表示的是元素节点的子节点,则上述的代码可以换成
for(var i=0;i<oDomUl.children.length;i++){
	oDomUl.children[i].style.background='red';
	//alert(oDomUl.children.length);这时候这显示两个，因为只有两个元素节点；
}
var oParentUl=document.getElementById('parentUl');
var aA=oParentUl.getElementsByTagName('a');
for(i=0;i<aA.length;i++){
	aA[i].onclick=function(){
		this.parentNode.style.display='none';
	}
}
//alert(oDomUl.children);
//下面是offsetParent的简单运用
/*var oOspDiv=document.getElementById('ospDiv');
alert(oOspDiv.offsetParent);*/
//下面是firstChild的简单应用
var oFcUl=document.getElementById('fcUl');
if(fcUl.firstElementChild){
	fcUl.firstElementChild.style.background="green";//在高级浏览器中要使用firstElementChild
}
else{
	fcUl.firstChild.style.background="green";//在ie6到8的版本中，要使用firstChild;
}
//46.DOM操作的简单运用，在window.onload那里；
//47.用DOM灵活找元素：1.className;2.封装函数；
/*var oCnUl=document.getElementById('cnUl');
var aCnLi=oCnUl.getElementsByTagName('li');
for(i=0;i<aCnLi.length;i++){
	if(aCnLi[i].className=='box'){
		aCnLi[i].style.background="yellow";
	}
}*/
//接下来来封装这个函数
function getByClass(oParent,sClass){
	var aLi=oParent.getElementsByTagName('*');
	var aResult=[];
	for(i=0;i<aLi.length;i++){
		if(aLi[i].className==sClass){
			aResult.push(aLi[i]);//不能直接在其中return aLi[i];因为不能说一次返回多个数值；而这种方法返回的是一个数组；

		}
	}
	return aResult;
}
var oCnUl=document.getElementById('cnUl');
var aCnLi=getByClass(oCnUl,'box');
for(i=0;i<aCnLi.length;i++){
	aCnLi[i].style.background="yellow";
	}



