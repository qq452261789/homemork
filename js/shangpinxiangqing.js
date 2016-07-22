// JavaScript Document

jQuery(function($){
	
	$('#uerweblist').css({display:'none'})
	$('#hoverboder').css({background:'url(../images/sanjiao.png) no-repeat 75px 15px'})
	$('#hoverboder').on('mouseenter',function(){
		$(this).css({background:'url(../images/shangsanjiao.png) no-repeat 75px 15px'})
		$('#uerweblist').css({display:'block',background:'#f1f1f1'})
	}).on('mouseleave',function(){
		$('#uerweblist').css({display:'none'});
		$('#hoverboder').css({background:'url(../images/sanjiao.png) no-repeat 75px 15px'})
	});
	
	
	//省市选择鼠标划过出现
	var $firstdl = $(".last-style").siblings();
		
	$firstdl.on('mouseenter',function(){
		$(this).css({background:'#ddd'});
		$(this).children().css({textDdecoration:null});
	}).on('mouseleave',function(){
		$(this).css({background:'#fff'});
	});
	
	//省市选择鼠标
	//鼠标滑过出现省市航导
	$('#city-list').css({display:'none'})
	var $qiehuansanjiao = $('.qiehuansanjiao')
	$('.city-nav').on('mouseenter',function(){
		$(this).find('img').attr('src','../images/shangsanjiao.png');
		$(this).css({background:'#fff'})
		$(this).find('ul').css({display:'block'})
	}).on('mouseleave',function(){
		$(this).css({background:'none'})
		$(this).find('ul').css({display:'none'})
			$(this).find('img').attr('src','../images/sanjiao.png');
	});
	//手机app划过显示
	$('#weixin').hide();
	$('.app').on('mouseenter',function(){
		$('#weixin').show();
	}).on('mouseleave',function(){
		$(this).find('a').eq(0).css({
			textDecoration:'underline',
			color:'#06C'
		})
		$('#weixin').hide();
	})
	
	//购物车划过提示登入
	$('#carts').hide()
	$('#goodscar').on('mouseenter',function(){
		$('#carts').show()
	}).on('mouseleave',function(){
		$('#carts').hide()
	})
	
	//掌上一要鼠标划过
	$('#post').hide()
	$('.sanjiao1').on('mouseenter',function(){
		$('#post').show();
		$(this).children('a').css({textDecoration: 'underline',color:'#fff',background:'#0000FF'})
		$(this).find('img').attr('src','../images/shangsanjiao.png');
	}).on('mouseleave',function(){
		$('#post').hide();
		$(this).find('img').attr('src','images/sanjiao.png');
		$(this).children('a').css({textDecoration: 'null',color:'',background:''})
	});
	
	//banner导航鼠标划过显示
	
	$('.dglist').hide();
	$('.banerlaeft').hide
	$('.showld').on('mouseenter',function(){
		$('.dglist').show()
	})
	$('.dglist').on('mouseleave',function(){
		$('.dglist').hide()
	});
	var $moveli = $('.moveli')
	var $bannerLi =  $moveli.closest('li')
	var $shoulist = $('#shoulist')
	var $shoulistli =$('.shoulist').children('li')
	 $shoulist.hide()
	$shoulistli.hide();
	$bannerLi.on('mouseenter',function(){
		var index = $(this).index()
		 $shoulist.show()
		$(this).css({background:'#f1f1f1',color:'red'});
		$(this).find('.moveli').stop().animate({left:40});
		$shoulistli.eq(index).show().siblings().hide();
	}).on('mouseleave',function(){
		var index = $(this).index()
		 $shoulist.hide()
		$(this).css({background:'#333',color:'#fff'});
		$(this).find('.moveli').stop().animate({left:20})
		$shoulistli.eq(index).hide();
		
	})
	//出现导航后鼠标进入导航
	$shoulistli.on('mouseenter',function(){
		var index = $(this).index()
		 $shoulist.show()
		$(this).show().siblings().hide();
		$bannerLi.eq(index).css({background:'#f1f1f1',color:'red'});
		$moveli.eq(index).stop().animate({left:40})
	}).on('mouseleave',function(){
		var index = $(this).index();
		$shoulistli.hide();
		 $shoulist.hide()
		$moveli.eq(index).stop().animate({left:20});
		$bannerLi.eq(index).css({background:'#333',color:'#fff'});
	})
	
	
	//正品授权鼠标划过运动
	var $shuomul = $("#shuomul")
	var $movetu =  $shuomul.find('.movetu')
	
	$movetu.on('mouseenter',function(){
		$(this).stop().animate({top:-50},function(){
			$(this).stop().animate({top:-40})
		})
	})
		
		//	----商品放大镜--------
	var $smallimg = $('.smallimg');
	var $bigimg = $('.bigimg');
	var $xqli  = $smallimg.find('li');
	var $jz_box= $('.jz_box');
	var $jzimg = $jz_box.find('img');
	var $fangdajing = $('.fangdajing')
	//	初始隐藏放大镜和放大读片的盒子
	
	$jz_box.hide();
	$fangdajing.hide();
	//	小图表手表滑入切换大图显示
	$smallimg.on('mouseenter','li',function(){
		var index= $(this).index();
		var imgnum = index+1
		$xqli.removeClass('act');
		$(this).addClass('act');
		var $simg = $bigimg.find('img');
		$simg.attr('src','../css/images/xq_'+imgnum+'.jpg')
		$jzimg.attr('src','../css/images/xq_a_'+imgnum+'.jpg')
	})
	
	$bigimg.on('mousemove',function(e){
		$jz_box.show();
		$fangdajing.show();
		var nleft = $bigimg.offset().left;
		var ntop = $bigimg.offset().top;
		var posX = e.pageX -nleft - $fangdajing.outerWidth()/2;
		var posY = e.pageY - ntop- $fangdajing.outerHeight()/2;
		var maxX = $bigimg.outerWidth()-$fangdajing.outerWidth();
		var maxY = $bigimg.outerHeight()-$fangdajing.outerHeight();
		//console.log($fangdajing.offset().left);
		if(posX<=0){
			posX=0;
		}else if(posX>=maxX){posX=maxX};
		if(posY<0){
			posY=0
		}else if(posY>=maxY){posY=maxY}
		$fangdajing.css({
			left:posX,
			top:posY
		});
		$jz_box.find('img').css({
			left:-posX*2,
			top:-posY*2,
		})
	}).on('mouseleave',function(){
		$jz_box.hide();
		$fangdajing.hide();
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//footer2 图片运动先向上运动后向下运动 特效
	var $f2_move = $('.f2_move');
	var $foot_2 =$('.foot_2');
	$foot_2.on('mouseenter','li',function(){
		var index = $(this).index()
		$f2_move.eq(index).stop().animate({top:0},function(){
			$f2_move.eq(index).stop().animate({top:10})
		})	
	})
	//===============footer1鼠标滑过========================/
	var $foot_1_btn = $('.foot_1_btn');
	var $tdiv = $('.foot_1_top').find('div');
	var $tspan=$tdiv.find('span');
	var $tdiv_2 = $('.foot_1_btn').find('div');
	$tspan.eq(1).hide();
	$tdiv_2.eq(1).hide();
	$tdiv.on('mouseenter',function(){
		var index = $(this).index();
		$tdiv_2.eq(index).show().siblings().hide();

		$tdiv.eq(index).siblings().find('span').hide();
		$(this).find('span').show();
		
		$(this).css({
			background:'#fff'
		}).siblings().css({
			background:'#F8F8F8'
		});
	});


	//===============手风琴鼠标滑过========================/
 	var $fqul = $('.main_left_ul1');
 	var $fqli =  $fqul.children('li');
 	var $fqheight = $fqli.height();
 	
	$fqul.on('click','li',function(){
		var index = $(this).index();
		if( $fqli.eq(index).height()<50){
			if($(this).is(':animated') || $(this).siblings().is(':animated')){
			return;
			};
			var $fq_ul = $(this).find('ul');
	 		var $fq_li =  $fq_ul.find('li');
	 		var $fqp = $(this).find('p')
	 		var $fqspan = $fqp.children('span');
	 		$(this).siblings().stop(true).animate({height:38});
	 		$(this).siblings().find('ul').css({display:"none"});
	 		$(this).siblings().find('span').removeClass('actve_a');
	 		
	 		$(this).stop(true).animate({height:$fqheight*(1+$fq_li.length)})
	 		$fqspan.addClass('actve_a');
			$fq_ul.css({display:"block"});
		}else{
			if($(this).is(':animated') || $(this).siblings().is(':animated')){
			return;
			};
			var $fq_ul = $(this).find('ul');
	   		var $fq_li =  $fq_ul.find('li');
	   		var $fqp = $(this).find('p')
	   		var $fqspan = $fqp.children('span');
	   		$(this).animate({height:38});
	   		$(this).siblings().find('ul').css({display:"none"})
	   		//$(this).stop(true).animate({height:$fqheight*(1+$fq_li.length)})
	   		$fqspan.removeClass('actve_a');
			$fq_ul.css({display:"none"});	
			
		}
	})
	$fqul.on('dblclick','li',function(){
		if($(this).is(':animated') || $(this).siblings().is(':animated')){
			return;
		};
		var $fq_ul = $(this).find('ul');
   		var $fq_li =  $fq_ul.find('li');
   		var $fqp = $(this).find('p')
   		var $fqspan = $fqp.children('span');
   		$(this).animate({height:38});
   		$(this).siblings().find('ul').css({display:"none"})
   		$fqspan.remove('actve_a');
		$fq_ul.css({display:"none"});	
	})
	
	
	//返回顶部	
	var $fixnavul = $('#fixnavul');
	var $fixnavli = $fixnavul.children('li');
	var $fixnava = 	$fixnavli.children('cite');
	var $movetu  = $('.movetu')
	var $weixinbeij = $('.weixinbeij')
	var $zixun = $('.zixun')
	$zixun.hide()
	$fixnava.fadeOut()
	$fixnavul.on('mouseenter','li',function(){
		$(this).children('cite').stop().fadeIn()
	}).on('mouseleave','li',function(){
		$(this).children('cite').stop().fadeOut()
	})
	$fixnava.last().on('click',function(){
		$('html,body').animate({
			scrollTop:0	
		},2000)	
	});
	//在线咨询
	$fixnava.first().on('mouseenter',function(){
		$zixun.show();
		$fixnava.eq(0).show();
		
		setInterval(function(){
			$weixinbeij.animate({top:10},100).animate({top:12},100)
		},500)
		
	}).on('mouseleave',function(){
		$zixun.hide();
		$fixnava.eq(0).hide();
		clearInterval(function(){
			$weixinbeij.animate({top:10},100).animate({top:12},100)
		},500)
	});
	//弹出咨询后效果
	$zixun.on('mouseenter',function(){
		$(this).siblings('cite').show();
		$zixun.show();
	}).on('mouseleave',function(){
		$(this).siblings('cite').hide();
		$zixun.hide();
	})
})







