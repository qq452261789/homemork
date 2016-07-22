// JavaScript Document
//隐藏中间字符
function fnHidNum(sString, nStart, nEnd){
	//参数：需要隐藏的字符串, 开头显示个数, 结尾显示个数
	
	var strStart = sString.substr(0, nStart)
	//截取开头需要显示的字符串
	
	var strEnd = sString.substr(-nEnd);
	//截取结尾需要显示的字符串
	
	var sStar = "";
	for(var i=0; i<sString.length-nStart-nEnd; i++){
		sStar += "*";
	}
	//计算字符串中间的“*”
	
	var str = strStart + sStar + strEnd;
	//拼接出隐藏后的字符串
	
	return  str;//返回隐藏后的字符串
}
//加“0”
function add0(nNum){
	//传入需要加“0”的数字
	
	if(nNum<10){
		nNum = "0"+nNum;
	}
	//判断是否小于10，如果小于10，数字前加“0”
	
	return nNum;//返回加“0”后的数字
}
//日期格式化
function fnDate(dDate, sFu){
//参数：日期, 格式化符号
	
	var dYear = dDate.getFullYear();//获取年份
	var dMonth = add0(dDate.getMonth()+1);//获取月份
	var dDay = add0(dDate.getDate());//获取几号
	var sDate = "";
	if(sFu){
		sDate = dYear+sFu+dMonth+sFu+dDay;
	}else{
		sDate = dYear+"年"+dMonth+"月"+dDay+"日";
	}
	
	return sDate;//返回字符串
}
//时间格式化
function fnTime(dDate, sFu){
	var dHour = add0(dDate.getHours());
	var dMinute = add0(dDate.getMinutes());
	var dSecond = add0(dDate.getSeconds());
	var dTime = "";
	if(sFu){
		dTime = dHour+sFu+dMinute+sFu+dSecond;
	}else{
		dTime = dHour+"时"+dMinute+"分"+dSecond+"秒";
	}
	
	return dTime;
}
//星期格式化
function fnWeek(dDate){
	var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	var dWeek = dDate.getDay();
	return weeks[dWeek];
}
//带开关的日期拼接
function fnAllDate(dDate, bDate, bTime, bWeek){
	var sDate = "";
	
	if(bDate){
		sDate += fnDate(dDate);
	}
	if(bTime){
		sDate += fnTime(dDate);
	}
	if(bWeek){
		sDate += fnWeek(dDate);
	}
	return sDate;
}
//日期拆分成数组
function fnArrDate(dDate){
	var aDate = [];
	var sDate = fnDate(dDate, "/").split("/");
	var sTime = fnTime(dDate, ":").split(":");
	var dWeek = fnWeek(dDate);
	
	aDate = aDate.concat(sDate, sTime, dWeek);
	return aDate;//[年, 月, 日, 时, 分, 秒, "星期"];
}
//在固定位置出现
function fnPosDis(sId, nHeight){//参数：(元素ID, 居于屏幕顶部的距离)
	var oDiv = document.getElementById(sId);
	window.onscroll=function(){
		var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollT > nHeight){
			oDiv.style.display = "block";
		}else if(scrollT <= nHeight){
			oDiv.style.display = "none";
		}
	}
}
//支持低版本浏览器的固定定位
function fixedPos(sId, nTop){//如果第二个参数为true，则元素居于底部
	var oNav = document.getElementById(sId);
	//获取元素
	
	var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
	//计算网页卷去高度
	
	if(nTop==true){
		nTop = document.documentElement.clientHeight-oNav.clientHeight;
		//当nTop==true(需要元素居于底部), 计算出元素居于可视区顶部的距离
	}
	oNav.style.top = scrollT+nTop+"px";
	//设置元素的top值为：卷去高度+居于可视区顶部的距离+'px'
}
//返回顶部
function fnBackTop(sId ,nX, nY, nSpeed){//参数：x轴每次滚动的距离, y轴每次滚动的距离,
	var oBox = document.getElementById(sId);
	oBox.onclick=function(){
		var timer = setInterval(function(){
			window.scrollBy(nX, nY);
			var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollT <= 0){
				clearInterval(timer);
			}
		}, nSpeed);
	}
}
//获取非行间样式
function fngetStyle(oObj, sAttr){
//参数：需要获取样式的元素对象, 需要获取的样式属性名、

	if(oObj.currentStyle){
	//如果该对象存在currentStyle属性，则使用它
	
		sAttr = oObj.currentStyle[sAttr];
		//对象.currentStyle[属性名]
		
	}else{ 
	//其他情况使用高版本浏览器所具有的getComputedStyle()方法
	
		sAttr = getComputedStyle(oObj, false)[sAttr];
		//getComputedStyle(对象, false)[属性名]
	}
	
	return sAttr;  //返回最终得到的样式
}

