function ajax(url,fnSucc,fnFaild){
	//1、创建对象
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}
	else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	//2、连接服务器
	oAjax.open('GET',url,true);
	//3、发送请求
	oAjax.send();
	//4、接受返回
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(oAjax.responseText);
			}
			else{
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		}
	}
}