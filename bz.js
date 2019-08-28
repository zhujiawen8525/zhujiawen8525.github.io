
// 点击显示搜索框
var searchtu = document.getElementById("searchtu");
var searchcontent = document.getElementById("searchcontent");
var sfclose = document.getElementById("sfclose");

searchtu.onclick=function(){
	if(searchcontent.style.display="none"){
		searchcontent.style.display="block";
	}else{
		searchcontent.style.display="none";
	}
}
sfclose.onclick=function(){
	if(searchcontent.style.display="block"){
		searchcontent.style.display="none";
	}
}

// 记住我的登录状态
var checked = document.getElementById("checked");
var onoff = true;

checked.onclick=function(){
	if(onoff){
		checked.style.background="url(images/login-icon.png) -87px -614px";
		onoff=false;
	}else{
		checked.style.background="url(images/login-icon.png) -57px -614px";
		onoff=true;
	}
}

// 登录判断用户名和手机号
var dltxt = document.getElementById("dltxt");
var dlmm = document.getElementById("dlmm");
var dlzc = document.getElementById("dlzc");
var error = document.getElementById("error");
var mask = document.getElementById("mask");

dlzc.onclick=function(){
	if(dltxt.value==""){
		error.innerHTML="用户名不能为空";
		return;
	}else if(dlmm.value==""){
		error.innerHTML="密码不能为空";
		return;
	}else{
		error.innerHTML="";
		mask.style.display="none"
	}
}

// 显示登录页面
var mask = document.getElementById("mask");
var dengl = document.getElementById("dengl");

dengl.onclick=function(){
	if(mask.style.display=="none"){
		mask.style.display="block"
	}
}

// 关闭登录页面
var mask = document.getElementById("mask");
var dlclose = document.getElementById("dlclose");

dlclose.onclick=function(){
	if(mask.style.display=="block"){
		mask.style.display="none"
	}
}

// 鼠标划上显示
var lunbo = document.getElementById("lunbo");
var lbyc = document.getElementById("lbyc");
var lbjt = document.getElementById("lbjt");

lunbo.onmouseover = function(){
	lbyc.style.display="block";
	lbjt.style.display="block";
}
lunbo.onmouseout = function(){
	lbyc.style.display="none";
	lbjt.style.display="none";
}

// 划上关注显示二维码
var osths = document.getElementById("osths");
var ostewm = document.getElementById("ostewm");

osths.onmouseover = function(){
	ostewm.style.display="block";
}
osths.onmouseout = function(){
	ostewm.style.display="none";
}

// 划上扫码下载显示二维码
var osths2 = document.getElementById("osths2");
var ostewm2 = document.getElementById("ostewm2");

osths2.onmouseover = function(){
	ostewm2.style.display="block";
}
osths2.onmouseout = function(){
	ostewm2.style.display="none";
}

// 划上扫码关注显示二维码
var osths3 = document.getElementById("osths3");
var ostewm3 = document.getElementById("ostewm3");

osths3.onmouseover = function(){
	ostewm3.style.display="block";
}
osths3.onmouseout = function(){
	ostewm3.style.display="none";
}