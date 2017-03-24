

// JavaScript Document
$(document).ready(doc_ready);

function doc_ready(){
	"use strict";
	
	var curInd =0;
	var totalImage = 9;
	
	var clrs = new Array(9);
	clrs[0] = "#F2EFEB";
	clrs[1] = "#FFDEC2";
	clrs[2] = "#BEECA9";
	clrs[3] = "#D8EFD8";
	clrs[4] = "#FFECA9";
	clrs[5] = "#D8EFD8";
	clrs[6] = "#FFCF8E";
	clrs[7] = "#EFEDD4";
	clrs[8] = "#EADFE1";
	
	
	var $img_preview = $("#img_preview");
	
	
	var btns =new Array(3);
	btns[0] = $('#btn1');
	btns[1] = $('#btn2');
	btns[2] = $('#btn3');
	
	var btnImgs = new Array(3);
	btnImgs[0] = $('#btn1 img');
	btnImgs[1] = $('#btn2 img');
	btnImgs[2] = $('#btn3 img');
	
	
	
	function mouseDown_1(){
		$(this).attr('src',"img/btn1B.png"); 
		
	}
	
	function mouseup_1(){
		$(this).attr('src',"img/btn1A.png"); 
	}
	
	function mouseDown_2(){
		$(this).attr('src',"img/btn2B.png"); 
	}
	
	function mouseup_2(){
		$(this).attr('src',"img/btn2A.png"); 
	}
	
	function mouseDown_3(){
		$(this).attr('src',"img/btn3B.png"); 
	}
	
	function mouseup_3(){
		$(this).attr('src',"img/btn3A.png"); 
	}
	
	btnImgs[0].mousedown(mouseDown_1);
	btnImgs[0].mouseup(mouseup_1);
	btnImgs[0].mouseleave(mouseup_1);
	btnImgs[0].bind('touchstart', mouseDown_1);
	btnImgs[0].bind('touchend', mouseup_1);
	
	btnImgs[1].mousedown(mouseDown_2);
	btnImgs[1].mouseup(mouseup_2);
	btnImgs[1].mouseleave(mouseup_2);
	btnImgs[1].bind('touchstart', mouseDown_2);
	btnImgs[1].bind('touchend', mouseup_2);
	
	btnImgs[2].mousedown(mouseDown_3);
	btnImgs[2].mouseup(mouseup_3);
	btnImgs[2].mouseleave(mouseup_3);
	btnImgs[2].bind('touchstart', mouseDown_3);
	btnImgs[2].bind('touchend', mouseup_3);

	

	
	
	$('#btn1').click(function(){
		
		curInd-=1;
		if(curInd < 0){
			curInd+=totalImage;
		}
		
		$img_preview.attr('src',"img/pattern"+curInd+".png"); 
		$img_preview.fadeTo(0, 0.2);
		$img_preview.fadeTo('normal', 1);
		$('body').css({backgroundColor: clrs[curInd]}).fadeIn(1000);
		
	});
	
	$('#btn3').click(function(){
		
		curInd+=1;
		if(curInd >= totalImage){
			curInd-=totalImage;
		}
		
		$img_preview.attr('src',"img/pattern"+curInd+".png"); 
		$img_preview.fadeTo(0, 0.2);
		$img_preview.fadeTo('normal', 1);
		$('body').css({backgroundColor: clrs[curInd]}).fadeIn(1000);
	});
	
	
	
	$('#btn2').click(function(){
		
		curInd = 0;
		
		$img_preview.attr('src',"img/pattern"+curInd+".png"); 
		$img_preview.fadeTo(0, 0.2);
		$img_preview.fadeTo('normal', 1);
		$('body').css({backgroundColor: clrs[curInd]}).fadeIn(1000);
		
	});
	
}