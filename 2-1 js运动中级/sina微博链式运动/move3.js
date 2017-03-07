	function getStyle(obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}
			else{
				return getComputedStyle(obj,false)[name];
			}
		}
	function startMove(obj,json,fnEnd){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var bStop=true;//假设所有的值都到了
				for(var attr in json){
					var cur=0;
					if(attr=='opacity'){
						var cur=Math.round(parseFloat(getStyle(obj,attr))*100);
					}
					else{
						
						var cur=parseInt(getStyle(obj,attr));
					}
					var speed=(json[attr]-cur)/6;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					/*if(cur==json[attr]){

						clearInterval(obj.timer);
						if(fnEnd){//设置的目的是当fnEnd不存在的时候，它也能正常运行
							fnEnd();
						}
					}*///去掉这一部分，放在下面
					if(cur!=json[attr]){
						bStop=false;
					}
					//得去掉原来这个else
						cur+=speed;
						if(attr=='opacity'){
							obj.style.filter='alpha(opacity:'+cur+')';
							obj.style.opacity=cur/100;
							
						}
						else{
							obj.style[attr]=cur+'px';
						}
					
			    }
			    if(bStop){//这个循环不在for var in里面
			    	clearInterval(obj.timer);
			    	if(fnEnd){fnEnd();}
			    }
			},30)
		  
		}
