// 导航
$(function(){
	var $target, $nav_list_sub
	$(".nav_list li").hover(function(e){
		$target = $(e.target)
		$nav_list_sub = $target.siblings('.nav_list_sub')
		if ( $nav_list_sub.size() && $nav_list_sub.hasClass('none')) {
			$nav_list_sub.removeClass('none')
		}
	}, function(){
		if ( $nav_list_sub.size()) {
			$nav_list_sub.addClass('none')
		}
	})
})