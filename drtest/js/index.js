$(function(){
	$(".btn-gnavi").on("click", function(){
		// ハンバーガーメニューの位置を設定するための変数
		var rightVal = 0;
		if($("#navi").hasClass("open")) {
			// 「open」クラスを持つ要素はメニューを開いた状態に設定
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$("#navi").removeClass("open").addClass("close");
		} else {
			// 「open」クラスを持たない要素はメニューを閉じた状態に設定 (rightVal は0の状態 )
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$("#navi").addClass("open").removeClass("close");
		}

		$("#global-navi").stop().animate({
			right: rightVal
		}, 200);
	});
});
$(function(){
	setTimeout('stopload()',2000);
  });
   
  function stopload(){
	$('#loading').fadeOut(400);
  }

// $(window).load(function(){
// 	$('#loading').fadeOut(400, function(){ $(this).remove(); });
// });