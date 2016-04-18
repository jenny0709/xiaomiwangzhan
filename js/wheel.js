//轮播图
window.onload=function(){
   var imgs=getClass('imgs')[0].getElementsByTagName('a');
   var btns=getClass('btn')[0].getElementsByTagName('li');
   var index=0;
   var t=setInterval(wheel,2000);
   function wheel(){
   	  index++;
   	  if(index>imgs.length-1){
   	  	index=0;
   	  }
   	  for (var i = 0; i < imgs.length; i++) {
   	  	animate(imgs[i],{opacity:0});
   	  	btns[i].style.background="";
   	  };
   	  animate(imgs[index],{opacity:1});
   	  btns[index].style.background="#fff";
   }
   for (var i = 0; i < btns.length; i++) {
   	  btns[i].index=i;
   	  btns[i].onclick=function(){
         for (var j = 0; j < imgs.length; j++) {
   	  	   animate(imgs[j],{opacity:0});
            btns[j].style.background="";
        };
        animate(imgs[this.index],{opacity:1});
        btns[this.index].style.background="#fff";
        index=this.index;
   	  }
   };
   var box=getClass('banner')[0];
   box.onmouseover=function(){
   	   clearInterval(t);
   }
   box.onmouseout=function(){
   	   t=setInterval(wheel,2000);
   }
   var left=getClass('btn-left')[0];
   var right=getClass('btn-right')[0];
   left.onclick=function(){
        index--;
   	  if(index==-1){
   	  	index=imgs.length-1;
   	  }
   	  for (var i = 0; i < imgs.length; i++) {
   	  	animate(imgs[i],{opacity:0});
   	  	btns[i].style.background="";
   	  };
   	  animate(imgs[index],{opacity:1});
   	  btns[index].style.background="#fff";
   }
   right.onclick=function(){
   	    wheel();
   }

//选项卡效果
var links=getClass('dapei-topa');
var img2s=getClass('dapei-goods');
var as,ds;
for (var i = 0; i < links.length; i++) {
   as=links[i].getElementsByTagName('a');
   ds=img2s[i].getElementsByClassName('dpright');
   tab(as,ds);
};
function tab(links,lists){
   for (var i = 0; i < links.length; i++) {
         links[i].aa=i;
         links[i].onmouseover=function(){
            for (var j = 0; j < lists .length; j++) {
               lists[j].style.zIndex="1";
               links[j].style.color="#000";
               links[j].style.borderBottom="0";
            }; 
            lists[this.aa].style.zIndex="99";
            links[this.aa].style.color="#ff6700";
            links[this.aa].style.borderBottom="2px solid #ff6700";
         }
   };
}

//小米明星单品
var bigbox=getClass('dan-outgoods')[0];
var smallbox=getClass('dan-goods');
var smallboxw=parseInt(getStyle(smallbox[0],'width'));
var a=0;
var t2=setInterval(wheel1,3000);
var btnBox=getClass('dan-btn')[0];
// console.log(btnBox);
var lrbtn=btnBox.getElementsByTagName('a');
// console.log(lrbtn);
function wheel1(){
   a++;
   if(a==smallbox.length){
      a=0;
   }
   for (var i = 0; i < lrbtn.length; i++) {
      lrbtn[i].style.color="#b0b0b0";
   };
   lrbtn[a].style.color="#e0e0e0";
   animate(bigbox,{marginLeft:-a*smallboxw});
}

var lbtn=getClass('lt')[0];
var rbtn=getClass('gt')[0];
// console.log(rbtn);
 lbtn.onclick=function(){
   a--;
   if(a==-1){
      a=0;
   }
   for (var i = 0; i < lrbtn.length; i++) {
      lrbtn[i].style.color="#b0b0b0";
   };
   lrbtn[a].style.color="#e0e0e0";
   animate(bigbox,{marginLeft:-a*smallboxw});
 }
 rbtn.onclick=function(){
   a++;
   if(a==smallbox.length){
      a=smallbox.length-1;
   }
   for (var i = 0; i < lrbtn.length; i++) {
      lrbtn[i].style.color="#b0b0b0";
   };
   lrbtn[a].style.color="#e0e0e0";
   animate(bigbox,{marginLeft:-a*smallboxw});
 }
  btnBox.onmouseover=function(){
      clearInterval(t2);
  }
  btnBox.onmouseout=function(){
      t2=setInterval(wheel1,3000);
  }

//内容
function btnWheel(num){
   var datsBox=$('.datsbox')[num];
   var divs=$('.nr-one');
   var divsW=parseInt(getStyle(divs[0],"width"));
   var btn2s=$('li',$('.btn2')[num]);
   var nrBtn1=$('.nr-lbtn')[num];
   var nrBtn2=$('.nr-rbtn')[num];
   for (var i = 0; i < btn2s.length; i++) {
      btn2s[i].index2=i;
      btn2s[i].onclick=function(){
         for (var j = 0; j < btn2s.length; j++) {
            btn2s[j].className="";
         };
         btn2s[this.index2].className="hot";
         animate(datsBox,{marginLeft:-this.index2*divsW})
         index2=this.index2;
      }
   };
   var index2=0;
   var flag=true;
   nrBtn1.onclick=function(){
      if(flag=false){
         return;
      }
      flag=false;
      index2--;
      if(index2==-1){
         index2=0;
      }
      for (var i = 0; i < btn2s.length; i++) {
         btn2s[i].className="";
      };
      btn2s[index2].className="hot";
      animate(datsBox,{marginLeft:-index2*divsW});
      flag=true;
   }
   nrBtn2.onclick=function(){
      if(flag=false){
         return;
      }
      flag=false;
      index2++;
      if(index2==4){
         index2=3;
      }
      for (var i = 0; i < btn2s.length; i++) {
         btn2s[i].className="";
      };
      btn2s[index2].className="hot";
      animate(datsBox,{marginLeft:-index2*divsW});
      flag=true;
   }
   var tsBox=$('.tsbox')[num];
   tsBox.onmouseover=function(){
      nrBtn1.style.display="block";
      nrBtn2.style.display="block";
   }
   tsBox.onmouseout=function(){
      nrBtn1.style.display="none";
      nrBtn2.style.display="none";
   }
}
for (var i = 0; i < 4; i++) {
   btnWheel(i);
};


//懒加载   按需加载
var floors=$('.floor');
// console.log(floors);
var arr=[];
var ch=document.documentElement.clientHeight;
for (var i = 0; i < floors.length; i++) {
   arr.push(floors[i].offsetTop);
};
// console.log(arr);
window.onscroll=function(){
   var st=document.body.scrollTop||document.documentElement.scrollTop;
   for (var i = 0; i < floors.length; i++) {
      if(st+ch-250>arr[i]){
         var imgs=$('img',floors[i]);
         for (var j = 0; j < imgs.length; j++) {
             imgs[j].src=imgs[j].getAttribute("asrc");
         };
      }
   };   
}








}

