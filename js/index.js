$(function(){
	var keyDown;
	setTimeout(function(){
        $('.head-img').css({'width':'100','height':'100'})
        $('.head-img').css('bottom','-500px')
    },1000)
    setTimeout(function(){
        $('.head-img').css({'width':'120','height':'120'})
        $('.head-img').css('bottom','0');
        $('.textWrap,.bg-img').css('opacity','1');
        $('.pianoWrap').css('top','-150px');
    },216000)

    $('#music-control').click(function(event) {
    	var playPiano = $('#music-control').attr('data-music');
    	if(playPiano == "启动"){
    		clearInterval(keyDown);
    		$('.pianoWrap').css('top','-120px');
    	}else{
        	keyDown = setInterval(down,400)
        	$('.pianoWrap').css('top','0');
    	}
    });
    setTimeout(function(){
    	$('.pianoWrap').css('top','0');
    	keyDown = setInterval(down,400)
    },1500)
	function down(){
	    var randomNum = parseInt(Math.random() * 32);
	    var randomNum1 = parseInt(Math.random() * 32);
	    var randomNum2 = parseInt(Math.random() * 32);
	    $('.pianoWrap li').removeClass('down');
	    $('.pianoWrap li').eq(randomNum+10).addClass('down')
	    $('.pianoWrap li').eq(randomNum1+10).addClass('down')
	    $('.pianoWrap li').eq(randomNum2+10).addClass('down')
	}
})