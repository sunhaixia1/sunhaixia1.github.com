// JavaScript Document
function toDub(n)
{
	return n<10? '0'+n : ''+n;
}
window.onload=function (){
	//首页消失
	var oMask=document.getElementById('mask');
	var oAnimate=document.getElementById('animate');
	setTimeout(function (){
		oMask.style.display='none';	
	},2000);
	

	//时钟
	var oDiv1=document.getElementById('t1');
	var oDiv2=document.getElementById('t2');
	var oTime=document.querySelector('.time');
	var oT=document.getElementById('time');
	var oBox=document.querySelector('.clock');
	var oH=document.querySelector('.hour');
	var oM=document.querySelector('.min');
	var oS=document.querySelector('.sec');

	function clock(){
			var oDate=new Date();
			var oHl=oDate.getHours();
			var oMl=oDate.getMinutes();
			var oSl=oDate.getSeconds();
			var oMs=oDate.getMilliseconds();

			var h=oHl%12*30+oMl/60*30;
			var m=oMl*6+oSl/60*6;
			var s=oSl*6+oMs/1000*6;

			oH.style.transform='rotate('+h+'deg)';
			oM.style.transform='rotate('+m+'deg)';
			oS.style.transform='rotate('+s+'deg)';
		}
	
	clock();
	setInterval(clock,1000);
	
	//导航
	var oBtn=document.querySelector('footer .btn');
	var oNav=document.querySelector('footer .nav');
	oBtn.onclick=function (){
		if(oNav.style.left=='100px')
		{
			oNav.style.left='-1300px';
		}
		else
		{
			oNav.style.left='100px';
		}
	};
	
	//左边内容运动
	var oLeftList=document.getElementById('left-list');
	var aLi=oLeftList.children;
	var aA1=oLeftList.getElementsByTagName('a');
	
	//改变h2的字
	var oLtit=document.querySelector('.positive .instruction h2');
	var oLbtn=document.querySelector('.positive .instruction a');
	var oRtit=document.querySelector('.reverse .instruction h2');
	var oRbtn=document.querySelector('.reverse .instruction a');	
	var arr=[
		{'name':'ABOUT','href':'./html/about.html'},
		{'name':'WORKS','href':'./html/w-works.html'},
		{'name':'MOBILES','href':'./html/mobile.html'},
		{'name':'CONTACT US','href':'./html/conect.html'}
	];
	var arr2=[
		{'name':'MOBILES','href':'./html/mobile.html'},
		{'name':'CONTACT US','href':'./html/conect.html'},
		{'name':'WORKS','href':'./html/w-works.html'},
		{'name':'ABOUT','href':'./html/about.html'}
	];
	
	var iNow=0;
	var leftH=aLi[0].offsetHeight;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi.length; i++)
		{
			aLi[i].className='';
		}
		aLi[iNow].className='active';
		oLtit.innerHTML=arr[iNow].name;
		oLbtn.href=arr[iNow].href;
		aA1[iNow].href=arr[iNow].href;
		iNow++;
		if(iNow==aLi.length)
		{
			iNow=0;
		}
	},3000);
	
	//右边内容运动
	var oRighttList=document.getElementById('right-list');
	var aLi2=oRighttList.children;
	var aA2=oRighttList.getElementsByTagName('a');
	
	var iNow2=0;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi2.length; i++)
		{
			aLi2[i].className='';
		}
		aLi2[iNow2].className='active';
		oRtit.innerHTML=arr2[iNow2].name;
		oRbtn.href=arr2[iNow2].href;
		aA2[iNow2].href=arr2[iNow2].href;
		iNow2++;
		if(iNow2==aLi2.length)
		{
			iNow2=0;
		}
	},3000);
	

	
};















