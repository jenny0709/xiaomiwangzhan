/*
$()
*/
//$("<div>")
function $(selector,obj){//第一种情况:('.div') ('#id') ('span')第二种情况:(function(){})
    if(typeof selector==='string'){//如果所传值为字符串类型
    	  var obj=obj||document;
        if(selector.charAt(0)=="."){//字符串
            return getClass(selector.substring(1),obj);
        }else if(selector.charAt(0)=="#"){
            return obj.getElementById(selector.substring(1));
        }else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
        	return obj.getElementsByTagName(selector);
        }else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
           return document.createElement(selector.slice(1,-1));
        }
    }else if(typeof selector=='function'){
        window.onload=function(){
        	 selector();
        }
    }
}



/*
   兼容获取类名
*/
function getClass(classname,obj){//函数()
	var obj=obj||document;
	if(obj.getElementsByClassName){//隐式调用Boolean()函数
	   // alert("支持");
       return obj.getElementsByClassName(classname);//返回所传实参(类名)
	}else{
		// alert("不支持");
		var arr=[];//声明一个数组arr
		var alls=obj.getElementsByTagName('*');//获取页面当中所有的标签名
		for (var i = 0; i < alls.length; i++) {//遍历页面当中所有标签名的这个数组
		  if(checkClass(alls[i].className,classname)){//如果调用函数checkClass(没有拆分的类名,我们要找的类名)
                arr.push(alls[i]);//把找到的类名的标签名添加到数组的末尾
		  }
		};
		return arr; 
	}
}


function checkClass(newclass,oldclass){//函数(没有拆分的类名,我们要找的类名)
	 var flag=false; //开关思想
     var cl=newclass.split(' ');//把没有拆分的类名分割成数组
     for (var i = 0; i < cl.length; i++) {//遍历拆分出来的类名
      	if(cl[i]==oldclass){//如果拆分出来的每一个类名是我们要找的类名
            flag=true;
        }
     }; 
     return flag;
}



/*
兼容获取文本内容
*/
function getText(obj,val){
	if(val==undefined){
        if(typeof obj.textContent=="string"){
	    	console.log("IE9-11,f,c");
	    	return obj.textContent;
	    }else{
	    	console.log("IE6-8,c"); 
	    	return obj.innerText;
		}             
	}else{
		if(typeof obj.textContent=="string"){
	    	console.log("IE9-11,f,c");
	        obj.textContent=val;
	    }else{
	    	console.log("IE6-8,c"); 
	    	obj.innerText=val;
		}
	}                        
}

/*
兼容获取样式
*/
function getStyle(obj,attr){
    if(obj.currentStyle){
    	return obj.currentStyle.attr;
    }else{
    	return getComputedStyle(obj,null)[attr];
    }
}


/*
获取子节点
*/
function getChild(parent,t){
    var childs=parent.childNodes;
    var arr=[];
    var t=t||false;
    if(t==true){
       for (var i = 0; i < childs.length; i++) {
        if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,'')!='')){
            arr.push(childs[i]); 
        }
      };   
    }else if(t==false){
        for (var i = 0; i < childs.length; i++) {
          if(childs[i].nodeType==1){
            arr.push(childs[i]);
          }
        };
    }
    return arr;
}

//获取第一个子节点
function getFirst(obj){
   return getChild(obj)[0];
}
//获取最后一个子节点
function getLast(obj){
   var allChild=getChild(obj);
   return allChild[allChild.length-1];
}
//获取任意一个子节点
function getNum(obj,num){
   return getChild(obj)[num];
}
//获取下一个兄弟节点
function getNext(objs){
   var next=objs.nextSibling;
   if(next==null){
        return false;
   }
   while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
       next=next.nextSibling;
       if(next==null){
        return false;
       }
   }
   return next;
}

//获取上一个兄弟节点
function getUp(objs){
   var up=objs.previousSibling;
   if(up==null){
        return false;
   }
   while(up.nodeType==8||(up.nodeType==3&&up.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
       up=up.previousSibling;
       if(up==null){
        return false;
       }
   }
   return up;
}

//添加到前一个
function insertBefore(obj1,obj2){//(要插入的对象，之前的对象)
   var parentNodes=obj2.parentNode;
   parentNodes.insertBefore(obj1,obj2);
}

//添加到后一个
function insertAfter(obj1,obj2){
   var next=obj2.nextSibling;
   insertBefore(obj1,next);
}





