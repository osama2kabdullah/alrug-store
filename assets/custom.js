$(window).scroll(function() {
  if($(this).scrollTop() > 300) {
    $('#back_top').fadeIn();
  } else {
    $('#back_top').fadeOut();
  }
});
$('#back_top').click(function() {
  $('body,html').animate({scrollTop:0},500);
});

$(document).ready(function(){
  $(document).ready(function () {
    $(".moretext").hide();
    $(".moreless-button").on("click", function () {
      
        var txt = $(".moretext").is(':visible') ? 'read more' : 'read less';
        $(".moreless-button").text(txt);
      	 $('.moretext').toggle();
       
    });
        
        $(".read-more").on("click", function () {
      	 $('.more-content').show(); 
         $('.read-more').hide();
    });
        $(".read-less").on("click", function () {
      	 $('.more-content').hide(); 
         $('.read-more').show();
    });
});
		$(".mobile-bar-icon").click(function(){
			$(".mobile-bar-content").addClass("open");
		});
		$(".mobile-bar-close").click(function(){
			$(".mobile-bar-content").removeClass("open");
		});

		$(".tabs-mobile .item-menu").addClass("active");
		$(".tabs-mobile .item").click(function(){
			$(".tabs-mobile .item").removeClass("active");
			$(this).addClass("active");
		});
		$(".tabs-mobile .item-menu").click(function(){
			$(".tabs-content-mobile").css("display","none");
			$(".tabs-menu").css("display","block");
		});
		$(".tabs-mobile .item-account").click(function(){
			$(".tabs-content-mobile").css("display","none");
			$(".tabs-account").css("display","block");
		});
		$(".tabs-mobile .item-setting").click(function(){
			$(".tabs-content-mobile").css("display","none");
			$(".tabs-setting").css("display","block");
		});
		jQuery(".search-show").click(function(){
			jQuery(".mobile-search").toggle("slow");
		});

	});	
                function goToByScroll(id){
            $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
        }
$('.items.data #nav-tab a').click(function(){
$('.items.data #nav-tab a').removeClass('active');
$(this).addClass('active');
});

$('.items.info #nav-tab a').click(function(){
$('.items.info #nav-tab a').removeClass('active');
$(this).addClass('active');
});
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 400;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "read more ";
    var lesstext = "read less";
    

    $('.description span').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
 $(".back-link").click(function(){
    $(this).parent().parent().parent().removeClass('is-focused');
// $('.site-nav--has-dropdown').removeClass('is-focused');
 })
  $(".navbar-toggle").click(function(){
    $(".site-nav__item").removeClass('is-focused');
 })
 
var products_on_page = $(".products-on-page")
var next_url = products_on_page.data('next-page')

var load_more_btn = $(".btn-load")
var load_spin = $(".load_more_spinner")

function load_more(){
	$.ajax(
    {
        url:next_url,
        type:'GET',
        dataType:'html',
        beforeSend:function(){
      	load_more_btn.hide();
        load_spin.show();
      }
    }
).done(function(next_page){
    load_spin.hide();
    var new_product = $(next_page).find(".products-on-page");
    var new_url = new_product.data('next-page');
      
      if(new_url)
        load_more_btn.show();
        

    next_url = new_url ;
    products_on_page.append(new_product.html())
})
}


 