//通过类名获取元素
function getByClass(oArea, sClass){
//参数：获取范围, 类名

	var aTag = oArea.getElementsByTagName('*');
	//使用通配符“*”获取范围内所有标签
	
	var aResult = [];
	//创建空数组，用于存放符合条件的元素
	
	for(var i=0; i<aTag.length; i++){//循环所有标签
	
		if(aTag[i].className == sClass){//如果标签类名符合要求
		
			aResult.push(aTag[i]);//将元素放进空数组中
			
		}
	}
	
	return aResult;//返回最终元素数组
	
}
//获取文本节点或元素节点
function getNodes(oObj, nNodeType){
//参数：父节点, 节点类型

	var childNodes = oObj.childNodes;
	//获取所有节点
	
	var childs = [];
	//创建数组接受新节点
	
	for(var i=0; i<childNodes.length; i++){
		if(childNodes[i].nodeType == nNodeType){
		//如果符合节点类型
		
			childs.push(childNodes[i]);
			//则放到数组中
			
		}
	}
	
	return childs;//返回新数组
}
//添加事件
function addEvent(oBox, sEvent, fn, bOpen){
//参数：元素, 事件名称, 事件处理函数, 添加或移除（true/false）
	if(bOpen){
		if(oBox.attachEvent){
			oBox.attachEvent("on"+sEvent, fn);//IE添加事件
		}else{
			oBox.addEventListener(sEvent, fn, false);//高版本添加事件
		}
	}else{
		if(oBox.dettachEvent){
			oBox.dettachEvent("on"+sEvent, fn);
		}else{
			oBox.removeEventListener(sEvent, fn, false);//高版本添加事
		}
	}
}

//新建cookie
function fnSetCookie(Name,Value,outtime){
	var dDate=new Date()
	dDate.setDate(dDate.getDate()+outtime);
	document.cookie=Name+"="+Value+";expires"+dDate;
}
function fnAlertCookie(){
	alert(document.cookie);
}
//删除cookie
function fnRemoveCookie(Name){
		fnSetCookie(Name,"",-1)
}
//查看cookie.value
function fnCheckCookie(Name){
	var scrit="";
	var aCookie=document.cookie.split("; ");
	for(i=0;i<aCookie.length;i++){
		var aCook=aCookie[i].split("=");
		if(aCook[0]==Name){ scrit=aCook[1]}
	}
	return scrit;
}
//阿贾克斯函数
function fnAjax(sUrl,fnSucc,fnFail){//surl(txt文件路径)
	if(typeof(XMLHttpRequest) != "undefined"){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("MSXML2.XMLHttp");
	}
	xhr.open("GET",sUrl,true);
	xhr.send(null);
	xhr.onreadystatechange=function(){
	if(xhr.readyState == 4 ){
		if(xhr.status==200){
			fnSucc(xhr.responseText)
		}else{
			fnFail(xhr.status)					
			}
		}
	}
}
function fn01(str){
	/*var data=eval(str);
	for(var i=0;i<data.length;i++){
		var oLi=document.createElement("li");
		oLi.innerHTML="姓名："+data[i].name+","+"年龄："+data[i].age+".";
		oUl.appendChild(oLi);
		
	}*/
	var aData=str;
	alert(aData);
	
}
function fn02(str){
	/*var data=eval(str);
	alert(xhr.statusText+":"+xhr.status);*/
	var aData=str;
	alert(aData);
}


//随意运动1
function fnMove(oBox, drec, nMax, speed){
	//操作对象， 运动属性， 目标点，  改变的数值
	
	var offDrec = parseInt(fngetStyle(oBox, drec));//当前位置
	var nDis = nMax-offDrec;//运动距离
	if(nDis < 0){//运动距离为小于0时，速度为负数
		speed *= -1;
	}
	var timer = setInterval(function(){
		var offDrec = parseInt(fngetStyle(oBox, drec));//定时器每次运行获取元素当前位置
		if(Math.abs(nMax-offDrec) < Math.abs(speed)){//将要到达时，关闭定时器，设置为目标值
			clearInterval(timer);
			oBox.style[drec] = nMax+"px";
		}else{//当前位置改变
			oBox.style[drec] = offDrec + speed + "px";
		}
	}, 30);
}

