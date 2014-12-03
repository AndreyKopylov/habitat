$(document).ready(function(){
    $('.main').on('click',function(){
        $(this).addClass('active');
        $('.inbox').addClass('menu-active')
        $('.content').addClass('menu-active')
    $('.content').on('click', function(){
        $(this).removeClass('menu-active');
        $('.inbox').removeClass('menu-active')
        $('.main').removeClass('active')
    });
    });
    $('#inbox-scroll').mCustomScrollbar({
		axis: "y",
		theme: "minimal"
	});
});
