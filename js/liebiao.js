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
	var $firstdl = $(".last-style").siblings();
		
	$firstdl.on('mouseenter',function(){
		$(this).css({background:'#ddd'});
		$(this).children().css({textDdecoration:null});
	}).on('mouseleave',function(){
		$(this).css({background:'#fff'});
	});
	
	//城市选择鼠标
	
	var $citylista = $('#city-list').find('a');
		//alert($citylista.length)
		$citylista.on('mouseenter',function(){
			$(this).css({
				textDecoration:'underline',
				color:'#f00'
			});
		}).on('mouseleave',function(){
			$(this).css({
				textDecoration:'none',
				color:'#333',
			})
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
		
	//========内容读片鼠标划过效果==============//
	$imgc = $('.mlbtn').find('img')
	$imgc.on('mouseenter',function(){
		$(this).css({
			opacity:'.7',
			filter:"alpha(opacity:70)"
		})
	}).on('mouseleave',function(){
		$(this).css({
			opacity:'1',
			filter:"alpha(opacity:100)"
		})
	})
	var $aimg = $('.mainright_btn').find('img');
	$aimg.on('mouseenter',function(){
		$(this).css({
			opacity:'.7',
			filter:"alpha(opacity:70)"
		})
	}).on('mouseleave',function(){
		$(this).css({
			opacity:'1',
			filter:"alpha(opacity:100)"
		})
	})
	var $bimg = $('.lbright').find('img')
	$bimg.on('mouseenter',function(){
		$(this).css({
			opacity:'.7',
			filter:"alpha(opacity:70)"
		})
	}).on('mouseleave',function(){
		$(this).css({
			opacity:'1',
			filter:"alpha(opacity:100)"
		})
	})
	
	var $imgb = $('#title_1').find('img')
	
	$imgb.on('mouseenter',function(){
		$(this).css({
			opacity:'.7',
			filter:"alpha(opacity:70)"
		})
	}).on('mouseleave',function(){
		$(this).css({
			opacity:'1',
			filter:"alpha(opacity:100)"
		})
	})
	
	//foot-top内容切换
	var $foota = 	$('.foot_top_center_top').find('a')
	var $footli = $('.foot_top_center_btn').find('li')	
	$footli.eq(0).show().siblings().hide();
	
	$foota.eq(0).addClass('at');
	$foota.on('mouseenter',function(){
		var index = $(this).index();
		$foota.removeClass('at');
		$(this).addClass('at');
		$footli.eq(index).show().siblings().hide()
	})
	
	//footer2 特效
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

	//===============用户直到鼠标划过改变img的路径========================/
	
	
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