//json移动
function fnJsonMove(oObj,oJson,fn){
	clearInterval(oObj.timer);
	oObj.timer = setInterval(function(){
		var bStop=true;
		for(var attr in oJson){
			var curr;
			curr = parseInt(fngetStyle(oObj,attr))
			if(curr=='opacity'){
				curr = parseInt(fngetStyle(oObj,attr)*100);
			}
			var speed = (oJson[attr]-curr)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(speed != 0){
				bStop=false;
			}
			oObj.style[attr]= curr +speed+"px";
			if(attr=='opacity'){
				oObj.style[attr]=(curr+speed)/100;
				oObj.style['filter']='alpha(attr:'+(curr+speed)+')';
			}else{
				oObj.style[attr]=curr+speed+'px';
			}
		}
		if(bStop){
			clearInterval(oObj.timer);
			if(fn){
				fn()
			}
		}
	},30)
}

//无缝减速轮播函数封装
function fnWuFeng(oObj1,Ul,Li,oObj2,Prev,Next,nWidth){
	//oObj1最外城的盒子、oObj2是图下表的盒子、next是下一个按钮，prev是上一个按钮，Nwidth是li（图片的宽度）
	var now = 0;
	var oBox=document.getElementById(oObj1)
	var aLi=oBox.getElementsByTagName(Li);
	var aUl=oBox.getElementsByTagName(Ul)[0];
	var oDoc =document.getElementById(oObj2);
	var oPrev=document.getElementById(Prev);
	var oNext=document.getElementById(Next);
	
	
	for(var i=0 ;i < aLi.length-2;i++){
		var oSpan=document.createElement('span');
		oDoc.appendChild(oSpan);
	}
	var aSpan=oDoc.getElementsByTagName('span');
	aSpan[now].className="active";
	oBox.timer = setInterval(fnNext,3000)	
	oBox.onmouseover=function(){clearInterval(oBox.timer)}
	oBox.onmouseout=function(){oBox.timer = setInterval(fnNext,3000)}
	
	
	oNext.onclick=fnNext;
	oPrev.onclick=fnPrev;
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].index=i;
		aSpan[i].onclick=function(){
			now=this.index;
			fnchange(now);
		}	
	}
	function fnNext(){
		now++;
		if( now>=aLi.length ){
			now=2;
			aUl.style.left = (-nWidth)+"px";
		}
		fnchange(now);	
	}
	function fnPrev(){
		now--;
		if(now < 0){
			now=aLi.length-3;
			aUl.style.left = -(nWidth*aSpan.length)+"px";//700 是 li的宽度	
		}
		fnchange(now);
	}
	function fnchange(now){
		if( now >= aSpan.length ){var now2 = now-aSpan.length}
		else{
			var now2 = now
		}
		for(var i=0;i<aSpan.length;i++){
			aSpan[i].className="";
		}
		aSpan[now2].className="active";
		fnJsonMove(aUl,{"left":now*(-nWidth)})//700 是 li的宽度	
	}

}

//有缝减速轮播函数封装   用于图片轮播 
function fnYouFeng(oObj1,Ul,Li,oObj2,Prev,Next,nWidth){
	//oObj1最外城的盒子、oObj2是包含下一个，上一个按钮盒子、next是下一个按钮，prev是上一个按钮，Nwidth是li（图片的宽度）

	var now = 0;
	var oBox=document.getElementById(oObj1)
	var aLi=oBox.getElementsByTagName(Li);
	var aUl=oBox.getElementsByTagName(Ul)[0];
	var oDoc =document.getElementById(oObj2);
	var oPrev=document.getElementById(Prev);
	var oNext=document.getElementById(Next);
		
		
	for(var i=0 ;i < aLi.length;i++){
		var oSpan=document.createElement('span');
		oDoc.appendChild(oSpan);
	}
	var aSpan=oDoc.getElementsByTagName('span');
	aSpan[now].className="active";
	oBox.timer = setInterval(fnNext,3000)	
	oBox.onmouseover=function(){clearInterval(oBox.timer)}
	oBox.onmouseout=function(){oBox.timer = setInterval(fnNext,3000)}
	
	
	oNext.onclick=fnNext;
	oPrev.onclick=fnPrev;
	for(var i=0;i<aLi.length;i++){
		aSpan[i].index=i;
		aSpan[i].onclick=function(){
			now=this.index;
			fnchange(now);
		}	
	}
	function fnNext(){
		now++;
		if( now>aLi.length-1 ){now=0}
		fnchange(now);	
	}
	function fnPrev(){
		now--;
		if(now < 0){now=aLi.length-1}
		fnchange(now);
	}
	function fnchange(now){
		for(var i=0;i<aLi.length;i++){
			aSpan[i].className="";
		}
		aSpan[now].className="active";
		fnJsonMove(aUl,{"left":now*(-nWidth)})//li的width=700px;	
	}
}














