// JavaScript Document

jQuery(function($){
	
	$('#uerweblist').css({display:'none'})
	$('#hoverboder').css({background:'url(images/sanjiao.png) no-repeat 75px 15px'})
	$('#hoverboder').on('mouseenter',function(){
		$(this).css({background:'url(images/shangsanjiao.png) no-repeat 75px 15px'})
		$('#uerweblist').css({display:'block',background:'#f1f1f1'})
	}).on('mouseleave',function(){
		$('#uerweblist').css({display:'none'});
		$('#hoverboder').css({background:'url(images/sanjiao.png) no-repeat 75px 15px'})
	});
	var $firstdl = $(".last-style").siblings();
		
	$firstdl.on('mouseenter',function(){
		$(this).css({background:'#ddd'});
		$(this).children().css({textDdecoration:null});
	}).on('mouseleave',function(){
		$(this).css({background:'#fff'});
	});	
	//var $margin_1 = $('.margin_1')
	//console.log($margin_1.offset().top)
	
	//鼠标滑过出现省市航导
	$('#city-list').css({display:'none'})
	var $qiehuansanjiao = $('.qiehuansanjiao')
	$('.city-nav').on('mouseenter',function(){
		$(this).find('img').attr('src','images/shangsanjiao.png');
		$(this).css({background:'#fff'})
		$(this).find('ul').css({display:'block'})
	}).on('mouseleave',function(){
		$(this).css({background:'none'})
		$(this).find('ul').css({display:'none'})
			$(this).find('img').attr('src','images/sanjiao.png');
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
		$(this).find('img').attr('src','images/shangsanjiao.png');
	}).on('mouseleave',function(){
		$('#post').hide();
		$(this).find('img').attr('src','images/sanjiao.png');
		$(this).children('a').css({textDecoration: 'null',color:'',background:''})
	});
	
	//banner导航鼠标划过显示
	
	$('.dglist').hide()
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
	
	//轮播
	var $lunbolist=  $('#lunbolist') ;
	var $lunboli = $lunbolist.find('li');
	var $next = $('#next');
	var $prev = $('#prev');
	var $aSpan = $('#doc').find('span');
	var $bannercter = $('#bannercter')
	var nWidth = $lunboli.width();
	//console.log(nWidth);
	var lbnow = 0 ;
	//小导航初始高亮
	$aSpan.eq(0).addClass("active");
	//建立定时器
 	 $bannercter.timer = setInterval(fnNext,1000);
 	//鼠标移入移出时开关定时器
 	$bannercter.on('mouseenter',function(){
 		//alert(1)
 		clearInterval($bannercter.timer);
 	}).on('mouseleave',function(){
 		$bannercter.timer = setInterval(fnNext,1000);
 	})
 	//下标导航鼠标划过时
	$aSpan.on('mouseenter',function(){
		var lbnow = $(this).index();
		fnlbchange(lbnow);
	})	
   	
   	//上下转换图片
 	$next.on('click',function(){
 		fnNext()
 	})
 	$prev.on('click',function(){
 		fnPrev()
 	})

	function fnNext(){
		lbnow++;
		if( lbnow>=$lunboli.length ){
			lbnow=2;
			$lunbolist.css({left:-nWidth})
		}
		fnlbchange(lbnow);	
	}	
 	function fnPrev(){
		lbnow--;
		if(lbnow < 0){
			lbnow=$lunboli.length-3;
			$lunbolist.animate({left:-nWidth*lbnow});//700 是 li的宽度	
		}
		fnlbchange(lbnow);
	}
 	function fnlbchange(lbnow){
			if( lbnow >= $aSpan.length ){var lbnow2 = lbnow-$aSpan.length}
			else{
				var lbnow2 = lbnow
			}
			for(var i=0;i<$aSpan.length;i++){
				$aSpan.eq(i).addClass("");
			}
			$aSpan.eq(lbnow2).siblings().removeClass('active')
			$aSpan.eq(lbnow2).addClass("active");
			$lunbolist.animate({left:-750*lbnow})//700 是 li的宽度	
		}
	
	//正品授权鼠标划过运动
	var $shuomul = $("#shuomul")
	var $movetu =  $shuomul.find('.movetu')
	
	$movetu.on('mouseenter',function(){
		$(this).stop().animate({top:-50},function(){
			$(this).stop().animate({top:-40})
		})
	})
		
	//内容读片鼠标划过效果
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
	//footer1鼠标滑过
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
		//楼梯效果..

	
		/*思路：
				1、给window绑定scroll事件
					1）当滚动到一定距离时，显示导航条
					2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
				2、点击导航条，滚动到相应的楼层
				3、返回顶部
		 */
		var $nav = $('#LoutiNav');
		var $floor = $('.maina');
		$nav.fadeOut();
		// 1、给window绑定scroll事件
		$(window).on('scroll',function(){
			// 获取滚动过的距离
			var scrollTop = $(window).scrollTop();

			// 1）当滚动到一定距离时，显示导航条
			if(scrollTop >= $floor.eq(0).offset().top  && scrollTop <= 4800){
				$nav.fadeIn();
			}else{
				$nav.fadeOut();
			}

			// 2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
			// 目的：获得index值
			var $ltspan = $nav.find('span')
			//$ltspan.hide();
			$floor.each(function(idx,ele){// $(ele).outerHeight()/2
				if(scrollTop >= $(ele).offset().top && scrollTop <= $(ele).offset().top + $(ele).outerHeight(true)/2){
					$ltspan.hide().eq(idx).show();
					return false;
				}
			});
		});
		//鼠标划过出现楼层信息
		$nav.on('mouseenter','li',function(){
			var $ltspan = $nav.find('span')
				var index = $(this).index();
				$ltspan.hide();
				$ltspan.eq(index).show()
		})
		// 2、点击导航条，滚动到相应的楼层

		$nav.on('click','li',function(){
			// 3、返回顶部
			if($(this).hasClass('last')){
				// $(window).scrollTop(0);
				$('html,body').animate({scrollTop:0});
				return;
			}
			var index = $(this).index();
			var scrollTop = $floor.eq(index).offset().top;
			// $(window).scrollTop(scrollTop);
			$('html,body').animate({scrollTop:scrollTop});
		});


















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







