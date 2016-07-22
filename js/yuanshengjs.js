
(function($){
	$.fn.arSlide = function(options){
		//alert(1)
		// 预设默认值
		var defaults = {
			autoPlay:true,
			showSmall:true,
			showButton:true,
			type:'fade' //渐显(fade,默认)，上下滚动(moveY)，左右滚动(moveX)
		}
		var opt = $.extend(defaults,options);
		this.each(function(){
			var lbnow = 0;
			var $obj = $(this);
			var $objfater = $obj.parent();
			var $ul = $obj.find('ul');
			var $li = $ul.find('li');
			var nwidth = $li.eq(0).width()
			//console.log(nwidth);
			//创建一个装span的盒子
			var $spanbox = $('<div/>');
			$spanbox.appendTo($objfater);
			$spanbox.css({
				position:'absolute',
				left:0,
				bottom:20,
				height:20,
				width:605,
				textAlign:'center',
				
			})
			
			$objfater.css({position:'relative'});
			//根据图片生成span
			for(var i = 0 ;i<$li.length-2;i++){
				$('<span/>').appendTo($spanbox);	
			};
			
			var $span = $spanbox.find('span');
			$span.css({
				width:10,
				height:10,
				background:'red',
				marginRight:10,
				display:'inline-block',
				borderRadius:'50%',
				'-moz-border-radius':'50%', /* Firefox */
  				'-webkit-border-radius':'50%', 
				marginTop:5,
				opacity:.5,
				filter:'alpha(opacity:50)',
			})
			$span.eq(0).css({background:"blue"});
			 $obj.timer = setInterval(fnNext,2000);
	 	//鼠标移入移出时开关定时器
	 		$obj.on('mouseenter',function(){
	 			clearInterval($obj.timer);
	 		}).on('mouseleave',function(){
	 			$obj.timer = setInterval(fnNext,2000);
			})
	 		
			$span.on('mouseenter',function(){
				var lbnow = $(this).index();
				fnlbchange(lbnow);
				$span.css({background:"red"})
				$span.eq(lbnow).css({background:"blue"});
			})
			
			
			function fnNext(){
				lbnow++;
				if( lbnow>=$li.length ){
					lbnow=2;
					$ul.css({left:-605})
				}
				fnlbchange(lbnow);	
			}	
		   	function fnPrev(){
				lbnow--;
				if(lbnow < 0){
					lbnow=$li.length-3;
					$ul.animate({left:-nwidth*lbnow});//700 是 li的宽度	
				}
				fnlbchange(lbnow);
			}
			
			
			function fnlbchange(lbnow){
				if( lbnow >= $span.length ){var lbnow2 = lbnow-$span.length}
				else{
					var lbnow2 = lbnow
				}
				for(var i=0;i<$span.length;i++){
					$span.eq(i).css({background:"red"});
				}
				$span.css({background:"red"})
				$span.eq(lbnow2).css({background:"blue"});
				$ul.stop().animate({left:-nwidth*lbnow})//605 是 li的宽度	
			}
			
			
       });
    return this;
	}
})(jQuery);


