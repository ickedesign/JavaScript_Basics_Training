function ajax(url, fnSucc, fnFaild){
	//1、创建对象
	//非IE6下
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}
	//IE6下
	else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	//2、连接服务器
	//open(方法，文件，异步传输);
	oAjax.open('GET', url, true);
	//3、发送请求
	oAjax.send();
	//4、接受返回
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){//读取完成
			if(oAjax.status==200){//读取成功
				fnSucc(oAjax.responseText);
			}
			else if(fnFaild){
				
					fnFaild(oAjax.status);
				
			}
		}
	}
}
