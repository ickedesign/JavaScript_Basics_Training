window.onload=function(){
	var oTime=document.getElementById('time');
	var aNum=document.getElementsByName('num');
	var aNum1=document.getElementsByName('num1');
	var aNum2=document.getElementsByName('num2')[0];
	var str4=[
		'seven',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six'
	]
	function toDouble(t){
		if(t<10){
			return '0'+t;
		}
		else{
			return ''+t;
		}
	}
	function timeChange(){
		var oDate=new Date();
		var str1=toDouble(oDate.getFullYear())+toDouble(oDate.getMonth()+1)+toDouble(oDate.getDate());
		var str2=toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());
		var str3=oDate.getDay();
		for(var i=0;i<aNum1.length;i++){
			//20:90:11
			aNum1[i].src='img/'+str1.charAt(i)+'.png';
		}
		for(var i=0;i<aNum.length;i++){
			//20:90:11
			aNum[i].src='img/'+str2.charAt(i)+'.png';

		}
		aNum2.src='img/'+str4[str3]+'.png';
	}
	setInterval(timeChange,1000);
	timeChange();
}