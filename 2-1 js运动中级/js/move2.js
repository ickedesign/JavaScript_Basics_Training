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
				if(cur==json[attr]){

					clearInterval(obj.timer);
					if(fnEnd){//设置的目的是当fnEnd不存在的时候，它也能正常运行
						fnEnd();
					}
				}
				else{
					cur+=speed;
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+cur+')';
						obj.style.opacity=cur/100;
						
					}
					else{
						obj.style[attr]=cur+'px';
					}
				}
			  }
			},30)
		  
		}
